import { useState } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const useRequest = (initialResults = []) => {
  const [result, setResult] = useState(initialResults);
  const [loading, setLoading] = useState(false);

  const makeRequest = (path) => {
    setLoading(true);

    fetch(BASE_URL + path)
      .then(response => response.json())
      .then(setResult)
      .finally(() => {
        setLoading(false);
      })
  }

  return {
    makeRequest,
    result,
    loading
  }
}

export default useRequest;