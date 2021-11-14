import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Receipt, ReceiptResponse } from 'src/app/models/klippa.models';

import { ProcessFileService } from 'src/app/shared/services/proces-file/process-file.service';
import { addReceipt } from 'src/app/state/file-state/file-state.actions';
import { setSnackbar } from 'src/app/state/snackbar-state/snackbar-state.actions';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})

export class UploadFileComponent implements OnInit {
  constructor(
    private store: Store,
    private procesFileService: ProcessFileService
    ) {}

  loading = false;
  btnDisabled = true;
  file?: File;

  onSelect(event: any) {
    if (event.rejectedFiles[0]) {
      this.store.dispatch(setSnackbar({message: 'Incorrect file type selected!'}))
      return
    }
    this.file = [...event.addedFiles][0]
    this.btnDisabled = false
  }

  submit = async (): Promise<void> => {
    if (this.file) {
      (await this.procesFileService.addFile(this.file))
      .subscribe((receiptResponse: ReceiptResponse) => {
        const receipt: Receipt = receiptResponse.data;
        this.btnDisabled = false

        this.store.dispatch(setSnackbar({message: 'File has been uploaded!'}))
        this.loading = false;
        this.store.dispatch(addReceipt({merchant_name: receipt.merchant_name}))
        this.clearInput()
      }, (err: any) => {
        this.store.dispatch(setSnackbar({message: err}))
      })
      this.loading = true;
    }
  }

  clearInput = () => {
    this.btnDisabled = true
    this.file = null as any
  }

  ngOnInit(): void {}

}
