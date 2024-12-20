import { ValuePropositionFields, Entry } from "../../../types";
import { renderRichText } from "../../../helpers/RichTextProcessor";

type heroAuditoriesProps = {
  hero: Entry<ValuePropositionFields>;
};

export default function HeroAuditories({ hero }: heroAuditoriesProps) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
            {hero.fields?.title}
          </h1>
          <div className="mt-6 text-gray-500 dark:text-gray-300">

            {hero.fields?.body && (
              <div
                dangerouslySetInnerHTML={{
                  __html: renderRichText(hero.fields.body),
                }}
              />
            )}
          </div>
          {/* <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
              Start 14-Day free trial
            </button>
            <p className="mt-3 text-sm text-gray-400 ">
              No credit card required
            </p> */}
        </div>

        <div className="flex justify-center mt-10">
          <img
            className="object-cover w-full h-96 rounded-xl lg:w-4/5"
            src={hero.fields?.icon?.fields?.asset?.fields?.file?.url ?? ""} //"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          />
        </div>
      </div>
    </section>
  );
}
