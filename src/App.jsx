import { useState } from "react"
import CategorySelect from "./components/CategorySelect"

function App() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategoryOnChange = (value) => {
    setSelectedCategory(parseInt(value))
  }

  return (
    <CategorySelect onSelect={handleCategoryOnChange} selected={selectedCategory} />
  )
}

export default App
