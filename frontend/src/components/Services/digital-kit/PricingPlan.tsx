
type PricingPlanProps = {
  name: string;
  price: number;
};

export default function PricingPlan({ name, price }: PricingPlanProps) {
  return (
    <div className="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border border-blue-500 cursor-pointer rounded-xl">
      <div className="flex items-center">
        <div className="flex flex-col items-center mx-5 space-y-1">
          <h2 className="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200">
            {name}
          </h2>

          {/* <div className="px-2 text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 ">
                    Save 20%
                  </div> */}
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-600 sm:text-4xl">
        ${price} <span className="text-base font-medium">{/*Month*/}</span>
      </h2>
    </div>
  );
}
