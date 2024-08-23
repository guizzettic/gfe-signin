import { Plan } from "./types";

export const PLAN_DETAILS: Plan[] = [
  {
    name: "Basic Plan",
    planDescription: "Access to a curated selection of abstract images",
    price: 9.99,
    popular: false,
    planBenefit: [
      "Standard quality images",
      "Limited to personal use",
      "Email support",
    ],
  },
  {
    name: "Standard Plan",
    planDescription: "Next-level Integrations, priced economically",
    price: 19.99,
    popular: true,
    planBenefit: [
      "Expanded library with more diverse abstract images",
      "High-resolution images available",
      "Suitable for commercial use",
      "Priority email support",
      "Advanced analytics",
    ],
  },
  {
    name: "Premium Plan",
    planDescription: "Experience limitless living for power users",
    price: 29.99,
    popular: false,
    planBenefit: [
      "Full access to the entire image library, including exclusive content",
      "Highest quality images, including premium collections",
      "Commercial and resale rights",
      "Dedicated customer support line",
      "24/7 support response time",
      "Advanced analytics and insights",
    ],
  },
];
