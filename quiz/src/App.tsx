import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { type ReducerStateType } from "./types";
import { reducer } from "./context/reducer";

const initialState: ReducerStateType = {
  questions: [],
  status: "loading",
};

function App() {
  const [currentState, dispatchFn] = useReducer(reducer, initialState);
  console.log(currentState);

  // IMP fetching questions
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:8000/questions");
        const data = await response.json();
        console.log(data);

        dispatchFn({
          type: "DATA_RECEIVED",
          payload: data,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchQuestions();
  }, []);

  return (
    <div className="app">
      <Header />
      <MainContent>
        <p>I'm main content</p>
      </MainContent>
    </div>
  );
}

export default App;
