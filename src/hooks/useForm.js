import { useState } from "react";

const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBlur = () => setErrors(validateForm(form));

  return { form, errors, handleChange, handleBlur, setForm };
};

export default useForm;
