import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDesignerComponent } from './form-designer.component';

const routes: Routes = [
  {path: '' , component: FormDesignerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormDesignerRoutingModule { }
