import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderDesignerComponent } from './form-builder-designer/form-builder-designer.component';

const routes: Routes = [
  {path: '' , component: FormBuilderDesignerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormBuilderRoutingModule { }
