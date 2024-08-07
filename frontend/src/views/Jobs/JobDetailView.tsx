import React from "react";

export default function JobDetailView() {
  function splitTextIntoParagraphs(text: string): string[] {
    return text.split("\n").filter((paragraph) => paragraph.trim() !== "");
  }

  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac sapien vitae erat ornare viverra sit amet vestibulum ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In vel ante erat. Vestibulum vel risus ac purus euismod lobortis ac sit amet sem. Nullam tortor urna, posuere non leo et, commodo malesuada elit. Mauris eget euismod dolor. Integer finibus turpis lacus, a euismod ipsum vehicula sit amet. Maecenas quis mollis felis, et vulputate lorem. Maecenas at odio scelerisque, dapibus ex at, egestas risus. Pellentesque vestibulum scelerisque mauris, sit amet iaculis odio tempus et.\n In eu enim tortor. Mauris mi ex, aliquam efficitur tortor in, ullamcorper gravida sapien. In non ante vitae ante auctor iaculis. Proin a scelerisque risus. Donec libero magna, consectetur nec arcu quis, mollis semper enim. Cras a viverra ante, vitae posuere nunc. Vestibulum nunc arcu, dapibus ut porttitor eget, rhoncus non magna. Cras a condimentum lorem. Phasellus vitae justo fringilla, ultricies elit et, egestas massa. Proin vehicula, ipsum et iaculis tempus, sapien turpis efficitur leo, ut lobortis orci tortor ut ipsum. Praesent ullamcorper quam sed est lobortis facilisis. Praesent ut ipsum pellentesque nulla ullamcorper cursus. Ut sed dolor mollis, rhoncus erat eget, mattis nisl.\n Nulla porta, turpis pulvinar lacinia lacinia, tellus ipsum dignissim dui, ut sollicitudin quam lacus a ante. Sed sed libero laoreet, ultrices nulla sit amet, vulputate sapien. Duis maximus, augue quis lacinia efficitur, odio odio condimentum nulla, non dictum nisl lorem sit amet lacus. Proin vitae dui aliquam, pellentesque turpis sed, commodo nunc. Curabitur gravida ligula et dui maximus porta. Ut dui purus, blandit eget scelerisque ac, fringilla ut neque. Quisque eu libero sagittis lectus mattis finibus. Ut luctus interdum ornare. Duis interdum ex id tellus sollicitudin laoreet. Sed ultrices varius libero a consectetur. Phasellus neque lacus, volutpat ac lobortis mattis, vehicula nec tellus. Phasellus in quam nisi.\n Nulla scelerisque euismod consequat. Sed congue ultrices erat, id aliquet nulla consequat rutrum. Etiam tincidunt eros nunc, a eleifend libero tincidunt at. Mauris laoreet odio ornare, egestas magna at, interdum lacus. Etiam tempor nisl id imperdiet rutrum. Etiam risus neque, pulvinar at nisi vitae, egestas mollis nisi. Aenean consectetur tortor sed elit posuere dapibus. Aliquam erat volutpat. Sed sit amet odio sagittis metus posuere semper nec sit amet eros. Curabitur at fringilla ipsum. Cras vel urna vitae justo ultrices elementum et at nisi. Proin augue quam, lacinia at nulla quis, finibus interdum nulla. Pellentesque ultrices augue lobortis lorem mattis pulvinar.\n Suspendisse efficitur pretium lacus quis convallis. Nulla elementum, sapien in malesuada fringilla, nisi leo finibus ante, condimentum ultricies diam augue vel ante. Mauris maximus enim lacinia nisi pellentesque bibendum. Maecenas ut est quis erat sagittis ultricies vitae non tortor. Donec ut orci varius, condimentum massa molestie, venenatis massa. Donec sollicitudin purus a nunc consectetur varius. Fusce in mauris at sapien maximus molestie.";

  
    function handleInput(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const email = formData.get("email");
      const file = formData.get("dropzone-file");
      console.log("Email:", email);
      console.log("File:", file);
    }

  const paragraphs = splitTextIntoParagraphs(text);
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
          Senior Security Analyst
          <span className="flex text-blue-600 text-2xl font-bold space-y-10">
          321.654$
          </span>
        </h1>
        </div>
        <div className="text-white">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        </div>

        <section className="flex flex-col max-w-4xl mx-auto  bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row  md:h-64">
        <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800 rounded-lg">
          <div className="px-6 py-6 md:px-8 md:py-0">
          <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">
            Sign Up For{" "}
            <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">
            Project
            </span>{" "}
            Updates
          </h2>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur obcaecati odio
          </p>
          </div>
        </div>

        <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 ">
          <form className="w-full px-6" onSubmit={handleInput}>
          <label
              htmlFor="text"
              className="block text-sm text-gray-500 dark:text-gray-300"
            >
              E-Mail
            </label>
          <div className="flex flex-col overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
            type="text"
            name="email"
            placeholder="Enter your email"
            aria-label="Enter your email"
            />

            
          </div>
          <div className="mt-4">
            <div>
            <label
              htmlFor="file"
              className="block text-sm text-gray-500 dark:text-gray-300"
            >
              File
            </label>

            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
            >
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-gray-500 dark:text-gray-400"
              >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
              </svg>

              <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
              Curriculum Vitae
              </h2>

              <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
              Upload or darg & drop your file SVG, PNG, JPG or GIF.{" "}
              </p>

              <input
              id="dropzone-file"
              type="file"
              className="hidden"
              />
            </label>
            </div>
            <div className="w-full">

            <button
            type="submit"
            className="w-full text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
            >
            subscribe
            </button>
            </div>
            </div>
          </form>
        </div>
        </section>
      </div>
      </header>
    </>
    );
}
