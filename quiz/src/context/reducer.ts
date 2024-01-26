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

    default:
      throw new Error("Invalid action type " + action.type);
  }
}
