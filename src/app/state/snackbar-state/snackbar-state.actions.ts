import { createAction} from "@ngrx/store";
import { Snackbar } from "src/app/models/klippa.models";

export const setSnackbar = createAction(
  '[Snackbar] Set snackbar',
  (snackbar: Snackbar) => ({ snackbar })
)
