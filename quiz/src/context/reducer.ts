import { type ReducerStateType, type ReducerActionType } from "../types";

export function reducer(
  state: ReducerStateType,
  action: ReducerActionType
): ReducerStateType {
  switch (action.type) {
    case "DATA_RECEIVED":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "DATA_FAILED":
      return {
        ...state,
        status: "error",
      };
    case "QUIZ_START":
      return {
        ...state,
        status: "active",
      };
    case "SELECT_ANSWER": {
      const currQuestion = state.questions[state.index];
      console.log(currQuestion);
      return {
        ...state,
        answer: action.payload,
        totalScore:
          currQuestion && action.payload === currQuestion.correctOption
            ? state.totalScore + currQuestion.points
            : state.totalScore,
      };
    }
    case "MOVE_TO_NEXT":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };

    case "QUIZ_FINISHED":
      return {
        ...state,
        status: "finished",
      };

    case "RESTART_QUIZ":
      return {
        ...state,
        status: "ready",
        index: 0,
        answer: null,
        totalScore: 0,
      };

    default:
      throw new Error("Invalid action type ");
  }
}
