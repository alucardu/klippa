import { createReducer, on } from '@ngrx/store';
import { Loader, Snackbar } from "src/app/models/klippa.models";
import * as SnackbarActions from './snackbar-state.actions';

const initialState: Readonly<Snackbar> = {
  message: '',
  state: ''
}

export const snackbarReducer = createReducer(
  initialState,
  on(SnackbarActions.setSnackbar, (state, { snackbar }) => snackbar),
)
