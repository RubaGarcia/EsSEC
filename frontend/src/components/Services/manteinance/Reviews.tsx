import { PersonFieldsReview } from "../../../types";

type ReviewsProps = {
  review: PersonFieldsReview;
};

export default function Reviews({ review }: ReviewsProps) {
  return (
    <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
      {review.review.fields.reviewText && (
        <p className="leading-loose text-gray-500 dark:text-gray-300">
          {review.review.fields.reviewText}
        </p>
      )}

      <div className="flex items-center mt-6">
        {review.image && (
          <img
            className="object-cover rounded-full w-14 h-14"
            //todo:hacer imagen
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
          />
        )}

        <div className="mx-4">
          {review.name && (
            <h1 className="font-semibold text-blue-500">{review.name}</h1>
          )}
          {review.job && (
            <span className="text-sm text-gray-500 dark:text-gray-300">
              {review.job.fields.name}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
