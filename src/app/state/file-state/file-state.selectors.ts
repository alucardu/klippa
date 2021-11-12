import { createSelector } from "@ngrx/store";
import { Receipt, AppState } from "src/app/models/klippa.models";

export const selectReceipts = createSelector(
  (state: AppState) => state.receipts,
  (receipts: Receipt[]) => receipts
);
