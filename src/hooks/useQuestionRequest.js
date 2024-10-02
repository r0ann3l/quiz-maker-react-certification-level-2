import useRequest from "./useRequest";

const useQuestionRequest = () => {
  const { makeRequest: baseMakeRequest, result, loading } = useRequest({});

  const makeRequest = (category, difficulty, amount = 5) => {
    baseMakeRequest(`api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`)
  }

  return {
    makeRequest,
    result: result.results,
    loading
  }
}

export default useQuestionRequest;