import React from "react";
import PersonalDisplay from "../components/Personal/PersonalDisplay";

export default function ContactView() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          our team
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>

        <div className="flex items-center justify-center">
          <div className="flex items-center p-1 border border-blue-600 dark:border-blue-400 rounded-xl">
            <button className="px-4 py-2 text-sm font-medium text-white capitalize bg-blue-600 md:py-3 rounded-xl md:px-12">
              design
            </button>
            <button className="px-4 py-2 mx-4 text-sm font-medium text-blue-600 capitalize transition-colors duration-300 md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:mx-8 md:px-12">
              development
            </button>
            <button className="px-4 py-2 text-sm font-medium text-blue-600 capitalize transition-colors duration-300 md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:px-12">
              marketing
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
          <PersonalDisplay
            img="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            name="Pamela Anderson"
            job="Lead Developer"
            reddit={"#"}
            facebook={"#"}
            github={"#"}
          />

          <PersonalDisplay
            img="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            name="John Doe"
            job="Full stack developer"
            reddit={"#"}
            facebook={"#"}
            github={"#"}
          />

          <PersonalDisplay
            img="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            name="John Doe"
            job="Full stack developer"
            reddit={"#"}
            facebook={"#"}
            github={"#"}
          />
          
        </div>
      </div>
    </section>
  );
}
