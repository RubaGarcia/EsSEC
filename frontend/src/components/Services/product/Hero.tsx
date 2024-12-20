import { ValuePropositionFields } from '../../../types'
import { renderRichText } from '../../../helpers/RichTextProcessor'


type HeroProps = {
    hero:ValuePropositionFields
}



export default function Hero({hero}:HeroProps) {

  const heroImg= hero.icon?.fields?.asset?.fields?.file?.url;
  //console.log(JSON.stringify(hero))
  return (
    <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                  {hero.headline}
                  {/* Best place to choose <br /> your{" "}
                  <span className="text-blue-500 ">clothes</span> */}
                </h1>

                <div className="mt-3 text-gray-600 dark:text-gray-400">
                  {<div dangerouslySetInnerHTML={{ __html: renderRichText(hero.body ?? '') }} />}
                </div>

                {/* <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  Shop Now
                </button> */}
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-3xl"
                src={heroImg}//"https://merakiui.com/images/components/Catalogue-pana.svg"//todo image
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
  )
}
