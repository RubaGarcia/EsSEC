import React from "react";

export default function JobsView() {
  return (
    <>
      <header className="bg-white dark:bg-gray-900">
        <div className="lg:flex">
          <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                Trabaja con{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  nosotros
                </span>
              </h2>

              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis commodi cum cupiditate ducimus, fugit harum id
                necessitatibus odio quam quasi, quibusdam rem tempora
                voluptates.
              </p>

              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <a
                  href="#"
                  className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <div
              className="w-full h-full bg-cover"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80)",
              }}
            >
              <div className="w-full h-full bg-black opacity-25"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="space-y-3 mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-10">
          <div className="bg-white dark:bg-gray-900 p-4 rounded-md shadow-md flex flex-row justify-between">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              AI Specialist
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 font-bold">
              300.000$
            </p>
          </div>
          <p className=" text-sm text-gray-500 dark:text-gray-400 ">
            J finibus. Praesent porttitor vitae augue a porta. Praesent finibus
            velit nec dapibus interdum. In hac habitasse platea dictumst.
            Suspendisse non hendrerit nunc, at accumsan eros. Praesent mollis
            pellentesque lacus nec faucibus. Curabitur facilisis, lacus quis
            viverra aliquam, lectus lorem luctus lacus, convallis sagittis nisl
            turpis vitae mauris. Vivamus te
          </p>
          
          <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Apply
            </button>
          <div className="bg-white dark:bg-gray-900 p-4 rounded-md shadow-md flex flex-row justify-between">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              AI Specialist
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 font-bold">
              300.000$
            </p>
            
          </div>
          <p className=" text-sm text-gray-500 dark:text-gray-400 ">
            J finibus. Praesent porttitor vitae augue a porta. Praesent finibus
            velit nec dapibus interdum. In hac habitasse platea dictumst.
            Suspendisse non hendrerit nunc, at accumsan eros. Praesent mollis
            pellentesque lacus nec faucibus. Curabitur facilisis, lacus quis
            viverra aliquam, lectus lorem luctus lacus, convallis sagittis nisl
            turpis vitae mauris. Vivamus te
          </p>
          <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Apply
            </button>
          <div className="bg-white dark:bg-gray-900 p-4 rounded-md shadow-md flex flex-row justify-between">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              AI Specialist
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 font-bold">
              300.000$
            </p>
          </div>
          <p className=" text-sm text-gray-500 dark:text-gray-400 ">
            J finibus. Praesent porttitor vitae augue a porta. Praesent finibus
            velit nec dapibus interdum. In hac habitasse platea dictumst.
            Suspendisse non hendrerit nunc, at accumsan eros. Praesent mollis
            pellentesque lacus nec faucibus. Curabitur facilisis, lacus quis
            viverra aliquam, lectus lorem luctus lacus, convallis sagittis nisl
            turpis vitae mauris. Vivamus te
          </p>
          
          <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Apply
            </button>
        </div>
      </div>
    </>
  );
}
