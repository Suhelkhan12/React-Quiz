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
  index: number;
  answer: number | null;
  totalScore: number;
};

type DataReceivedAction = {
  type: "DATA_RECEIVED";
  payload: QuestionType[];
};

type DataFailedAction = {
  type: "DATA_FAILED";
};

type StartQuizAction = {
  type: "QUIZ_START";
};

type SelectAnswerActiion = {
  type: "SELECT_ANSWER";
  payload: number;
};

type MoveToNextQuestion = {
  type: "MOVE_TO_NEXT";
};

type FinishAction = {
  type: "QUIZ_FINISHED";
};

type RestartAction = {
  type: "RESTART_QUIZ";
};

type TimerAction = {
  type: "TICK";
};

export type AllActionType =
  | DataReceivedAction
  | DataFailedAction
  | StartQuizAction
  | SelectAnswerActiion
  | MoveToNextQuestion
  | FinishAction
  | RestartAction
  | TimerAction;

export type ReducerActionType = AllActionType;
