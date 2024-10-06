import { createContext } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

export const ResultsContext = createContext();

const ResultsContextProvider = ({ children }) => {
  const { state } = useLocation();
  const questionsData = state?.questionsData;

  return (
    <ResultsContext.Provider value={{
      questionsData
    }}>
      {children}
    </ResultsContext.Provider>
  );
}

ResultsContextProvider.propTypes = {
  children: PropTypes.any
}

export default ResultsContextProvider;