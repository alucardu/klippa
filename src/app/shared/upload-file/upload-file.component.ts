import { Component, OnInit } from '@angular/core';

import { ProcessFileService } from 'src/app/shared/proces-file/process-file.service';

let file: File;

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.sass']
})

export class UploadFileComponent implements OnInit {
  constructor(private procesFileService: ProcessFileService) { }

  files: any[] = [];
  isDisabled = true;

  submitForm = async (e: Event): Promise<void> => {
    e.preventDefault();
    (await this.procesFileService.addFile(file))
      .subscribe(file => {
        this.files.push(file)
      })
  }

  handleFileInput(files: FileList): void {
    if (files) file = files[0]; this.isDisabled = false
  }

  ngOnInit(): void {
  }

}
