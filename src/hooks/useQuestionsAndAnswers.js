import { useEffect, useState } from "react";
import { randomizeAnswers } from "../utils/answers";
import useQuestionRequest from "./useQuestionRequest";

const useQuestionsAndAnswers = () => {
  const { makeRequest, result } = useQuestionRequest();

  const [questionsData, setQuestionsData] = useState([]);

  useEffect(() => {
    if (result) {
      setQuestionsData(
        result.map(question => ({
          question: question.question,
          selectedAnswer: null,
          correctAnswer: question.correct_answer,
          answers: randomizeAnswers([question.correct_answer, ...question.incorrect_answers])
        }))
      )
    }
  }, [result])

  const selectAnswer = (question, answer) => {
    const currentQuestionDataIndex = questionsData.findIndex(item => item.question === question);

    if (currentQuestionDataIndex === -1) {
      return;
    }

    const currentQuestionData = questionsData[currentQuestionDataIndex];

    if (currentQuestionData.selectedAnswer === null || currentQuestionData.selectedAnswer != answer) {
      // It means we must select this answer
      currentQuestionData.selectedAnswer = answer;
    } else {
      // Otherwise, we must unselect the answer
      currentQuestionData.selectedAnswer = null;
    }

    const newQuestionData = [...questionsData];
    newQuestionData[currentQuestionDataIndex] = currentQuestionData;

    setQuestionsData(newQuestionData);
  }

  const isQuizCompleted = () => {
    return questionsData.findIndex(item => item.selectAnswer === null) === -1;
  }

  return {
    questionsData,
    selectAnswer,
    requestQuestions: makeRequest,
    isQuizCompleted,
  }
}

export default useQuestionsAndAnswers;