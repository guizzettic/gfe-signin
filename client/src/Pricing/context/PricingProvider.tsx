import React, { useState, ReactNode } from "react";
import PricingContext from "./PricingContext";
import { PricingContextType } from "../types";

interface PricingProviderProps {
  children: ReactNode;
}

export const PricingProvider: React.FC<PricingProviderProps> = ({
  children,
}) => {
  const [monthlyPricing, setMonthlyPricing] = useState(true);

  const value: PricingContextType = {
    monthlyPricing,
    setMonthlyPricing,
  };

  return (
    <PricingContext.Provider value={value}>{children}</PricingContext.Provider>
  );
};
