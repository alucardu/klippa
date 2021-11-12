import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectReceipts } from 'src/app/state/file-state/file-state.selectors';
import { Observable } from 'rxjs';
import { AppState, Receipt } from 'src/app/models/klippa.models';

@Component({
  selector: 'app-view-files',
  templateUrl: './view-files.component.html',
  styleUrls: ['./view-files.component.sass']
})

export class ViewFilesComponent implements OnInit {
  receipts$: Observable<Receipt[]>;

  constructor(private store: Store<AppState>) {
    this.receipts$ = this.store.pipe(select(selectReceipts))
  }

  ngOnInit(): void {}

}
