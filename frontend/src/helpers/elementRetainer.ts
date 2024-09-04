import { useQuery } from "@tanstack/react-query";
import type { ApiRequest, FooterFields, HeaderFields, Entry } from "../types";
import { getElements } from "../api/LayoutAPI";

export function catchElements(){

  
  let headerObject: Entry<HeaderFields> | null = null;
  let footerObject: Entry<FooterFields> | null = null;
  let loaded: boolean = false; 
  const scriptError: null | Error= null;
    
  const localHeader= sessionStorage.getItem('Header');
  const localFooter= sessionStorage.getItem('Footer');


  if( localHeader === null || localFooter === null){
    const { data, error, isLoading } : {data: undefined | ApiRequest, error: null | Error, isLoading: boolean} = useQuery({
      queryKey: ["elements"],
      queryFn: getElements,
    })



    if (isLoading) return {
      loaded: !isLoading,
      scriptError: error,
      headerObject: headerObject,
      footerObject: footerObject
    }

    const response = data;
    
    headerObject= response!.fields?.header!;
    footerObject= response!.fields?.footer!;
    
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

// function waitToCatch(variable:any){

//   const data = catchElements();
//   function waitFor(data:any):any {
//     if (data.loaded) {
//       return data;
//     }
//     return new Promise((resolve) => setTimeout(resolve, 100))
//     .then(() => Promise.resolve(window[variable])) 
//     .then((res) => waitFor(res))
//   }
//   return waitFor(data);
// }


// export default waitToCatch('testVar').then((res:any) => console.log('>>>', res));

