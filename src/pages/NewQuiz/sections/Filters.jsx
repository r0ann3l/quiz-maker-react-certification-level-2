import { useContext, useState } from "react";
import CategorySelect from "../components/CategorySelect";
import CreateButton from "../components/CreateButton";
import DifficultySelect from "../components/DifficultySelect";
import ErrorMessage from "../../../components/ErrorMessage";
import { NewQuizContext } from "../contexts/NewQuizContext";
import { newQuizSchema } from "../../../validations/new_quiz";
import useValidations from "../../../hooks/useValidations";

const Filters = () => {
  const { requestQuestions } = useContext(NewQuizContext);

  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const { validate, errorMessage } = useValidations(newQuizSchema);

  const handleCategoryOnChange = (value) => {
    setSelectedCategory(parseInt(value))
  }

  const handleDifficultyOnChange = (value) => {
    setSelectedDifficulty(value)
  }

  const handleOnCreateQuiz = () => {
    validate({
      category: selectedCategory,
      difficulty: selectedDifficulty
    }, () => {
      requestQuestions(selectedCategory, selectedDifficulty);
    })
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