import { useContext, useState } from "react"
import CategorySelect from "./components/CategorySelect"
import DifficultySelect from "./components/DifficultySelect";
import CreateButton from "./components/CreateButton";
import Form from "./components/Form";
import Questions from "./components/Questions";
import { QuestionsAndAnswersContext } from "./contexts/QuestionsAndAnswersContext";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const { requestQuestions } = useContext(QuestionsAndAnswersContext);

  const handleCategoryOnChange = (value) => {
    setSelectedCategory(parseInt(value))
  }

  const handleDifficultyOnChange = (value) => {
    setSelectedDifficulty(value)
  }

  const handleOnSubmit = () => {
    requestQuestions(selectedCategory, selectedDifficulty)
  }

  return (
    <>
      <h1>QUIZ MAKER</h1>
      <Form onSubmit={handleOnSubmit} >
        <CategorySelect onSelect={handleCategoryOnChange} selected={selectedCategory} />
        <DifficultySelect onSelect={handleDifficultyOnChange} selected={selectedDifficulty} />
        <CreateButton />
      </Form>
      <Questions />
    </>
  )
}

export default App
