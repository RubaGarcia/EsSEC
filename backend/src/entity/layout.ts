import { createPersonEntry } from "../config/contentfulClient";

export async function postLayout(email:string){
    await createPersonEntry({
        //   internalName: "John Doe 5",,
        email,
        // cvAssetId: "cvAssetId123", // Opcional
        // jobEntryId: "jobEntryId123", // Opcional
        // imageEntryId: "imageEntryId123", // Opcional
        // reviewEntryId: "reviewEntryId123", // Opcional
      });
    
}