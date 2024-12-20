import { deliveryClient as client } from "../config/contentfulClient";
import colors from "colors" 
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
 * valores permitidos: los retornados por getContentTypes, internalTitle es opcional
 * @returns la entry de contentful
 */
export async function getEntries(contentType: string, internalTitle?: string, locale: string = "es" )  {

  console.log(colors.bgRed(locale))

  if (locale !== "en-US" && locale !== "es") {
    locale = "en-US";
  }
  console.log("El local en la api es: " + locale)
  try {
    
    
      const entries = await client.getEntries({
        content_type: contentType,
        include: 10,
        locale: locale
      });
    
      if (entries.items.length === 0 && locale ==="es") {
        console.log("NO HAY COSAS EN ESPAÑOL")
      }

    
    // console.log(entries.items);
    return internalTitle
      ? entries.items.find(
          (entry) => entry.fields.internalTitle === internalTitle,
        )
      : entries.items;
  } catch (error) {
    console.error("Error fetching entries:", error);
    throw error;
  }
  
}
/* 
async function getContentTypes() {
  const contentTypes = await client.getContentTypes();
  return contentTypes.items.map((type) => type.sys.id);
}

async function getLocales(){
  const locales = client.getLocales()
  .then((response) => console.log(response))
  .catch(console.error)
  return locales
}
 */