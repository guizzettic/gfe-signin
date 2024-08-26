import Subscription from "../components/Subscription";
import { PricingProvider } from "../context/PricingProvider";
import { PLAN_DETAILS } from "../data";
import PricingHeader from "./../components/PricingHeader";

const Pricing: React.FC = () => {
  return (
    <PricingProvider>
      <div className="flex h-full w-full flex-col bg-gradient-to-b from-gray-50 to-gray-300">
        <div className="m-4 flex grow flex-col items-center rounded-md bg-white pt-12 shadow-md lg:pt-20">
          <div className="flex w-80 flex-col gap-12 px-2 md:w-[704px] lg:w-[1216px] lg:gap-16">
            <PricingHeader />

            <div className="flex flex-col items-center justify-center gap-8 self-stretch py-4 lg:flex-row">
              {PLAN_DETAILS.map((plan) => (
                <Subscription key={plan.name} plan={plan} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PricingProvider>
  );
};

export default Pricing;
