import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Receipt, ReceiptResponse } from 'src/app/models/klippa.models';

import { ProcessFileService } from 'src/app/shared/services/proces-file/process-file.service';
import { addReceipt } from 'src/app/state/file-state/file-state.actions';
import { setLoader } from 'src/app/state/loader-state/loader-state.actions';
import { setSnackbar } from 'src/app/state/snackbar-state/snackbar-state.actions';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.sass']
})

export class UploadFileComponent implements OnInit {
  constructor(
    private store: Store,
    private procesFileService: ProcessFileService
    ) {}

  btnDisabled = true;
  componentName = 'uploadFile'
  files: File[] = [];

  onSelect(event: any) {
    if (event.rejectedFiles[0]) {
      this.store.dispatch(setSnackbar({message: 'Incorrect file type selected!'}))
      return
    }
    this.files = [...event.addedFiles]
    this.btnDisabled = false
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
    this.btnDisabled = true
  }

  submit = async (): Promise<void> => {
    (await this.procesFileService.addFile(this.files[0]))
    .subscribe((receiptResponse: ReceiptResponse) => {
      const receipt: Receipt = receiptResponse.data;

      this.store.dispatch(setSnackbar({message: 'File has been uploaded!'}))
      this.store.dispatch(setLoader({loading: false}))
      this.store.dispatch(addReceipt({merchant_name: receipt.merchant_name}))
    }, (err: any) => {
      this.store.dispatch(setLoader({loading: false}))
      this.store.dispatch(setSnackbar({message: err}))
    })
    this.store.dispatch(setLoader({loading: true, parentComponent: 'uploadFile'}))
  }

  ngOnInit(): void {}

}
