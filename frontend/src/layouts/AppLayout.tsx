import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { getElements } from "../api/LayoutAPI";
import { useMutation, useQuery } from "@tanstack/react-query";

type ApiResponse = {
  metadata: object;
  sys: {
    space: object;
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: object;
    revision: number;
    contentType: object;
    locale: string;
  };
  fields: {
    pageTitle: string;
    internalTitle: string;
    slug: string;
    seoMetadata: object;
    header: object;
    sections: object[];
    footer: object;
  };
}




export default function AppLayout() {


  // let localHeader= sessionStorage.getItem('Header');
  // let localFooter= sessionStorage.getItem('Footer');
  // console.log(localHeader)
  // console.log(localFooter)

  // if( localHeader === null || localFooter === null){
  //   const { data, error, isLoading } = useQuery({
  //     queryKey: ["elements"],
  //     queryFn: getElements,
  //   })
  //   const response: ApiResponse = data;
    
  
  //   const header= response.fields.header;
  //   const footer= response.fields.footer;

  //   sessionStorage.setItem('Header', JSON.stringify(header));
  //   sessionStorage.setItem('Footer', JSON.stringify(footer));
  //   console.log(data);
  //   if (isLoading) return <p>Loading...</p>
  // } else{
  //   const header=JSON.parse(localHeader);
  //   const footer=JSON.parse(localFooter);
  // }


  
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
