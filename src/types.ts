import { Dispatch, SetStateAction } from "react";

export type PageKey = "Jira" | "Tempo" | "Preferences";

export type PageState = Record<PageKey, boolean>;

export type NavigationProps = {
  page: PageState;
  setPage: Dispatch<SetStateAction<PageState>>;
};

export const initialPageState: PageState = {
  Jira: false,
  Tempo: false,
  Preferences: false,
};