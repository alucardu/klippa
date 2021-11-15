import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState, Snackbar } from 'src/app/models/klippa.models';
import { selectSnackbar } from 'src/app/state/snackbar-state/snackbar-state.selectors';

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.sass']
})
export class SnackbarComponent implements OnInit {

  snackbar?: Snackbar

  constructor(
    private store: Store<AppState>,
    private _snackBar: MatSnackBar
  ) {
    this.store.pipe(select(selectSnackbar)).subscribe((snackbar) => this.openSnackBar(snackbar))
  }

  openSnackBar(snackbar: Snackbar) {
    snackbar.message.length > 0 ? this._snackBar.open(snackbar.message, 'close', {
      duration: 3000,
      panelClass: snackbar.state
    }) : null;
  }

  ngOnInit(): void {
  }

}
