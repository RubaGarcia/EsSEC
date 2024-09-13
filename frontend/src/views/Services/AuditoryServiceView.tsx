import { useQuery } from "@tanstack/react-query";
import { getAuditories } from "../../api/ServicesAPI";
import HeroAuditories from "../../components/Services/auditories/HeroAuditories";
import TestimonialAuditories from "../../components/Services/auditories/TestimonialAuditories";
import type { ApiRequest, Cartridge, Entry, ValuePropositionFields, PersonFields, Blurb, EntryLink} from "../../types";
import { renderRichText } from "../../helpers/RichTextProcessor";

export default function AuditoryServiceView() {
  const { data, isError, isLoading } :  {data: undefined | ApiRequest, isError:boolean, isLoading: boolean} = useQuery({
    queryKey: ["AuditoriesPage"],
    queryFn: getAuditories,
    retry: 10,
  });

  if (isLoading || isError) return <p className="bg-white">Loading...</p>;

  const cartridgeHero : Entry<Cartridge>= data?.fields?.sections?.[0] as  Entry<Cartridge>;
  const auditoriesBlurb : Entry<Blurb>= data?.fields?.sections?.[2] as  Entry<Blurb>;

  const hero: Entry<ValuePropositionFields> = cartridgeHero.fields?.items?.[0] as Entry<ValuePropositionFields>;



  const cartridgeServices: Entry<Cartridge>= data?.fields?.sections?.[1] as Entry<Cartridge>;
  const personas : Entry<PersonFields>[] = cartridgeServices?.fields?.items as Entry<PersonFields>[];
  

  const reviews:  Entry<PersonFields>[] = personas.filter((item: Entry<PersonFields>) => 
    item.metadata?.tags?.find((tag: EntryLink<PersonFields>) => tag.sys.id === 'client')
  );
  
  



  return (
    <>
      <HeroAuditories hero={hero}/>
      

      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-6xl px-6 py-10 mx-auto">
          <p className="text-xl font-medium text-blue-500 ">{auditoriesBlurb?.fields?.title}</p>

          <h1 className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
          { auditoriesBlurb?.fields?.textBlurb && <div dangerouslySetInnerHTML={{ __html: renderRichText(auditoriesBlurb?.fields?.textBlurb ) }} />}
          </h1>

          <TestimonialAuditories reviews={reviews}/>
        </div>
      </section>
    </>
  );
}
