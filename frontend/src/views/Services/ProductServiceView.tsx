
import ProductDisplay from "../../components/Products/ProductDisplay";

export default function ProductServiceView() {
  return (
    <>
      <header className="bg-white dark:bg-gray-900">
        <nav
          x-data="{ isOpen: false }"
          className="relative bg-white dark:bg-gray-900"
        >
          <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
              <a href="#">
                <img
                  className="w-auto h-6 sm:h-7"
                  src="https://merakiui.com/images/full-logo.svg"
                  alt=""
                />
              </a>

              <div className="flex md:hidden">
                <button
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg
                    x-show="!isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>

                  <svg
                    x-show="isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              x-cloak
              className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center"
            >
              <div className="flex flex-col md:flex-row md:mx-6">
                <a
                  className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                  href="#"
                >
                  Home
                </a>
                <a
                  className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                  href="#"
                >
                  Shop
                </a>
                <a
                  className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                  href="#"
                >
                  Contact
                </a>
                <a
                  className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                  href="#"
                >
                  About
                </a>
              </div>

              <div className="flex justify-center md:block">
                <a
                  className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                  href="#"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                  Best place to choose <br /> your{" "}
                  <span className="text-blue-500 ">clothes</span>
                </h1>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro beatae error laborum ab amet sunt recusandae? Reiciendis
                  natus perspiciatis optio.
                </p>

                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-3xl"
                src="https://merakiui.com/images/components/Catalogue-pana.svg"
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              Que productos ofrecemos
            </h1>

            <p className="max-w-lg mx-auto mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              veritatis sint autem nesciunt, laudantium quia tempore delect
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            <ProductDisplay
              imageSrc={
                "https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              }
              title={"All the features you want to know"}
              abstract={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,laudantium quia tempore delect"
              }
            />

            <ProductDisplay
              imageSrc={
                "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              }
              title={"How to use sticky note for problem solving"}
              abstract={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium quia tempore delect"
              }
            />
          </div>

          <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
              <div className="mt-6 md:flex md:items-center md:justify-between">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                    What our clients are saying
                  </h1>

                  <div className="flex mx-auto mt-6">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                  </div>
                </div>

                <div className="flex justify-between mt-8 md:mt-0">
                  <button
                    title="left arrow"
                    className="p-2 mx-3 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    title="right arrow"
                    className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
                <div className="p-8 border rounded-lg dark:border-gray-700">
                  <p className="leading-loose text-gray-500 dark:text-gray-400">
                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tempore quibusdam ducimus libero ad tempora doloribus
                    expedita laborum saepe voluptas perferendis delectus
                    assumenda rerum, culpa aperiam dolorum, obcaecati corrupti
                    aspernatur a.”.
                  </p>

                  <div className="flex items-center mt-8 -mx-2">
                    <img
                      className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                      src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                      alt=""
                    />

                    <div className="mx-2">
                      <h1 className="font-semibold text-gray-800 dark:text-white">
                        Robert
                      </h1>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        CTO, Robert Consultency
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-blue-500 border border-transparent rounded-lg dark:bg-blue-600">
                  <p className="leading-loose text-white">
                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tempore quibusdam ducimus libero ad tempora doloribus
                    expedita laborum saepe voluptas perferendis delectus
                    assumenda rerum, culpa aperiam dolorum, obcaecati corrupti
                    aspernatur a.”.
                  </p>

                  <div className="flex items-center mt-8 -mx-2">
                    <img
                      className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-blue-200"
                      src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                      alt=""
                    />

                    <div className="mx-2">
                      <h1 className="font-semibold text-white">Jeny Doe</h1>
                      <span className="text-sm text-blue-200">
                        CEO, Jeny Consultency
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8 border rounded-lg dark:border-gray-700">
                  <p className="leading-loose text-gray-500 dark:text-gray-400">
                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tempore quibusdam ducimus libero ad tempora doloribus
                    expedita laborum saepe voluptas perferendis delectus
                    assumenda rerum, culpa aperiam dolorum, obcaecati corrupti
                    aspernatur a.”.
                  </p>

                  <div className="flex items-center mt-8 -mx-2">
                    <img
                      className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                      src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt=""
                    />

                    <div className="mx-2">
                      <h1 className="font-semibold text-gray-800 dark:text-white">
                        Ema Watson{" "}
                      </h1>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Marketing Manager at Stech
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
