import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss']
})

export class FilePreviewComponent implements OnInit {
  @Input() preview?: any
  type?: string

  constructor(
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.type = this.preview?.type === 'application/pdf' ? 'pdf' : 'image'
  }

  previewUrl() {
    if (this.preview) return this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(this.preview));
    return
  }

}
