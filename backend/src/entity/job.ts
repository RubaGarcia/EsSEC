import {
  createAsset,
  createPersonEntry,
  linkPersonJob,
} from "../config/contentfulClient";
import colors from "colors"; // Import the 'colors' module
import { getEntries } from "../contentful/contentfulAPI";

export async function getJobs(jobId: string, locale?: string) {
  if (locale === undefined){
    console.log ("No hay local")
  }
  console.log(locale)
  const entries = await getEntries("job", locale);
  // console.log(entries);
  // Verifica si 'entries' es un array
  
  if (Array.isArray(entries)) {
    if (!jobId) {
      throw new Error("JobId is required");
    }

    const job = entries.find((entry) => entry.sys.id === jobId);

    if (!job) {
      throw new Error("Job not found");
    }

    return job.fields;
  } else {
    throw new Error("Unexpected response format");
  }
}

export async function auxiliarAsset(
  email,
  firstName,
  lastName,
  applicantsList,
  file,
) {
  const start = Date.now();
  const cvAssetId = await createAsset({
    fileName: file.originalname,
    fileContentType: file.mimetype,
    filePath: file.path,
  });
  const asset = Date.now();

  console.log("CV Asset created with ID:", cvAssetId);

  const personEntryId = await createPersonEntry({
    fullName: `${firstName} ${lastName}`,
    email: email,
    cvAssetId: cvAssetId,
  });

  const person = Date.now();

  console.log(
    colors.bgWhite.black("Person entry created with ID:"),
    personEntryId,
  );
  linkPersonJob(applicantsList, personEntryId);

  const end = Date.now();

  console.log(asset - start, person - asset, end - person, end - start);
}
