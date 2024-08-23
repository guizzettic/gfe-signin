export type PlanBenefit = string;

export interface Plan {
  name: string;
  planDescription: string;
  price: number;
  popular: boolean;
  planBenefit: PlanBenefit[];
}
