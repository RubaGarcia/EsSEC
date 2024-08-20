import { useQuery } from "@tanstack/react-query";
import type { ApiRequest, FooterFields, HeaderFields, Entry } from "../types";
import { getElements } from "../api/LayoutAPI";

export default function catchElements(){

  
  let headerObject: Entry<HeaderFields> | null = null;
  let footerObject: Entry<FooterFields> | null = null;
  let loaded: boolean = false; 
  let scriptError: null | Error= null;
    
  let localHeader= sessionStorage.getItem('Header');
  let localFooter= sessionStorage.getItem('Footer');
  // console.log('Local header is ' + localHeader);
  // console.log('Local Footer is ' + localFooter);

  if( localHeader === null || localFooter === null){
    const { data, error, isLoading } : {data: undefined | ApiRequest, error: null | Error, isLoading: boolean} = useQuery({
      queryKey: ["elements"],
      queryFn: getElements,
    })
    // console.log(data, error, isLoading)
    if (isLoading) return {
      loaded: isLoading,
      scriptError: error,
      headerObject: headerObject,
      footerObject: footerObject
    }

    const response = data;
    // console.log('data recieved\n'+ response)
    
    headerObject= response!.fields.header;
    footerObject= response!.fields.footer;
    
    const headerString= sessionStorage.setItem('Header', JSON.stringify(headerObject));
    const footerString= sessionStorage.setItem('Footer', JSON.stringify(footerObject));

    // console.log(headerString)
    // console.log(footerString)
    // console.log('The data is the following:\n'+ JSON.stringify(data));
    

  } else{
    headerObject=JSON.parse(localHeader);
    footerObject=JSON.parse(localFooter);
    loaded=true;
    //console.log('Datos de footer y header recogidos de la sesion')
  }
  return {
    loaded: loaded,
    error: scriptError,
    headerObject: headerObject,
    footerObject: footerObject
  }
}