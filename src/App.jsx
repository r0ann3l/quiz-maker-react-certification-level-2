import { useState } from "react"
import CategorySelect from "./components/CategorySelect"
import DifficultySelect from "./components/DifficultySelect";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedDifficulty, setSelectedDifficulty] = useState(0);

  const handleCategoryOnChange = (value) => {
    setSelectedCategory(parseInt(value))
  }

  const handleDifficultyOnChange = (value) => {
    setSelectedDifficulty(parseInt(value))
  }

  return (
    <>
      <CategorySelect onSelect={handleCategoryOnChange} selected={selectedCategory} />
      <DifficultySelect onSelect={handleDifficultyOnChange} selected={selectedDifficulty} />
    </>
  )
}

export default App
