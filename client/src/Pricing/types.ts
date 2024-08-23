export type PlanBenefit = string;

export interface IPlan {
  name: string;
  planDescription: string;
  monthlyPrice: [number, string];
  annualPrice: [number, string];
  popular: boolean;
  planBenefit: PlanBenefit[];
}

export interface PricingContextType {
  monthlyPricing: boolean;
  setMonthlyPricing: (value: boolean) => void;
}
