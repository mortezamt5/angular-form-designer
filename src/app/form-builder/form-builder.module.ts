import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule} from '@angular/common';
import { NgModule} from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilderDesignerComponent } from './form-builder-designer/form-builder-designer.component';
import { FormBuilderRoutingModule } from './form-builder-routing.module';
import { FormBuilderSourceComponent } from './form-builder-source.component';
import { FormBuilderTargetComponent } from './form-builder-target.component';
import { FormBuilderComponent } from './form-builder.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatDialogModule
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EditableModule } from '@ngneat/edit-in-place';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { FormPreviewDialogComponent } from './form-preview/form-preview-dialog.component';
import { FormBuilderService } from './service/form-builder.service';
import { FormPreviewService } from './service/form-preview.service';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [
    FormBuilderComponent,
    FormBuilderSourceComponent,
    FormBuilderTargetComponent,
    FormBuilderDesignerComponent,
    FormPreviewDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormBuilderRoutingModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    EditableModule,
    DragDropModule,
    FormlyModule.forChild({}),
    FormlyMaterialModule,
    FormlyMatDatepickerModule,
    MatDialogModule,
    MatMenuModule
  ],
  providers: [FormBuilderService , FormPreviewService]
})
export class FormBuilderModule { }
