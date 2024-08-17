import { useState } from "react";
import InputField from "./InputField";
import PasswordRequirements from "./PasswordRequirements";
import Button from "./Button";

interface AuthoFormProps {
  type: "signin" | "signup";
  onSubmit: (email: string, password: string) => void;
}

const AuthoForm: React.FC<AuthoFormProps> = ({ type, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full space-y-6 md:w-[456px] xl:w-96"
    >
      <InputField
        id="email-field"
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="john@example.com"
      />
      <div>
        <InputField
          id="password-field"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="**********"
        />

        {type === "signup" && <PasswordRequirements />}
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

      <Button type="submit">{type === "signin" ? "Sign In" : "Sign Up"}</Button>
    </form>
  );
};

export default AuthoForm;
