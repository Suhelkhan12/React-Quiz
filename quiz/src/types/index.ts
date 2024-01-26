import { type ReactNode } from "react";

export type MainComponentType = {
  children: ReactNode;
};

export type QuestionType = {
  id: string;
  question: string;
  options: string[];
  correctOption: number;
  points: number;
};

export type ReducerStateType = {
  questions: QuestionType[];
  status: "loading" | "error" | "ready" | "active" | "finished";
};

type DataReceivedAction = {
  type: "DATA_RECEIVED";
  payload: QuestionType[];
};

export type ReducerActionType = DataReceivedAction;
