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


  if( localHeader === null || localFooter === null){
    const { data, error, isLoading } : {data: undefined | ApiRequest, error: null | Error, isLoading: boolean} = useQuery({
      queryKey: ["elements"],
      queryFn: getElements,
    })
    if (isLoading) return {
      loaded: isLoading,
      scriptError: error,
      headerObject: headerObject,
      footerObject: footerObject
    }

    const response = data;
    
    headerObject= response!.fields.header;
    footerObject= response!.fields.footer;
    
    sessionStorage.setItem('Header', JSON.stringify(headerObject));
    sessionStorage.setItem('Footer', JSON.stringify(footerObject));
    

  } else{
    headerObject=JSON.parse(localHeader);
    footerObject=JSON.parse(localFooter);
    loaded=true;
  }
  return {
    loaded: loaded,
    error: scriptError,
    headerObject: headerObject,
    footerObject: footerObject
  }
}