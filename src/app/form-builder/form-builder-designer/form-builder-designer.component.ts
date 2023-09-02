import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { EditableComponent } from '@ngneat/edit-in-place/lib/editable.component';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { FormBuilderService } from '../service/form-builder.service';
import { FormPreviewService } from '../service/form-preview.service';
import { DnDComponentConfig, DnDFormConfig } from '../type';

@Component({
  selector: 'app-form-builder-designer',
  styleUrls: ['./form-builder-designer.component.scss'],
  templateUrl: './form-builder-designer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBuilderDesignerComponent implements OnInit {
  constructor(
    private cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) private document: Document,
    private formPreviewService: FormPreviewService,
    private service: FormBuilderService
  ) {}

  @Input() userMode: 'editing' | 'preview' | null = 'preview';

  @ViewChildren('editable') editable?: QueryList<EditableComponent>;

  controlsByKey: { [k: string]: UntypedFormControl } = {};

  iconOnly = true;

  showComponentSetting = false;
  currentComponent: DnDComponentConfig = {} as DnDComponentConfig;

  ngOnInit(): void {}
  showPreview(fields: FormlyFieldConfig[]) {
    this.formPreviewService.openPreviewModal(fields);
  }

  editableModeChange(mode: 'view' | 'edit', item: DnDFormConfig) {
    this.controlsByKey[item.key + ''] = new UntypedFormControl();

    if (mode === 'edit') {
      const control = this.controlsByKey[item.key + ''];
      control?.setValue(item.templateOptions?.label);
    }
  }

  focusAndSelectedEditableInputText(c: DnDFormConfig) {
    console.log('inputAdd', c);

    this.cdr.detectChanges();

    // TODO - is there a better way to find the editable than to add an ID attribute?
    const editable = this.editable?.find((e) => {
      const editableId = (e as any)?.el?.nativeElement?.id;
      return editableId === c.key + '-editable';
    });

    if (editable) {
      editable.displayEditMode();
      this.cdr.detectChanges();
      const key = c.key + '';
      const input = this.document.getElementById(key) as HTMLInputElement;
      input?.focus();
      input?.select();
      this.cdr.detectChanges();
    }
  }

  componentSettingHandler(config: DnDFormConfig) {
    this.cdr.detectChanges();
    if (config) {
      this.service.updateFormSelectedAll(false);
      this.service.updateFormSelected(config, true);
      this.service.fields$.subscribe((result) => {
        const filteredData: DnDFormConfig[] = result.filter((f) => f.selected);
        if (filteredData.length > 0) {
          this.currentComponent.formComponent = filteredData[0];
          this.showComponentSetting = true;
          this.cdr.detectChanges();
        }
      });
    }
  }
  handlePropertiesSave() {}

  saveAsJson() {
    this.service.fields$.subscribe((result) => {
      const objectStr = this.mapDndFormToJson(result);
      const blob = new Blob([JSON.stringify(objectStr)], {
        type: 'text/plain',
      });
      const downloadAncher = document.createElement('a');
      const fileURL = URL.createObjectURL(blob);
      downloadAncher.href = fileURL;
      downloadAncher.download = 'Form_1.json';
      downloadAncher.click();
    });
  }

  mapDndFormToJson(fields: DnDFormConfig[]) {
    const components: any[] = [];
    fields.forEach((f, i) => {
      components.push({
        id: f.key,
        key: f.key,
        text: f.dndName,
        type: 'text',
        layout: {
          row: i,
        },
        validate: {
          required: true,
        },
      });
    });
    const object = {
      components,
      schemaVersion: 10,
      exporter: {
        name: 'form-js (https://demo.bpmn.io)',
        version: '1.1.0',
      },
      type: 'default',
      id: 'Form_1',
    };
    return object;
  }
}
