import { createReducer, on } from '@ngrx/store';
import { Loader } from "src/app/models/klippa.models";
import * as LoaderActions from './loader-state.actions';

const initialState: Readonly<Loader> = {
  loading: false,
}

export const loaderReducer = createReducer(
  initialState,
  on(LoaderActions.setLoader, (state, { loader }) => loader),
)
