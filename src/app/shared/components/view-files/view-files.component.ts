import { Component, OnInit, Inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { AppState, Receipt } from 'src/app/models/klippa.models';
import { selectReceipts } from 'src/app/state/file-state/file-state.selectors';
@Component({
  selector: 'app-view-files',
  templateUrl: './view-files.component.html',
  styleUrls: ['./view-files.component.scss']
})

export class ViewFilesComponent implements OnInit {
  receipts$: Observable<Receipt[]>;

  constructor(
    public dialog: MatDialog,
    private store: Store<AppState>
  ) {
    this.receipts$ = this.store.pipe(select(selectReceipts))
  }

  ngOnInit(): void {}

  openDialog(receipt: Receipt) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: {receipt: receipt}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'app-view-file',
  templateUrl: './view-file.component.html',
  styleUrls: ['./view-file.component.scss']
})
export class DialogContentExampleDialog {
  receipt?: Receipt

  constructor(
    public dialogRef: MatDialogRef<DialogContentExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.receipt = data.receipt
    console.log(this.receipt)
  }
}
