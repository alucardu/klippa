import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-receipt',
  templateUrl: './upload-receipt.component.html',
  styleUrls: ['./upload-receipt.component.scss']
})
export class UploadReceiptComponent implements OnInit {

  public file?: File;

  constructor() { }

  ngOnInit(): void {
  }

  updateData(event: File) {
    this.file = event;
  }

}
