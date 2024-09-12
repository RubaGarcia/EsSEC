import { createPersonEntry } from "../config/contentfulClient";
import { getEntries } from "../contentful/contentfulAPI";

export async function getView(page, locale) {
  try {
    return await getEntries("landingPage", page, locale);
  } catch (error) {
    throw Error(error.message);
  }
}

export async function addPerson(email: string) {
  await createPersonEntry({
    email,
  });
}
