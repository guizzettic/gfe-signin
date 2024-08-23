import { createContext, useContext } from "react";
import { PricingContextType } from "../types";

export const PricingContext = createContext<PricingContextType | undefined>(
  undefined,
);

export const usePricingContext = () => {
  const context = useContext(PricingContext);

  if (context === undefined) {
    throw new Error("usePricingContext must be used within a PricingProvider");
  }
  return context;
};

export default PricingContext;
