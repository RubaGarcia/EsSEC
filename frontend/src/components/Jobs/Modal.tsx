// ModalForm.tsx
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import FileDrop from "../../components/Jobs/FileDrop";

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { firstName: string; lastName: string; email: string; files: File[] }) => void;
}

export default function ModalForm({ isOpen, onClose, onSubmit }: ModalFormProps) {
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);

  function handleFileSelection(selectedFiles: File[]) {
    setFiles(selectedFiles);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!firstName || !lastName || !email || files.length === 0) {
      alert("Por favor, completa todos los campos y selecciona un archivo.");
      return;
    }

    onSubmit({ firstName, lastName, email, files });
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl dark:bg-gray-800">
                <div className="flex justify-between items-center">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    Completa tu Aplicación
                  </Dialog.Title>
                  <button onClick={onClose} className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>

                <div className="mt-2">
                  <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="mb-4">
                      <label
                        htmlFor="firstName"
                        className="block text-sm text-gray-700 dark:text-gray-300"
                      >
                        Nombre
                      </label>
                      <input
                        className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Ingresa tu nombre"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="lastName"
                        className="block text-sm text-gray-700 dark:text-gray-300"
                      >
                        Apellidos
                      </label>
                      <input
                        className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Ingresa tus apellidos"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm text-gray-700 dark:text-gray-300"
                      >
                        E-Mail
                      </label>
                      <input
                        className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ingresa tu correo electrónico"
                      />
                    </div>

                    <div className="mb-4">
                      <h1 className="text-lg font-bold text-gray-700 dark:text-white">
                        Subir archivos
                      </h1>
                      <FileDrop onFilesSelected={handleFileSelection} />
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
