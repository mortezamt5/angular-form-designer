import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FormBuilderService } from './service/form-builder.service';
import { DnDFormConfig } from './type';

@Component({
  selector: 'app-form-builder',
  template: ` <ng-content></ng-content> `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormBuilderComponent {
  constructor(public service: FormBuilderService) {}

  public fields$ = this.service.fields$;

  addItem(config: DnDFormConfig) {
    this.service.addItem(config);
  }

  removeItem(config: DnDFormConfig) {
    this.service.removeItem(config);
  }

  updateFormLabel(config: DnDFormConfig, newLabel: string) {
    this.service.updateFormLabel(config, newLabel);
  }
}
