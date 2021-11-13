import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { UploadFileComponent } from './shared/components/upload-file/upload-file.component';
import { ViewFilesComponent } from './shared/components/view-files/view-files.component';
import { receiptReducer }  from './state/file-state/file-state.reducer';
import { LoaderComponent } from './shared/components/loader/loader.component'
import { loaderReducer } from './state/loader-state/loader-state.reducers';

@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    ViewFilesComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      receipts: receiptReducer,
      loader: loaderReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
