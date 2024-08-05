
type ProjectDisplayProps = {
  type: string;
  title: string;
  img: string;
};

export default function ProjectDisplay({
  type,
  title,
  img,
}: ProjectDisplayProps) {
  return (
    <section className="lg:flex lg:items-center">
      <div className="lg:w-1/2 ">
        <p className="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
          {type}
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-gray-800 capitalize dark:text-white">
          {title}{" "}
        </h2>
      </div>

      <div className="mt-4 lg:w-1/2 lg:mt-0">
        <img
          className="object-cover w-full h-64 rounded-lg md:h-96"
          src={img}
          alt=""
        />
      </div>
    </section>
  );
}
