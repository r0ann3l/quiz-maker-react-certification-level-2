import { useState } from "react";
import CreateButton from "./components/CreateButton";
import CategorySelect from "./components/CategorySelect";
import DifficultySelect from "./components/DifficultySelect";
import PageTitle from "../../components/PageTitle";
import QuestionsAndAnswers from "../../components/QuestionsAndAnswers";
import useQuestionsAndAnswers from "../../hooks/useQuestionsAndAnswers";
import SubmitButton from "./components/SubmitButton";
import { useNavigate } from "react-router-dom";

const NewQuiz = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const { requestQuestions, questionsData, selectAnswer } = useQuestionsAndAnswers();

  const handleCategoryOnChange = (value) => {
    setSelectedCategory(parseInt(value))
  }

  const handleDifficultyOnChange = (value) => {
    setSelectedDifficulty(value)
  }

  const handleOnCreateQuiz = () => {
    requestQuestions(selectedCategory, selectedDifficulty)
  }

  const handleOnSubmitQuiz = () => {
    navigate('/results', { state: { questionsData } })
  }

  return (
    <>
      <PageTitle title='QUIZ MAKER' />
      <div>
        <CategorySelect onSelect={handleCategoryOnChange} selected={selectedCategory} />
        <DifficultySelect onSelect={handleDifficultyOnChange} selected={selectedDifficulty} />
        <CreateButton onClick={handleOnCreateQuiz} />
      </div>
      <QuestionsAndAnswers questionsData={questionsData} onSelect={selectAnswer} />
      {
        questionsData.length !== 0 && questionsData.findIndex(item => item.selectedAnswer === null) === -1 &&
        <SubmitButton onClick={handleOnSubmitQuiz} />
      }
    </>
  )
}

export default NewQuiz;