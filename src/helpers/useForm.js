import { useState, useEffect } from 'react';

/**
 *
 * @param {*} callback
 * @param {*} validate
 */
const useForm = (callback, validate) => {
  const [formFields, setFormFields] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [callback, errors, isSubmitting]);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    setErrors(validate(formFields));
    setIsSubmitting(true);
  };

  const handleChange = event => {
    event.persist();
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.value
    });
  };
  const handleChecked = e => {
    setChecked(!checked);
    setFormFields({ ...formFields, isMentor: checked });
    // e.target.checked = checked;
  };

  return {
    handleChange,
    handleSubmit,
    handleChecked,
    formFields,
    errors
  };
};

export default useForm;
