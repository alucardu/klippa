import { Component, OnInit, Input  } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState, Loader } from 'src/app/models/klippa.models';
import { selectLoader } from 'src/app/state/loader-state/loader-state.selectors';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass']
})

export class LoaderComponent implements OnInit {
  @Input() parentComponent?: string;

  loading?: boolean

  constructor(private store: Store<AppState>) {
    this.store.pipe(select(selectLoader)).subscribe((loader) => {
      this.loading = loader.loading && loader.parentComponent === this.parentComponent
    })
  }

  ngOnInit(): void {
  }

}
