import { createClient as createDeliveryClient } from "contentful";
import { ClientAPI, createClient } from "contentful-management";
import colors from "colors";
import crypto from "crypto";
import fs from "fs";

// Cliente para leer contenido (Content Delivery API)
export const deliveryClient = createDeliveryClient({
  space: "k9voop8uf94b",
  accessToken: "dVkwzvA0LUKDn83NgGkvwo_HMf9rV8TzfWjpd6nJizI",
});

// Cliente para gestionar contenido (Content Management API)
export const managementClient: ClientAPI = createClient({
  accessToken: "CFPAT-fQQuxSBYTtwet9NZdCnEKh57X-IaxPnLomAeR-Fx2H4",
});


function generateID(): string {
  const array = new Uint8Array(16);
  crypto.randomFillSync(array); // Usa crypto.randomFillSync para llenar el array con valores aleatorios

  const uuid = [...array].map((byte, index) => {
    const hex = byte.toString(16).padStart(2, '0'); 
    if (index === 6) {
      return (parseInt(hex[0], 16) & 0x0f | 0x40).toString(16) + hex[1]; 
    }
    if (index === 8) {
      return (parseInt(hex[0], 16) & 0x3f | 0x80).toString(16) + hex[1]; 
    }
    return hex;
  }).join('');
  
  return `${uuid.slice(0, 8)}-${uuid.slice(8, 12)}-${uuid.slice(12, 16)}-${uuid.slice(16, 20)}-${uuid.slice(20)}`;
}

async function AvailableName() {
  const space = await managementClient.getSpace("k9voop8uf94b");
  const environment = await space.getEnvironment("master");
  const entries = await environment.getEntries();

  let nameFound = false;
  let name = "";

  while (!nameFound) {
    name = generateID();
    nameFound = true;

    for (const entry of entries.items) {
      if (entry.fields.internalName === name) {
        nameFound = false;
        break;
      }
    }
  }
  console.log("Name generated:", name);
  return name;
}

async function existingEmail(email: string) {
  const space = await managementClient.getSpace("k9voop8uf94b");
  const environment = await space.getEnvironment("master");
  const entries = await environment.getEntries();

  console.log(colors.bgYellow(email))


  for (const entry of entries.items) {
    if (entry.fields.email != undefined) {
      console.log(colors.bgMagenta(entry.fields.email["en-US"]));
      if (entry.fields.email["en-US"] === email) {
        console.log(colors.bgRed("Email already exists"));
        return true;
      }
    } else {
      return true
    }
  }
  return false;
}

// Función para crear un Asset
export async function createAsset({
  fileName,
  fileContentType,
  filePath,
}: {
  fileName: string;
  fileContentType: string;
  filePath: string;
}) {
  try {
    const space = await managementClient.getSpace("k9voop8uf94b");
    const environment = await space.getEnvironment("master");

    const fileContent = fs.readFileSync(filePath);

    console.log(fileName, "\n", fileContentType,"\n", filePath);




    const upload = await environment.createUpload({
      file: fileContent,
    });

    console.log("Archivo subido:", upload.sys.id);

    const asset = await environment.createAsset({
      fields: {
        title: {
          "en-US": fileName,
        },
        file: {
          "en-US": {
            contentType: fileContentType,
            fileName: fileName,
            uploadFrom: {
              sys: {
                type: "Link",
                linkType: "Upload",
                id: upload.sys.id,
              },
            },
          },
        },
        description: {},
      },
    });

    console.log("Asset creado:", asset.sys.id);

    const processedAsset = await asset.processForAllLocales();
    const publishedAsset = await processedAsset.publish();
    console.log("Asset publicado:", publishedAsset.sys.id);

    return publishedAsset.sys.id;
  } catch (error) {
    console.error("Error creando asset:", error);
    throw new Error("Error al crear el asset");
  }
}

export async function createPersonEntry({
  internalName,
  fullName,
  email,
  cvAssetId,
  jobEntryId,
  imageEntryId,
  reviewEntryId,
}: {
  internalName?: string;
  fullName?: string;
  email: string;
  cvAssetId?: string;
  jobEntryId?: string;
  imageEntryId?: string;
  reviewEntryId?: string;
}) {
  try {
    // console.log("managementClient", managementClient);
    const space = await managementClient.getSpace("k9voop8uf94b");
    const environment = await space.getEnvironment("master");

    // if (await existingEmail(email)) {
    //   throw new Error("Email already exists");
    // }
    console.log(email, cvAssetId)

    const entry = await environment.createEntry("person", {
      fields: {
        internalName: {
          "en-US": internalName || (await AvailableName()),
        },
        name: {
          "en-US": fullName || "PlaceHolderName",
        },
        email: {
          "en-US": email,
        },
        cv: cvAssetId
          ? {
              "en-US": {
                sys: {
                  type: "Link",
                  linkType: "Asset",
                  id: cvAssetId,
                },
              },
            }
          : undefined,
        job: jobEntryId
          ? {
              "en-US": {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: jobEntryId,
                },
              },
            }
          : undefined,
        image: imageEntryId
          ? {
              "en-US": {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: imageEntryId,
                },
              },
            }
          : undefined,
        review: reviewEntryId
          ? {
              "en-US": {
                sys: {
                  type: "Link",
                  linkType: "Entry",
                  id: reviewEntryId,
                },
              },
            }
          : undefined,
      },
    });

    console.log("Person entry created:", entry.sys.id);

    const publishedEntry = await entry.publish();
    console.log("Person entry published:", publishedEntry.sys.id);

    return publishedEntry.sys.id;
  } catch (error) {
    // console.error("Error creating person entry:", error);
    throw error;
  }
}

export async function retrieveAsset(asset_id: string) {
  deliveryClient
    .getAsset(asset_id)
    .then((asset) => console.log(asset.fields.file.url));
}
