import { Blurb,Entry } from "../../../types";
import { renderRichText } from "../../../helpers/RichTextProcessor";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { postEmailDigitalKit } from "../../../api/ServicesAPI";

type HeroProps = {
  blurb: Entry<Blurb>;
};

export default function Hero({ blurb }: HeroProps) {
  const [email, setEmail] = useState<string>("");

  const { mutate } = useMutation({
    mutationFn: postEmailDigitalKit,
    onError: (error) => {
      console.error("Error al enviar los datos:", error);
      alert("Ocurrió un error al enviar los datos. Por favor, inténtalo de nuevo más tarde.");
    },
    onSuccess: () => {
      alert("Email enviado con éxito. Gracias por unirte a nosotros.");
    },
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email) {
      alert("Por favor ingresa tu email.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Por favor ingresa un email válido.");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);

    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
  }


    mutate(formData);
  }

  function validateEmail(email: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          {blurb.fields?.title && (
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              {blurb.fields?.title}
            </h1>
          )}

          <p className="mt-6 text-gray-500 dark:text-gray-300">
            {blurb.fields?.textBlurb && (
              <div
                dangerouslySetInnerHTML={{ __html: renderRichText(blurb.fields?.textBlurb) }}
              />
            )}
          </p>

          <div className="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-300 focus-within:ring-opacity-40">
            <form className="flex flex-col md:flex-row" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />

              <button
                type="submit"
                className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
              >
                Join Us
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto mt-20"></div>
      </div>
    </section>
  );
}
