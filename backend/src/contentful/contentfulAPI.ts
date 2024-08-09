import { client } from "../config/contentfulClient";

// Obtener un espacio
export async function getSpace() {
  const space = await client.getSpace();
  console.log(space);
}

// Obtener entradas de una vista (content type)
export async function getEntries(contentType: string) {
  try {
    const entries = await client.getEntries({
      content_type: contentType,
    });
    return entries.items;
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
