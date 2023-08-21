import { FormBuilderModule } from './form-builder/form-builder.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form-builder',
    pathMatch: 'full'
  },
  {
    path: 'form-designer',
    loadChildren: () =>
      import('./form-designer/form-designer.module').then(
        (m) => m.FormDesignerModule
      ),
  },
  {
    path: 'form-builder',
    loadChildren: () =>
      import('./form-builder/form-builder.module').then(
        (m) => m.FormBuilderModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
