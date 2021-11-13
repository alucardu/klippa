import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Receipt } from 'src/app/models/klippa.models';

import { ProcessFileService } from 'src/app/shared/services/proces-file/process-file.service';
import { addReceipt } from 'src/app/state/file-state/file-state.actions';
import { setLoader } from 'src/app/state/loader-state/loader-state.actions';

let file: File;

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

  submitForm = async (e: Event): Promise<void> => {
    this.store.dispatch(setLoader({loading: true, parentComponent: this.componentName}))
    e.preventDefault();
    (await this.procesFileService.addFile(file))
      .subscribe((receiptResponse) => {
        this.store.dispatch(setLoader({loading: false}))
        const receipt: Receipt = receiptResponse.data;
        this.store.dispatch(addReceipt({merchant_name: receipt.merchant_name}))
      })
  }

  handleFileInput(files: FileList): void {
    if (files) file = files[0]; this.btnDisabled = false
  }

  ngOnInit(): void {
  }

}
