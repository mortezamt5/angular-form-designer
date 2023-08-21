import { Component, Inject } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormlyFieldConfig } from '@ngx-formly/core';
@Component({
  template: `
    <div class="mat-dialog-container">
      <div class="mat-dialog-header">Form Preview</div>
      <div class="mat-dialog-content">
        <form [formGroup]="form" class="max-height">
          <formly-form
            [form]="form"
            [fields]="data.fields || []"
            [model]="model"
          ></formly-form>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./form-preview-dialog.component.scss']
})
export class FormPreviewDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { fields: FormlyFieldConfig[] }
  ) {}

  form = new UntypedFormGroup({});
  model = {};
}
