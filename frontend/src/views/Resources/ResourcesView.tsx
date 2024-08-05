import ResourceElement from "../../components/Resources/ResourceElement";

export default function ResourcesView() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          From the blog
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {/* TODO:tomar los elementos en forma de lista para que se enseñen con un map */}
          <ResourceElement
            title="asdkjhkjdhkj"
            date="2021-10-10"
            img="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            link_to="#"
          />

          <ResourceElement
            title="How to use sticky note for problem solving"
            date="20 October 2019"
            img="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            link_to="#"
          />

          <ResourceElement
            title="Morning routine to boost your mood"
            date="25 November 2020"
            img="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            link_to="#"
          />

          <ResourceElement
            title="All the features you want to know"
            date="30 September 2020"
            img="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80"
            link_to="#"
          />

          <ResourceElement
            title="Minimal workspace for your inspirations"
            date="13 October 2019"
            img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80"
            link_to="#"
          />

          <ResourceElement
            title="What do you want to know about Blockchane"
            date="20 October 2019"
            img="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            link_to="#"
          />
        </div>
      </div>
    </section>
  );
}
