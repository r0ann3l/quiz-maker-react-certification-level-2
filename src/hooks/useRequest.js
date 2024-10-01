import { useState } from "react";

const useRequest = (initialResults = []) => {

  const [result, setResult] = useState(initialResults);
  const [loading, setLoading] = useState(false);

  const makeRequest = (url) => {
    setLoading(true);

    fetch(url)
    .then(response => response.json())
    .then(response => {
      setResult(response);
    })
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