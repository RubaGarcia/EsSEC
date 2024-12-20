

type ProductDisplayProps = {
    imageSrc: string;
    title: string;
    cta: string;
    url: string
};

export default function ProductDisplay({ imageSrc, title, cta, url }: ProductDisplayProps) {


    return (
        <div>
            <img
                className="relative z-10 object-cover w-full rounded-md h-96"
                src={imageSrc}
                alt=""
            />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a
                    href={url}//"#"
                    className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                >
                    {title}
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    {cta}
                </p>

                <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
            </div>
        </div>
   
    );
}


  