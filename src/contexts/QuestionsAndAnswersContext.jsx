import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import useQuestionRequest from "../hooks/useQuestionRequest";
import { randomizeAnswers } from "../utils/answers";

export const QuestionsAndAnswersContext = createContext();

const QuestionsAndAnswersContextProvider = ({ children }) => {
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

    if (currentQuestionData.selectedAnswer === null) {
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

  const totalQuestions = () => {
    return questionsData.length;
  }

  const totalCorrectAnswers = () => {
    return questionsData.filter(item => item.selectedAnswer === item.correctAnswer).length;
  }

  return (
    <QuestionsAndAnswersContext.Provider value={{
      questionsData,
      selectAnswer,
      requestQuestions: makeRequest,
      isQuizCompleted,
      totalQuestions,
      totalCorrectAnswers
    }}>
      {children}
    </QuestionsAndAnswersContext.Provider>
  );
}

QuestionsAndAnswersContextProvider.propTypes = {
  children: PropTypes.element,
}

export default QuestionsAndAnswersContextProvider;