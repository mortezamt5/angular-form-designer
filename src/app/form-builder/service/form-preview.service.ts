import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogRef
} from '@angular/material/dialog';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormPreviewDialogComponent } from '../form-preview/form-preview-dialog.component';

@Injectable()
export class FormPreviewService {
  constructor(private dialog: MatDialog) {}

  openPreviewModal(
    fields: FormlyFieldConfig[]
  ): MatDialogRef<FormPreviewDialogComponent> {
    return this.dialog.open(FormPreviewDialogComponent, { data: { fields } });
  }
}
