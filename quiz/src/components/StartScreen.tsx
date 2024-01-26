import { ReducerActionType } from "../types";

type StartScreenType = {
  totalQuestions: number;
  dispatchFn: React.Dispatch<ReducerActionType>;
};
const StartScreen = ({ totalQuestions, dispatchFn }: StartScreenType) => {
  const handleStart = () => {
    dispatchFn({
      type: "QUIZ_START",
    });
  };

  return (
    <div className="start">
      <h2>Welcome to React Quiz🔥</h2>
      <h3>{totalQuestions} question to test your React knowledge</h3>
      <button className="btn btn-ui" onClick={handleStart}>
        Let's start
      </button>
    </div>
  );
};

export default StartScreen;
