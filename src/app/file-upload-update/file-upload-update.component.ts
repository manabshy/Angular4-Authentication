import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-file-upload-update',
  templateUrl: './file-upload-update.component.html',
  styleUrls: ['./file-upload-update.component.css']
})
export class FileUploadUpdateComponent {

  @Input() viewUploadInCreate: boolean;

}
