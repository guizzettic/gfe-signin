export type ValidationRule = (value: string) => string | undefined;

export const required: ValidationRule = (value) =>
  value ? undefined : "This field is required";

export const minLength =
  (min: number): ValidationRule =>
  (value) =>
    value && value.length < min
      ? `Must be at least ${min} characters`
      : undefined;

export const maxLength =
  (max: number): ValidationRule =>
  (value) =>
    value && value.length > max
      ? `Must be no more than ${max} characters`
      : undefined;

export const isEmail: ValidationRule = (value) =>
  value && !/\S+@\S+\.\S+/.test(value) ? "Invalid email address" : undefined;

export const hasUpperCase: ValidationRule = (value) =>
  value && !/[A-Z]/.test(value)
    ? "Must contain at least one uppercase letter"
    : undefined;

export const hasLowerCase: ValidationRule = (value) =>
  value && !/[a-z]/.test(value)
    ? "Must contain at least one uppercase letter"
    : undefined;

export const hasNumber: ValidationRule = (value) =>
  value && !/\d/.test(value) ? "Must contain at least one number" : undefined;

export const hasSpecialChar: ValidationRule = (value) =>
  value && !/[!@#$%^&*]/.test(value)
    ? "Must contain at least one special character (!@#$%^&*)"
    : undefined;

export const validate = (
  value: string,
  rules: ValidationRule[],
): string | undefined => {
  for (const rule of rules) {
    const error = rule(value);
    if (error) return error;
  }
  return undefined;
};
