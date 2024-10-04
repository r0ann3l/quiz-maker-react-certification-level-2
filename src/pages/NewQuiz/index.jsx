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
      <header>
        <PageTitle title='QUIZ MAKER' />
      </header>

      <main>
        <section id="filters">
          <CategorySelect onSelect={handleCategoryOnChange} selected={selectedCategory} />
          <DifficultySelect onSelect={handleDifficultyOnChange} selected={selectedDifficulty} />
          <CreateButton onClick={handleOnCreateQuiz} />
        </section>

        <section id="questions-answers">
          <QuestionsAndAnswers questionsData={questionsData} onSelect={selectAnswer} />
        </section>

        <section id="actions">
          {
            questionsData.length !== 0 && questionsData.findIndex(item => item.selectedAnswer === null) === -1 &&
            <SubmitButton onClick={handleOnSubmitQuiz} />
          }
        </section>
      </main>
    </>
  )
}

export default NewQuiz;