import { Resource, ValuePropositionFields, Entry, ProductServiceTileFields } from "../../types";
import { renderRichText } from "../../helpers/RichTextProcessor";

export default function ResourceElement(data:Resource) {


const contentType= data.element.sys?.contentType?.sys.id



let imageIcon;
let url;
let title;
let date;
let body;

//Asina los valores a usar accediendo a ellos según el tipo del elemento
switch (contentType){
  case "valueProposition":
    const valueProp : Entry<ValuePropositionFields>= data.element as Entry<ValuePropositionFields>
    imageIcon= valueProp.fields?.icon?.fields?.asset?.fields?.file?.url;
    url= valueProp.fields?.url ?? "/resources";
    title= valueProp.fields?.title;
    date= valueProp.fields?.date ? new Date(valueProp.fields?.date).toLocaleDateString() : "";
    body= valueProp?.fields?.body;
    break;
  case "productTile":
    const productTile : Entry<ProductServiceTileFields>= data.element as Entry<ProductServiceTileFields>
    imageIcon= productTile.fields?.icon.fields?.asset?.fields?.file?.url;
    url= productTile.fields?.url ?? "/resources" ;
    title= productTile.fields?.title;
    date= productTile.fields?.date ? new Date(productTile.fields?.date).toLocaleDateString() : "";
    body= productTile.fields?.ctaText;
    break;
  default:
    console.log("Error, el valor introducido por el switch fue: "+ contentType)
    break;
}


//console.log(url)

  return (
    <div className="lg:flex">
      <img
        className="object-cover w-full h-56 rounded-lg lg:w-64"
        src={imageIcon}
        alt=""
      />

      <div className="flex flex-col justify-between py-6 lg:mx-6">
        
        <a
          href={`${url}`}
          className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
        >
        {title}
        </a>

        

        <span className="text-sm text-gray-500 dark:text-gray-300 line-clamp-5">
        <div>
        {body && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: renderRichText(body),
                  }}
                />
              )}
        </div>
        </span>

        <span className="text-sm text-gray-500 dark:text-blue-300">
          {date}
        </span>
      </div>
    </div>
  );
}
