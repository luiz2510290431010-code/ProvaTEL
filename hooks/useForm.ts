import { useState } from "react";

export function useForm(initialValues: any) {
  const [values, setValues] = useState(initialValues);

  function handleChange(field: string, value: string) {
    setValues({ ...values, [field]: value });
  }

  return { values, handleChange };
}