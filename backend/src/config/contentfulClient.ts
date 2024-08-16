import { createClient as createDeliveryClient } from "contentful";
import contentfulManagement, { ClientAPI } from "contentful-management";
import { createClient } from "contentful-management";

// Cliente para leer contenido (Content Delivery API)
export const deliveryClient = createDeliveryClient({
  space: "k9voop8uf94b",
  accessToken: "dVkwzvA0LUKDn83NgGkvwo_HMf9rV8TzfWjpd6nJizI",
});

// Cliente para gestionar contenido (Content Management API)
// export const managementClient: ClientAPI = contentfulManagement.createClient({
//   accessToken: "CFPAT-fQQuxSBYTtwet9NZdCnEKh57X-IaxPnLomAeR-Fx2H4", // Cambia esto por tu API key de Content Management
// });

// Cliente para gestionar contenido (Content Management API)
export const managementClient: ClientAPI = createClient({
  accessToken: "CFPAT-fQQuxSBYTtwet9NZdCnEKh57X-IaxPnLomAeR-Fx2H4",
});

function generateID(): string {
  return 'xxxxyxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}


async function AvailableEntryId() {
  const space = await managementClient.getSpace("k9voop8uf94b");
  const environment = await space.getEnvironment("master");
  const entries = await environment.getEntries();

  let idFound = false;
  let id = '';

  // Seguimos generando un ID hasta que encontremos uno no usado
  while (!idFound) {
    id = generateID();
    idFound = true; // Suponemos que el ID es válido hasta demostrar lo contrario

    // Usamos un bucle for...of para verificar si el ID ya existe
    for (const entry of entries.items) {
      if (entry.sys.id === id) {
        idFound = false; // Si el ID existe, marcamos que no lo hemos encontrado aún
        break;
      }
    }
  }

  return id; // Retornamos un ID que no esté en uso
}



// Función para crear una nueva entrada en Contentful
export async function createEntry() {
  try {

    const id = await AvailableEntryId();
    console.log("ID generado:", id);
    // AvailableEntryId();

    

    // Obtener el espacio (aquí debes usar el cliente de Content Management API)
    const space = await managementClient.getSpace("k9voop8uf94b");

    // Obtener el entorno (por defecto, "master")
    const environment = await space.getEnvironment("master");

    // Crear una nueva entrada de tipo 'footer'
    const entry = await environment.createEntry("footer", {
      fields: {
        internalTitle: {
          "en-US": "My Footer", // Título interno del footer
        },
        copyright: {
          "en-US": "Copyright 2024 © All rights reserved", // Mensaje de copyright
        },
        newlesterCartridge: {
          "en-US": {
            sys: {
              type: "Link",
              linkType: "Entry",
              id: "2gsunsNsDDTpdGMkvv7EFD", // ID de la entrada vinculada
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




export async function createPersonEntry({
  internalName,
  fullName,
  email,
  cvAssetId,
  jobEntryId,
  imageEntryId,
  reviewEntryId,
}: {
  internalName: string;
  fullName: string;
  email: string;
  cvAssetId?: string;
  jobEntryId?: string;
  imageEntryId?: string;
  reviewEntryId?: string;
}) {
  try {
    // Obtener el espacio y entorno
    console.log("managementClient", managementClient);
    const space = await managementClient.getSpace("k9voop8uf94b");
    const environment = await space.getEnvironment("master");

    // Crear una nueva entrada de tipo 'person'
    const entry = await environment.createEntry('person', {
      fields: {
        internalName: {
          "en-US": internalName, // Nombre interno obligatorio
        },
        name: {
          "en-US": fullName || "PlaceHolderName", // Nombre completo (opcional)
        },
        email: {
          "en-US": email || "", // Email (opcional)
        },
        cv: cvAssetId
          ? {
              "en-US": {
                sys: {
                  type: "Link",
                  linkType: "Asset",
                  id: cvAssetId, // ID del asset del CV si se proporciona
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
                  id: jobEntryId, // ID de la entrada del trabajo
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
                  id: imageEntryId, // ID de la entrada de la imagen
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
                  id: reviewEntryId, // ID de la entrada de la review
                },
              },
            }
          : undefined,
      },
    });

    console.log("Person entry created:", entry.sys.id);

    // Publicar la entrada después de crearla
    const publishedEntry = await entry.publish();
    console.log("Person entry published:", publishedEntry.sys.id);
    
    // return publishedEntry.sys.id; // Retorna el ID de la entrada creada y publicada
  } catch (error) {
    console.error("Error creating person entry:", error);
  }
}

// Ejemplo de uso de la función para crear una persona
// createPersonEntry({
//   internalName: "John Doe Internal",
//   fullName: "John Doe",
//   email: "johndoe@example.com",
//   cvAssetId: "cvAssetId123", // Opcional
//   jobEntryId: "jobEntryId123", // Opcional
//   imageEntryId: "imageEntryId123", // Opcional
//   reviewEntryId: "reviewEntryId123", // Opcional
// });










