import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { applyJob, getJobById } from "../../api/JobsAPI";
import { useParams } from "react-router-dom";
import { renderRichText } from "../../helpers/RichTextProcessor";
import type { JobFields } from "../../types";
import ModalForm from "../../components/Jobs/Modal"; // Asegúrate de que la ruta sea correcta
import { toast } from "react-toastify";

export default function JobDetailView() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleModalOpen() {
    setIsModalOpen(true);
  }

  function handleModalClose() {
    setIsModalOpen(false);
  }

  function handleFormSubmit(Userdata: {
    firstName: string;
    lastName: string;
    email: string;
    files: File[];
  }) {
    //console.log("Datos enviados:", Userdata);

    const formData = new FormData();
    formData.append("email", Userdata.email);
    formData.append("firstName", Userdata.firstName);
    formData.append("lastName", Userdata.lastName);

    Userdata.files.forEach((file) => formData.append("files", file));

    if (!data?.applicants) {
      alert("No se puede aplicar a esta oferta de trabajo");
      return;
    }

    formData.append("applicantsList", data.applicants.sys?.id ?? "");

    localStorage.setItem("formData", JSON.stringify(Userdata));

    toast("Datos enviados con éxito", { type: "success" });
    applyJob({ formData, jobId: "job" })
      .then(() => {
        console.log("Datos enviados con éxito");
        handleModalClose();
      })
      .catch((error) => {
        console.error("Error al enviar los datos:", error);
        alert("Ocurrió un error al enviar los datos");
      });
  }

  const params = useParams();
  const jobId = params.jobId!;

  const {
    data,
    isError,
    isLoading,
  }: {
    data: undefined | JobFields;
    isError: null | boolean;
    isLoading: boolean;
  } = useQuery({
    queryKey: ["JobDetailPage", jobId],
    queryFn: () => getJobById({ JobId: jobId }),
    retry: 10,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Ha ocurrido un error al cargar los datos.</div>;
  }
  //console.log();
  //console.log("applicants", data?.applicants);
  //console.log("employeeList", data?.employees);
  //console.log(JSON.stringify(data))

  return (
    <>
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
              src={
                data?.icon?.fields?.asset?.fields?.file?.url ??
                "https://merakiui.com/images/components/Email-campaign-bro.svg"
              }
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

        <div className="text-black dark:text-white">
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

        <div>
          {data?.applicants ? (
            <button
              onClick={handleModalOpen}
              className="w-full text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-600 py-4"
            >
              Aplicar ahora
            </button>
          ) : (
            <button
              // onClick={handleModalOpen}
              className="w-full text-sm font-medium tracking-wider text-gray-100 uppercase opacity-60 transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-600 py-4"
            >
              Aplicar ahora
            </button>
          )}

          <ModalForm
            isOpen={isModalOpen}
            onClose={handleModalClose}
            onSubmit={handleFormSubmit}
          />
        </div>
      </div>
    </>
  );
}