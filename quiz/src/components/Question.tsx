import { type AllActionType, type QuestionType } from "../types";

type QuestionProps = {
  question: QuestionType;
  dispatchFn: React.Dispatch<AllActionType>;
  answer: number | null;
  index: number;
};

const Question = ({ question, dispatchFn, answer, index }: QuestionProps) => {
  const handleAnswerSelection = (index: number) => {
    dispatchFn({
      type: "SELECT_ANSWER",
      payload: index,
    });
  };

  const handleMoveToNextQuestion = () => {
    dispatchFn({
      type: "MOVE_TO_NEXT",
    });
  };

  const handleFinsih = () => {
    dispatchFn({
      type: "QUIZ_FINISHED",
    });
  };

  const hasAnswered = answer !== null;

  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={option}
            onClick={() => handleAnswerSelection(index)}
            className={`btn btn-option ${index === answer ? "answer" : ""}  ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            disabled={hasAnswered}
          >
            {option}
          </button>
        ))}
      </div>
      {hasAnswered && index < 14 && (
        <button onClick={handleMoveToNextQuestion} className="btn btn-ui">
          Next
        </button>
      )}
      {hasAnswered && index === 14 && (
        <button onClick={handleFinsih} className="btn btn-ui">
          Finish
        </button>
      )}
    </div>
  );
};

export default Question;
