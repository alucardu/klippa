import { createSelector } from "@ngrx/store";
import { Snackbar, AppState } from "src/app/models/klippa.models";

export const selectSnackbar = createSelector(
  (state: AppState) => state.snackbar,
  (snackbar: Snackbar) => snackbar
);
