import { useQuery } from "@tanstack/react-query";
import { getAuditories } from "../../api/ServicesAPI";
import { heroElement, PersonFieldsReview, PersonReview } from "../../types";
import HeroAuditories from "../../components/Services/auditories/HeroAuditories";
import TestimonialAuditories from "../../components/Services/auditories/TestimonialAuditories";

export default function AuditoryServiceView() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["AuditoriesPage"],
    queryFn: getAuditories,
    retry: 10,
  });

  console.log(data);

  //   console.log(data.fields.sections[0].fields.items)
  if (isLoading || isError) return <p className="bg-white">Loading...</p>;

  const hero: heroElement = data.fields.sections[0].fields.items[0].fields;
// console.log(hero)


  const reviews: PersonFieldsReview[] = []

  data.fields.sections[1].fields.items.forEach((item: PersonReview) => {

    const review:PersonFieldsReview = {
      name: item.fields.name,
      review: item.fields.review,
      // job: item.fields.job || "No job",
    }
    reviews.push(review);
  })



  return (
    <>
      <HeroAuditories hero={hero}/>
      

      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-6xl px-6 py-10 mx-auto">
          <p className="text-xl font-medium text-blue-500 ">Testimonials</p>

          <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            What clients saying
          </h1>

          <TestimonialAuditories reviews={reviews}/>
        </div>
      </section>
    </>
  );
}
