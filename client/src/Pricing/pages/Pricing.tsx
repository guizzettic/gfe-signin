import Subscription from "../components/Subscription";
import { PLAN_DETAILS } from "../data";
import PricingHeader from "./../components/PricingHeader";
import { useState } from "react";

const Pricing: React.FC = () => {
  const [monthlyPricing, setMonthlyPricing] = useState(true);

  return (
    <div className="flex h-screen w-full flex-col bg-gradient-to-b from-gray-50 to-gray-300">
      <div className="m-4 flex grow flex-col items-center overflow-y-auto rounded-md bg-white pt-12 shadow-md">
        {/* container */}
        <div className="flex w-80 flex-col gap-12 bg-red-200">
          {/* pricing content */}
          <PricingHeader
            setMonthlyPricing={setMonthlyPricing}
            monthlyPricing={monthlyPricing}
          />

          {/* subscription tier */}
          {PLAN_DETAILS.map((plan) => (
            <Subscription key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
