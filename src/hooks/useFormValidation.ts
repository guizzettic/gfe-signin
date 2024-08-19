import { useCallback, useState } from "react";
import { validate, ValidationRule } from "../utils/validation";

// Define generic types for FieldConfig and FormConfig
interface FieldConfig {
  value: string;
  rules: ValidationRule[];
}

type FormConfig<T extends string> = Record<T, FieldConfig>;

type ErrorMessages<T extends string> = Partial<Record<T, string>>;

const useFormValidation = <T extends string>(
  initialFields: FormConfig<T>,
  validateOnChange: boolean = false,
) => {
  const [fields, setFields] = useState<FormConfig<T>>(initialFields);
  const [errors, setErrors] = useState<ErrorMessages<T>>({});

  const validateFields = useCallback(
    (name: T, value: string) => {
      if (!fields[name] || !Array.isArray(fields[name].rules)) {
        console.error(`No rules found for field: ${name}`);
        return true;
      }

      const error = validate(value, fields[name].rules);
      setErrors((prev) => ({ ...prev, [name]: error }));
      return !error;
    },
    [fields],
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const fieldName = name as T;

      setFields((prev) => ({
        ...prev,
        [fieldName]: { ...prev[fieldName], value },
      }));

      if (validateOnChange) {
        validateFields(fieldName, value);
      }
    },
    [validateFields, validateOnChange],
  );

  const validateForm = useCallback(() => {
    const newErrors: ErrorMessages<T> = {};
    let isValid = true;

    Object.keys(fields).forEach((key) => {
      const error = validate(fields[key as T].value, fields[key as T].rules);
      newErrors[key as T] = error;
      if (error) isValid = false;
    });

    setErrors(newErrors);
    return isValid;
  }, [fields]);

  return { fields, errors, handleChange, validateForm, validateFields };
};

export default useFormValidation;
