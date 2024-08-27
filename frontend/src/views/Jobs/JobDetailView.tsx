import React, { useState } from "react";
import FileDrop from "../../components/Jobs/FileDrop";
import { useMutation, useQuery } from "@tanstack/react-query";
import { applyJob, getJobById } from "../../api/JobsAPI";
import { useParams } from "react-router-dom";
import { renderRichText } from "../../helpers/RichTextProcessor";

export default function JobDetailView() {
  const [email, setEmail] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);

  const params = useParams();
  const jobId = params.jobId!;
  console.log(jobId);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["JobDetailPage", jobId],
    queryFn: () => getJobById({ JobId: jobId }),
    retry: 10,
  });

  console.log(data);

  function handleFileSelection(selectedFiles: File[]) {
    setFiles(selectedFiles);
  }

  const { mutate } = useMutation({
    mutationFn: applyJob,
    onError: (error) => {
      console.error("Error al enviar los datos:", error);
      alert("Ocurrió un error al enviar los datos");
    },
    onSuccess: () => {
      alert("Email y archivos subidos con éxito");
    },
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email || files.length === 0) {
      alert("Por favor ingresa tu email y selecciona un archivo.");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    files.forEach((file) => formData.append("files", file));

    mutate({ formData, jobId: "job" });

   
  }

  // const paragraphs = text.split("\n").filter((p) => p.trim() !== "");

  return (
    <>
      <header className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                  Trabaja con <span className="text-blue-500">Nosotros</span>
                </h1>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Oferta de{" "}
                  <span className="font-medium text-blue-500">trabajo</span>
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full max-w-md"
                src="https://merakiui.com/images/components/Email-campaign-bro.svg"
                alt="email illustration vector art"
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-white text-4xl font-bold">
              {data?.name || "Cargando..."}
              <span className="flex text-blue-600 text-2xl font-bold space-y-10">
                {data?.salary || "Cargando..."}$
              </span>
            </h1>
          </div>

          <div className="text-white">
            {data?.description ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: renderRichText(data.description),
                }}
              />
            ) : (
              <p>Cargando descripción...</p>
            )}
          </div>

          <section className="flex flex-col max-w-4xl mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-80">
            <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800 rounded-lg">
              <div className="px-10 py-6 md:px-8 md:py-0">
                <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">
                  Sign Up For{" "}
                  <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">
                    Project
                  </span>{" "}
                  Updates
                </h2>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 ">
              <form
                className="w-full px-6"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-500 dark:text-gray-300"
                >
                  E-Mail
                </label>
                <div className="flex flex-col overflow-hidden border rounded-lg dark:border-gray-600 focus-within:ring-blue-300">
                  <input
                    className="px-6 py-2 text-gray-100 placeholder-gray-50 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mt-4">
                  <h1 className="text-xl font-bold mb-4 text-gray-100">
                    Subir archivos
                  </h1>
                  <FileDrop onFilesSelected={handleFileSelection} />
                </div>

                <div className="w-full mt-4">
                  <button
                    type="submit"
                    className="w-full text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-600"
                  >
                    subscribe
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </header>
    </>
  );
}
