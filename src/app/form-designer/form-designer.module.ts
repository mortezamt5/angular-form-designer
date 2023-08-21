import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormDesignerRoutingModule } from './form-designer-routing.module';
import { FormDesignerComponent } from './form-designer.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [FormDesignerComponent],
  imports: [CommonModule, FormDesignerRoutingModule, DragDropModule],
})
export class FormDesignerModule {}
