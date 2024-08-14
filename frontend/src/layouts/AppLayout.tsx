import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { getElements } from "../api/LayoutAPI";
import { useMutation, useQuery } from "@tanstack/react-query";

export default function AppLayout() {



//   const { data, error, isLoading } = useQuery({
//     queryKey: ["elements"],
//     queryFn: getElements,
//   })

// console.log(data);
// if (isLoading) return <p>Loading...</p>


  return (
    <>
      <Header />
      <section className="dark:bg-gray-900 max-h-fit  my-auto mx-auto m-10 p-5">
        
        <Outlet />
      </section>
      <Footer />
    </>
  );
}
