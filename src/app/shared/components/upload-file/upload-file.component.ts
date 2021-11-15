import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output()
  public onFileSelect: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private store: Store,
    private procesFileService: ProcessFileService
    ) {}

  loading = false;
  btnDisabled = true;
  file?: File;

  onSelect(event: any) {
    if (event.rejectedFiles[0]) {
      this.store.dispatch(setSnackbar({message: 'Incorrect file type selected!', state: 'error'}))
      return
    }
    this.onFileSelect.emit([...event.addedFiles][0])
    this.file = [...event.addedFiles][0]
    this.btnDisabled = false
  }

  submit = async (): Promise<void> => {
    if (this.file) {
      (await this.procesFileService.addFile(this.file))
      .subscribe((receiptResponse: ReceiptResponse) => {
        this.store.dispatch(addReceipt(receiptResponse.data))
        this.store.dispatch(setSnackbar({message: 'File has been uploaded!', state: 'success'}))
        this.clearInput()
      }, (err: any) => {
        this.clearInput()
        this.store.dispatch(setSnackbar({message: err, state: 'error'}))
      })
      this.loading = true;
    }
  }

  clearInput = () => {
    this.onFileSelect.emit(null)
    this.btnDisabled = true
    this.file = null as any
    this.loading = false
  }

  ngOnInit(): void {}

}
