import { Entry, JobFields} from "../../types";
import { Link } from "react-router-dom";

type JobItemProps = {
  job: Entry<JobFields>;
};

export default function JobItem({ job }: JobItemProps) {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-md shadow-md flex flex-col space-y-3">
      <div className="flex flex-row justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {job.fields?.name}
        </h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 font-bold">
          {job.fields?.salary?.toString()}€/año
        </p>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {job.fields?.description.toString().substring(0, 300) + "..."}
      </p>
      <Link
        className="px-6 py-2 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        to={`/jobs/${job.sys?.id}`}
      >
        Apply
      </Link>
      {/* <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        Apply
      </button> */}
      {
        //Todo: redirigir a la pagina de aplicar a la oferta
      }
    </div>
  );
}
