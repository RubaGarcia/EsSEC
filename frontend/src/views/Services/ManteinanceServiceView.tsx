import { useQuery } from "@tanstack/react-query";
import { getMaintenance } from "../../api/ServicesAPI";
import { Entry, ApiRequest, ValuePropositionFields, Cartridge, PersonFields, Blurb } from "../../types";
import Hero from "../../components/Services/manteinance/Hero";
import TestimonialSection from "../../components/Services/manteinance/TestimonialSection";

export default function ManteinanceServiceView() {
  const { data, isError, isLoading }  : {data: undefined | ApiRequest, isError: null | boolean, isLoading: boolean}  = useQuery({
    queryKey: ["ServicesManteinancePage"],
    queryFn: getMaintenance,
    retry: 10,
  });

  if (isLoading || isError) return <div>Loading...</div>;

  const heroCartridge: Entry<Cartridge> = data?.fields?.sections?.[0] as Entry<Cartridge>;
  const blurbManteinance: Entry<Blurb> = data?.fields?.sections?.[2] as Entry<Blurb>;
  const hero: Entry<ValuePropositionFields>= heroCartridge.fields?.items?.[0] as Entry<ValuePropositionFields>;


  const testimonials:Entry<PersonFields>[] = []
  const reviewCartridge: Entry<Cartridge>= data?.fields?.sections?.[1] as Entry<Cartridge>;

  const reviews : Entry<PersonFields>[]  = reviewCartridge.fields?.items as Entry<PersonFields>[]

  reviews.forEach((person:Entry<PersonFields>) => {

    testimonials.push(person)
  });


  return (
    <>
      <Hero hero={hero} />

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <TestimonialSection blurb= {blurbManteinance} testimonials={testimonials}/>
        </div> 
      </section>
    </>
  );
}
