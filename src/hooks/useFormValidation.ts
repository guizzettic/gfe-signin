import { useCallback, useState } from "react";
import { validate, ValidationRule } from "../utils/validation";

interface FieldConfig {
  value: string;
  rules: ValidationRule[];
}

interface FormConfig {
  [key: string]: FieldConfig;
}

const useFormValidation = (
  initialFields: FormConfig,
  validateOnChange: boolean = false,
) => {
  const [fields, setFields] = useState(initialFields);
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>(
    {},
  );

  const validateFields = useCallback(
    (name: string, value: string) => {
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
      setFields((prev) => ({
        ...prev,
        [name]: { ...prev[name], value },
      }));

      if (validateOnChange) {
        validateFields(name, value);
      }
    },
    [validateFields, validateOnChange],
  );

  const validateForm = useCallback(() => {
    const newErrors: { [key: string]: string | undefined } = {};
    let isValid = true;

    Object.keys(fields).forEach((key) => {
      const error = validate(fields[key].value, fields[key].rules);
      newErrors[key] = error;
      if (error) isValid = false;
    });

    setErrors(newErrors);
    return isValid;
  }, [fields]);

  return { fields, errors, handleChange, validateForm, validateFields };
};

export default useFormValidation;
