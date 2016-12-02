import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html'
})
export class MetaDataComponent {
  // we will pass in address from App component
  @Input('group')
  public metaDataForm: FormGroup;
  @Input() viewType: boolean;
  @Input() isUploadDateVisible: boolean;
}
