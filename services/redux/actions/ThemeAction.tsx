import { Theme } from "../reducers/ThemeReducer";

export interface PokeActions {
  type: string;
  payload: Theme;
}
export const ThemeAction = (isDark: boolean = false): PokeActions => ({
  type: "theme",
  payload: { isDark },
});
