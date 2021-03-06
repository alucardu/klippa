import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import {MaterialModule} from '../material.module';

import { AppComponent } from './app.component';
import { UploadFileComponent } from './shared/components/upload-file/upload-file.component';
import { ViewFilesComponent, DialogContentExampleDialog } from './shared/components/view-files/view-files.component';
import { receiptReducer }  from './state/file-state/file-state.reducer';
import { LoaderComponent } from './shared/components/loader/loader.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackbarComponent } from './shared/components/snackbar/snackbar.component';
import { snackbarReducer } from './state/snackbar-state/snackbar-state.reducers';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FilePreviewComponent } from './shared/components/file-preview/file-preview.component';
import { UploadReceiptComponent } from './features/upload-receipt/upload-receipt.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    ViewFilesComponent,
    DialogContentExampleDialog,
    LoaderComponent,
    SnackbarComponent,
    FilePreviewComponent,
    UploadReceiptComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      receipts: receiptReducer,
      snackbar: snackbarReducer
    }),
    BrowserAnimationsModule,
    MatSnackBarModule,
    NgxDropzoneModule,
    MaterialModule
  ],
  providers: [MatSnackBarModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
