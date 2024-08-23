import Subscription from "../components/Subscription";
import { PLAN_DETAILS } from "../data";
import PricingHeader from "./../components/PricingHeader";
import { useState } from "react";

const Pricing: React.FC = () => {
  const [monthlyPricing, setMonthlyPricing] = useState(true);

  return (
    <div className="flex h-screen w-full flex-col bg-gradient-to-b from-gray-50 to-gray-300">
      <div className="m-4 flex grow flex-col items-center overflow-y-auto rounded-md bg-white pt-12 shadow-md lg:pt-20">
        {/* container */}
        <div className="flex w-80 flex-col gap-12 px-2 md:w-[704px] lg:w-[1216px] lg:gap-16 lg:px-10">
          {/* pricing content */}
          <PricingHeader
            setMonthlyPricing={setMonthlyPricing}
            monthlyPricing={monthlyPricing}
          />

          {/* subscription tier */}
          <div className="flex flex-col items-center justify-center gap-8 self-stretch lg:flex-row">
            {PLAN_DETAILS.map((plan) => (
              <Subscription
                key={plan.name}
                plan={plan}
                monthlyPricing={monthlyPricing}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
