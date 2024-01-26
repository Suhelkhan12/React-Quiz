import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { type ReducerStateType } from "./types";
import { reducer } from "./context/reducer";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";

const initialState: ReducerStateType = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  totalScore: 0,
};

const App = () => {
  const [{ questions, status, index, answer }, dispatchFn] = useReducer(
    reducer,
    initialState
  );
  const totalQuestions = questions.length;

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
        dispatchFn({
          type: "DATA_FAILED",
        });
      }
    };
    fetchQuestions();
  }, []);

  return (
    <div className="app">
      <Header />
      <MainContent>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen
            totalQuestions={totalQuestions}
            dispatchFn={dispatchFn}
          />
        )}
        {status === "active" && (
          <Question
            question={questions[index]}
            dispatchFn={dispatchFn}
            answer={answer}
          />
        )}
      </MainContent>
    </div>
  );
};

export default App;
