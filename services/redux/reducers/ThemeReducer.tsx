import { AnyAction, Reducer } from "redux";
export interface Theme {
  isDark: boolean;
}
export const ThemeReducer: Reducer<Theme, AnyAction> = (
  state = {
    isDark: false,
  },
  action: AnyAction
) => {
  switch (action.type) {
    case "theme":
      return action.payload;
    default:
      return state;
  }
};
