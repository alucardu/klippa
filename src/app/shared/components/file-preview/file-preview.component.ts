import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss']
})

export class FilePreviewComponent implements OnInit {
  @Input() preview?: any

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}

  previewUrl() {
    if (this.preview) return this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(this.preview));
    return
  }

}
