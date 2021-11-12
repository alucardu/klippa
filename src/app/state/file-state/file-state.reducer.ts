import { createReducer, on } from '@ngrx/store';
import { Receipt } from "src/app/models/klippa.models";
import * as ReceiptActions from './file-state.actions';

const initialState: ReadonlyArray<Receipt> = [];

export const receiptReducer = createReducer(
  initialState,
  on(ReceiptActions.addReceipt, (state, { receipt }) => [...state, receipt]),
)
