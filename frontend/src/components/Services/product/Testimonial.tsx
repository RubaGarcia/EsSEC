import {Entry,PersonFields} from "../../../types";

type TestimonialProps = {
  personReview: Entry<PersonFields>;
};

export default function Testimonial({ personReview }: TestimonialProps) {




  return (
    <div className="p-8 border rounded-lg dark:border-gray-700">
      {personReview?.fields?.review && (
        <p className="leading-loose text-gray-500 dark:text-gray-400">
          {personReview.fields?.review.fields?.reviewText}
        </p>
      )}

      <div className="flex items-center mt-8 -mx-2">
        <img
          className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
          src={personReview.fields?.image?.fields?.asset?.fields?.file?.url}//"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt=""
        />

        <div className="mx-2">
          {personReview?.fields?.name && (
            <h1 className="font-semibold text-gray-800 dark:text-white">
              {personReview.fields?.name}
            </h1>
          )}
          {personReview?.fields?.job && (
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {personReview.fields.job.fields?.name}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
