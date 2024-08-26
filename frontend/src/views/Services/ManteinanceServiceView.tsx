import { useQuery } from "@tanstack/react-query";
import { getMaintenance } from "../../api/ServicesAPI";
import { heroElement, PersonFieldsReview } from "../../types";
import Hero from "../../components/Services/manteinance/Hero";
import TestimonialSection from "../../components/Services/manteinance/TestimonialSection";

export default function ManteinanceServiceView() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["ServicesManteinancePage"],
    queryFn: getMaintenance,
    retry: 10,
  });

  if (isLoading || isError) return <div>Loading...</div>;

  const hero: heroElement = {
    headline: data.fields.sections[0].fields.items[0].fields.headline,
    title: data.fields.sections[0].fields.items[0].fields.title,
    icon: data.fields.sections[0].fields.items[0].fields.icon,
  };


  const testimonials:PersonFieldsReview[] = []

  const reviews = data.fields.sections[1].fields.items

  reviews.forEach((review:any) => {
    const person:PersonFieldsReview ={
      name: review.fields.name,
      review: review.fields.review,
      image: review.fields.image,
      job: review.fields.job
    }
    // console.log(person)
    testimonials.push(person)
  });

  // console.log(testimonials)
  // console.log(testimonials.length)

  return (
    <>
      <Hero hero={hero} />

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <TestimonialSection testimonials={testimonials}/>
        </div> 
      </section>
    </>
  );
}
