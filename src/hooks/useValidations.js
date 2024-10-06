import { useState } from "react";

const useValidations = (schema) => {
  const [errorMessage, setErrorMessage] = useState();

  const validate = (data, callback) => {
    return schema.validate(data)
      .then(() => {
        callback(data);
        setErrorMessage(undefined);
      })
      .catch(error => {
        setErrorMessage(error.errors[0])
      });
  }

  return {
    validate,
    errorMessage
  }
}

export default useValidations;