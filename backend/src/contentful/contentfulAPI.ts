import { deliveryClient as client } from "../config/contentfulClient";

// Obtener un espacio
export async function getSpace() {
  const space = await client.getSpace();
  console.log(space);
}

/**
 * Obtener las entradas de una vista, puede tomar como parametro opcional el internalTitle
 * de la misma para devolver directamente la vista adecuada
 * @param contentType El content-type 
 * @param internalTitle El internalTitle de la vista
 * @returns 
 */
export async function getEntries(contentType: string, internalTitle?: string) {
  try {
    const entries = await client.getEntries({
      content_type: contentType,
      include:10
    });
    let aux;
    internalTitle ? aux=entries.items.find((entry) => entry.fields.internalTitle === internalTitle): aux=entries.items;
    return aux;
  } catch (error) {
    console.error("Error fetching entries:", error);
    throw error
  }
}

async function getContentTypes() {
  const contentTypes = await client.getContentTypes();
  return contentTypes.items.map((type) => type.sys.id);
}

getContentTypes().then((types) =>
  console.log("Available Content Types:", types),
);
