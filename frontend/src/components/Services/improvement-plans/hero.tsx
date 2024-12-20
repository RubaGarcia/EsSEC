import { Entry, ValuePropositionFields } from "../../../types";
import { renderRichText } from "../../../helpers/RichTextProcessor";

type HeroProps = {
  hero: Entry<ValuePropositionFields>;
};

export default function Hero({ hero }: HeroProps) {
//   console.log(hero);
  return (
    <div className="lg:flex">
      <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
        <div className="max-w-xl">
          {hero.fields?.title && (
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              {hero.fields?.title}
            </h2>
          )}

          {hero.fields?.body && (
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
              {hero.fields?.body && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: renderRichText(hero.fields?.body),
                  }}
                />
              )}
            </p>
          )}

          {/* <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
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
          </div> */}
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
  );
}
