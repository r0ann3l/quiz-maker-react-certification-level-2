import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import QuestionsAndAnswersContextProvider from './contexts/QuestionsAndAnswersContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuestionsAndAnswersContextProvider>
      <App />
    </QuestionsAndAnswersContextProvider>
  </StrictMode>,
)
