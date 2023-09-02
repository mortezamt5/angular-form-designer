import { FormlyFieldConfig } from '@ngx-formly/core';

export type DndInputType =
  | 'Text'
  | 'Number'
  | 'TextArea'
  | 'DatePicker'
  | 'Select'
  | 'CheckList'
  | 'TagList'
  | 'ImageView'
  | 'TextView'
  | 'Button'
  | 'Radio'
  | 'Checkbox'
  | 'Group';

export type DnDComponentConfig =  {
  formComponent: DnDFormConfig;
  positionRow: number;
  positionColumn: number;
};

export type DnDFormConfig = FormlyFieldConfig & {
  dndName: DndInputType;
  dndIcon: string;
  dndTemp: boolean;
  fieldGroup?: DnDFormConfig[];
  selected?:boolean;
};

export const dndFormInputText: DnDFormConfig = {
  dndName: 'Text',
  dndIcon: 'bi bi-input-cursor',
  dndTemp: false,
  type: 'input',
  templateOptions: {
    type: 'text',
    label: 'Text Label',
    required: true,
  },
};

export const dndFormInputNumber: DnDFormConfig = {
  dndName: 'Number',
  dndTemp: false,
  dndIcon: 'bi bi-123',
  type: 'input',
  templateOptions: {
    type: 'number',
    label: 'Number Label',
    required: true,
  },
};

export const dndFormInputDatepicker: DnDFormConfig = {
  dndName: 'DatePicker',
  dndTemp: false,
  dndIcon: 'bi bi-calendar3',
  type: 'datepicker',
  templateOptions: {
    label: 'Date Picker Label',
    required: true,
  },
};

export const dndFormInputTextArea: DnDFormConfig = {
  dndName: 'TextArea',
  dndTemp: false,
  dndIcon: 'bi bi-textarea-resize',
  type: 'textArea',
  templateOptions: {
    label: 'Text Area Label',
    required: true,
  },
};

export const dndFormInputSelect: DnDFormConfig = {
  dndName: 'Select',
  dndTemp: false,
  dndIcon: 'bi bi-menu-button-wide-fill',
  type: 'select',
  templateOptions: {
    label: 'Select Label',
    required: true,
  },
};

export const dndFormInputRadio: DnDFormConfig = {
  dndName: 'Radio',
  dndTemp: false,
  dndIcon: 'bi bi-ui-radios-grid',
  type: 'radio',
  templateOptions: {
    label: 'Radio Label',
    required: true,
    options: [{ label: 'Option 1...', value: 1 }],
  },
};

export const dndFormInputCheckList: DnDFormConfig = {
  dndName: 'CheckList',
  dndTemp: false,
  dndIcon: 'bi bi-list-check',
  type: 'checkList',
  templateOptions: {
    label: 'Check List Label',
    required: true,
    options: [{ label: 'Option 1...', value: 1 }],
  },
};

export const dndFormInputTagList: DnDFormConfig = {
  dndName: 'TagList',
  dndTemp: false,
  dndIcon: 'bi bi-tags',
  type: 'tagList',
  templateOptions: {
    label: 'Tag List Label',
    required: true,
    options: [{ label: 'Option 1...', value: 1 }],
  },
};

export const dndFormInputGroup: DnDFormConfig = {
  dndName: 'Group',
  dndIcon: 'bi bi-collection',
  dndTemp: false,
  fieldGroup: [],
  templateOptions: {
    label: 'Group Label',
  },
};

export const dndFormInputCheckbox: DnDFormConfig = {
  dndName: 'Checkbox',
  dndIcon: 'bi bi-check2-square',
  dndTemp: false,
  type: 'checkbox',
  defaultValue: false,
  templateOptions: {
    label: 'Checkbox Label',
    required: true,
  },
};

export const dndFormInputImageView: DnDFormConfig = {
  dndName: 'ImageView',
  dndIcon: 'bi bi-image',
  dndTemp: false,
  type: 'image',
  defaultValue: false,
  templateOptions: {
    label: 'Image View Label',
    required: true,
  },
};
export const dndFormInputTextView: DnDFormConfig = {
  dndName: 'TextView',
  dndIcon: 'bi bi-card-text',
  dndTemp: false,
  type: 'text',
  defaultValue: false,
  templateOptions: {
    label: 'Text View Label',
    required: true,
  },
};

export const dndFormInputButton: DnDFormConfig = {
  dndName: 'Button',
  dndIcon: 'bi bi-aspect-ratio-fill',
  dndTemp: false,
  type: 'button',
  defaultValue: false,
  templateOptions: {
    label: 'Button Label',
    required: true,
  },
};

export const DndFormInputs: DnDFormConfig[] = [
  dndFormInputText,
  dndFormInputNumber,
  dndFormInputTextArea,
  dndFormInputCheckbox,
  dndFormInputSelect,
  dndFormInputRadio,
  dndFormInputDatepicker,
  dndFormInputCheckList,
  dndFormInputTagList,
  dndFormInputImageView,
  dndFormInputTextView,
  dndFormInputButton,
  // dndFormInputGroup,
];
