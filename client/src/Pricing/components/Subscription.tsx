import { IPlan } from "../types";
import pricing_checkmark from "../../assets/pricing_checkmark.svg";

interface SubscriptionProps {
  plan: IPlan;
  monthlyPricing: boolean;
}

const Subscription: React.FC<SubscriptionProps> = ({
  plan,
  monthlyPricing,
}) => {
  const {
    name,
    planDescription,
    monthlyPrice,
    annualPrice,
    popular,
    planBenefit,
  } = plan;

  return (
    <div className="flex flex-1 flex-col justify-between gap-2 self-stretch rounded-lg border-[1px] border-solid border-neutral-200 md:min-h-[532px]">
      {popular && (
        <div className="flex items-center justify-center rounded-tl-md rounded-tr-md bg-indigo-50 px-2 py-4">
          <h1 className="text-center text-xl font-bold text-indigo-700">
            Most Popular
          </h1>
        </div>
      )}

      <div className="flex flex-col gap-2 p-4 md:p-8 lg:p-6">
        <h2 className="text-2xl font-semibold text-neutral-900">{name}</h2>
        <span className="text-base font-normal text-neutral-600">
          {planDescription}
        </span>
      </div>

      <div className="flex flex-col gap-2 p-4 md:px-8 lg:p-6">
        <div>
          <span className="text-base font-normal text-indigo-700">
            <span className="text-5xl font-semibold text-indigo-700">
              ${monthlyPricing ? monthlyPrice[0] : annualPrice[0]}
            </span>{" "}
            / month
          </span>
        </div>
        <span className="text-base font-normal text-neutral-600">{`${monthlyPricing ? monthlyPrice[1] : annualPrice[1]}`}</span>
      </div>

      <ul className="flex flex-col gap-5 self-stretch p-4 md:min-h-44 md:px-8 lg:min-h-[300px] lg:p-6">
        {planBenefit.map((benefit: string) => (
          <div className="flex items-center gap-3 self-stretch">
            <img
              src={pricing_checkmark}
              className="h-6 w-6 rounded-full bg-indigo-50"
            />
            <li
              key={benefit}
              className="text-base font-normal text-neutral-600"
            >
              {benefit}
            </li>
          </div>
        ))}
      </ul>

      {/* flex justify-center items-center gap-1.5 self-stretch bg-white px-5 py-3 rounded border-[0.5px] border-solid border-neutral-200 */}
      <div className="flex flex-col justify-center gap-1.5 self-stretch px-4 pb-4 md:px-8 md:pb-6 lg:p-6">
        <button
          className={`rounded border-[0.5px] border-solid px-5 py-3 text-base font-medium shadow-lg ${popular ? "bg-indigo-700 text-white" : "bg-white text-neutral-900"}`}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Subscription;
