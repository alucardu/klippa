import { createSelector } from "@ngrx/store";
import { Loader, AppState } from "src/app/models/klippa.models";

export const selectLoader = createSelector(
  (state: AppState) => state.loader,
  (loader: Loader) => loader
);
