import { usePricingContext } from "../context/PricingContext";

const PricingHeader: React.FC = () => {
  const { monthlyPricing, setMonthlyPricing } = usePricingContext();

  return (
    <div className="flex h-72 flex-col items-center justify-between md:h-64 md:px-8 lg:px-36">
      <span className="text-center text-base font-semibold text-indigo-700">
        Pricing Tiers
      </span>
      <h1 className="text-3xl font-semibold text-neutral-900 md:text-5xl">
        Fit for all your needs
      </h1>
      <span className="text-center text-lg font-normal text-neutral-600 md:text-xl">
        Pick the plan that suits you today and step up as your demands grow -
        our flexible options have your journey mapped out.
      </span>
      <div className="flex w-72 items-center rounded">
        <button
          onClick={() => setMonthlyPricing(true)}
          className={`flex grow items-center justify-center rounded bg-white text-base font-medium ${monthlyPricing ? `gap-1.5 border-[0.5px] border-solid border-neutral-200 px-4 py-2.5 text-neutral-900 shadow-md` : `gap-2 rounded-br rounded-tr text-neutral-600`}`}
        >
          Monthly
        </button>
        <button
          onClick={() => setMonthlyPricing(false)}
          className={`flex grow items-center justify-center rounded bg-white text-base font-medium ${!monthlyPricing ? `gap-1.5 border-[0.5px] border-solid border-neutral-200 px-4 py-2.5 text-neutral-900 shadow-md` : `gap-2 rounded-br rounded-tr text-neutral-600`}`}
        >
          Annually
        </button>
      </div>
    </div>
  );
};

export default PricingHeader;
