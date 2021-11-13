import { createAction } from "@ngrx/store";
import { Receipt } from "src/app/models/klippa.models";

export const addReceipt = createAction(
  '[Receipt] Add receipt',
  (receipt: Receipt) => ({ receipt })
)
