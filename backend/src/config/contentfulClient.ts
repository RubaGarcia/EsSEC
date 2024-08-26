import { createClient as createDeliveryClient } from "contentful";
import { ClientAPI, createClient  } from "contentful-management";
import colors from "colors";
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
  return "xxxxyxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

//TODO: función para configurar los nombres internos, se la puede cambiar(estaba pensada para ids)
export async function AvailableName() {
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

  for (const entry of entries.items) {
    if (entry.fields.email !== undefined) {
      console.log("entry.fields.email", entry.fields.email[1]);
      if (entry.fields.email["en-US"] === email) {
        console.log(colors.bgRed("Email already exists"));
        return true;
      }
    }
  }
  return false;
}

//FIXME: función de pruebas
export async function createEntry() {
  try {
    // const id = await AvailableEntryId();
    // console.log("ID generado:", id);
    // AvailableEntryId();

    // Obtener el espacio (aquí debes usar el cliente de Content Management API)
    const space = await managementClient.getSpace("k9voop8uf94b");

    // Obtener el entorno (por defecto, "master")
    const environment = await space.getEnvironment("master");

    // Crear una nueva entrada de tipo 'footer'
    const entry = await environment.createEntry("footer", {
      fields: {
        internalTitle: {
          "en-US": "My Footer",
        },
        copyright: {
          "en-US": "Copyright 2024 © All rights reserved",
        },
        newlesterCartridge: {
          "en-US": {
            sys: {
              type: "Link",
              linkType: "Entry",
              id: "2gsunsNsDDTpdGMkvv7EFD", // ID de la entrada de tipo 'newlesterCartridge'
            },
          },
        },
      },
    });

    console.log("Entry created:", entry.sys.id);

    // Publicar la entrada después de crearla
    const publishedEntry = await entry.publish();

    console.log("Entry published:", publishedEntry.sys.id);
  } catch (error) {
    console.error(error);
  }
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
    console.log("managementClient", managementClient);
    const space = await managementClient.getSpace("k9voop8uf94b");
    const environment = await space.getEnvironment("master");

    if (await existingEmail(email)) {
      throw new Error("Email already exists");
    }

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
    console.error("Error creating person entry:", error);
    throw error;
  }
}

export async function retrieveAsset(asset_id:string){
  const asset = deliveryClient.getAsset(asset_id)
  .then((asset) => console.log(asset.fields.file.url))
}
