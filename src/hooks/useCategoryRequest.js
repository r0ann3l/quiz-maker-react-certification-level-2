import { useEffect } from "react";
import useRequest from "./useRequest";

const useCategoryRequest = () => {
  const {makeRequest, loading, result} = useRequest({});

  useEffect(() => {
    makeRequest("api_category.php")
  }, []) 

  return {
    result: result.trivia_categories || [],
    loading
  }
}

export default useCategoryRequest;