import { useState } from "react";
import InputField from "./InputField";
import PasswordRequirements from "./PasswordRequirements";
import Button from "./Button";
import PasswordInput from "./PasswordInput";
import useFormValidation from "../hooks/useFormValidation";
import {
  required,
  isEmail,
  minLength,
  hasUpperCase,
  hasLowerCase,
  hasNumber,
  hasSpecialChar,
  maxLength,
} from "../utils/validation";

interface AuthFormProps {
  type: "signin" | "signup";
  onSubmit: (email: string, password: string) => Promise<void>;
  setFormError: (error: string | null) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  type,
  onSubmit,
  setFormError,
}) => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { fields, errors, handleChange, validateForm } = useFormValidation(
    {
      email: {
        value: "",
        rules: [required, isEmail],
      },
      password: {
        value: "",
        rules:
          type === "signup"
            ? [
                required,
                minLength(8),
                maxLength(64),
                hasUpperCase,
                hasLowerCase,
                hasNumber,
                hasSpecialChar,
              ]
            : [required],
      },
    },
    type === "signup",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (validateForm()) {
      if (type === "signup" && !agreeTerms) {
        setFormError(
          "You must agree to the Terms of Service to create an account.",
        );
        return;
      }
      setIsSubmitting(true);
      try {
        await onSubmit(fields.email.value, fields.password.value);
      } catch (error) {
        setFormError((error as Error).message);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setFormError("Please correct the errors in the form.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full space-y-6 md:w-[456px] xl:w-96"
    >
      <InputField
        id="email-field"
        type="email"
        name="email"
        label="Email"
        value={fields.email.value}
        onChange={handleChange}
        placeholder="john@example.com"
        error={errors.email}
      />
      <div>
        <PasswordInput
          id="password-field"
          name="password"
          label="Password"
          value={fields.password.value}
          onChange={handleChange}
          placeholder="**********"
          error={errors.password}
        />

        {type === "signup" && (
          <PasswordRequirements password={fields.password.value} />
        )}
      </div>
      {type === "signup" && (
        <div className="flex items-center">
          <input
            type="checkbox"
            id="terms"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="terms" className="text-sm">
            I agree with CodePulse{" "}
            <span className="text-indigo-700">Terms of Service</span>
          </label>
        </div>
      )}

      <Button type="submit">
        {isSubmitting
          ? "Processing..."
          : type === "signin"
            ? "Sign In"
            : "Create account"}
      </Button>
    </form>
  );
};

export default AuthForm;
