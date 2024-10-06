import { useContext, useState } from "react";
import CategorySelect from "../components/CategorySelect";
import CreateButton from "../components/CreateButton";
import DifficultySelect from "../components/DifficultySelect";
import ErrorMessage from "../../../components/ErrorMessage";
import { NewQuizContext } from "../contexts/NewQuizContext";

const Filters = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [errorMessage, setErrorMessage] = useState();

  const { requestQuestions } = useContext(NewQuizContext);

  const handleCategoryOnChange = (value) => {
    setSelectedCategory(parseInt(value))
  }

  const handleDifficultyOnChange = (value) => {
    setSelectedDifficulty(value)
  }

  const handleOnCreateQuiz = () => {
    if (selectedCategory && selectedDifficulty) {
      requestQuestions(selectedCategory, selectedDifficulty);
      setErrorMessage(undefined);
    } else {
      setErrorMessage('You must select one category and a difficulty level, before crating a new Quiz')
    }
  }

  return (
    <>
      <section id="filters">
        <CategorySelect onSelect={handleCategoryOnChange} selected={selectedCategory} />
        <DifficultySelect onSelect={handleDifficultyOnChange} selected={selectedDifficulty} />
        <CreateButton onClick={handleOnCreateQuiz} />
      </section>

      <ErrorMessage errorMessage={errorMessage} />
    </>
  );
}

export default Filters;