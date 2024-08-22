import React, { useState } from "react";
import InputField from "./InputField";
import hide_password from "../assets/hide_password.svg";
import display_password from "../assets/display_password.svg";

interface PasswordInputProps {
  id: string;
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="relative mt-[-6px]">
      <InputField {...props} type={showPassword ? "text" : "password"} />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-3 top-11"
        aria-label={showPassword ? "Hide password" : "Show password"}
        title={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? (
          <img
            src={hide_password}
            className="h-3 w-[14.42483901977539px] text-neutral-900"
            alt="Hide password"
          />
        ) : (
          <img
            src={display_password}
            className="h-3 w-[14.42483901977539px] text-neutral-900"
            alt="Display password"
          />
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
