import disabled_rule from "../assets/disabled_rule.svg";
import enabled_rule from "../assets/enabled_rule.svg";
import {
  minLength,
  maxLength,
  hasUpperCase,
  hasLowerCase,
  hasNumber,
  hasSpecialChar,
} from "../utils/validation";

interface PasswordRequirementsProps {
  password: string;
}

const PasswordRequirements: React.FC<PasswordRequirementsProps> = ({
  password,
}) => {
  const requirements = [
    {
      check: (pwd: string) =>
        minLength(8)(pwd) === undefined && maxLength(64)(pwd) === undefined,
      text: "8 - 64 characters",
    },
    {
      check: (pwd: string) => hasUpperCase(pwd) === undefined,
      text: "One uppercase letter",
    },
    {
      check: (pwd: string) => hasLowerCase(pwd) === undefined,
      text: "One lowercase letter",
    },
    {
      check: (pwd: string) => hasNumber(pwd) === undefined,
      text: "One number",
    },
    {
      check: (pwd: string) => hasSpecialChar(pwd) === undefined,
      text: "One special character (e.g., ! @ # $ % ^ & *)",
    },
  ];

  const metRequirements = requirements.filter((req) =>
    req.check(password),
  ).length;
  const strengthPercentage = (metRequirements / requirements.length) * 100;

  return (
    <div className="mt-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">
          Password strength
        </span>
        <span className="text-sm font-medium text-gray-700">
          {metRequirements}/{requirements.length}
        </span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-gray-200">
        <div
          className="h-2.5 rounded-full bg-blue-600"
          style={{ width: `${strengthPercentage}%` }}
        ></div>
      </div>
      <ul className="mt-4 space-y-2 text-xs text-gray-500">
        {requirements.map((req, index) => (
          <li key={index} className="flex items-center space-x-2">
            <img
              src={
                password && req.check(password) ? enabled_rule : disabled_rule
              }
              alt={
                req.check(password) ? "Requirement met" : "Requirement not met"
              }
              className="h-4 w-4"
            />
            <span>{req.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordRequirements;
