import { createAction} from "@ngrx/store";
import { Loader } from "src/app/models/klippa.models";

export const setLoader = createAction(
  '[Loader] Set loader',
  (loader: Loader) => ({ loader })
)
