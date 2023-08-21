import { FormComponentCategory, FormComponentDto, FormComponentType } from "./form-component-dto";

export const FORM_COMPONENTS : FormComponentDto[] = [
  {name: 'number' ,icon: 'bi bi-123' ,  title: 'Number' , category: FormComponentCategory.Basic , type: FormComponentType.Number},
  {name: 'dateTime' ,icon: 'bi bi-calendar3' , title: 'Date time' , category: FormComponentCategory.Basic , type: FormComponentType.DateTime},
  {name: 'textField' ,icon: 'bi bi-input-cursor' , title: 'Text field' ,category: FormComponentCategory.Basic, type: FormComponentType.String},
  {name: 'textArea' ,icon: 'bi bi-textarea-resize' , title: 'Text area' , category: FormComponentCategory.Basic, type: FormComponentType.String},
  {name: 'checkBox' ,icon: 'bi bi-check2-square' , title: 'Text area' , category: FormComponentCategory.Selection , type: FormComponentType.Boolean},
  {name: 'checkList' ,icon: 'bi bi-card-checklist' , title: 'Check list' , category: FormComponentCategory.Selection , type: FormComponentType.List},
  {name: 'select' ,icon: 'bi bi-check-all' , title: 'Select' , category: FormComponentCategory.Selection , type: FormComponentType.List},
  {name: 'tagList' ,icon: 'bi bi-tag-fill' , title: 'Tag List' , category: FormComponentCategory.Selection , type: FormComponentType.List},
  {name: 'imageView' ,icon: 'bi bi-image' , title: 'Image view' , category: FormComponentCategory.Presentation , type: FormComponentType.Image},
  {name: 'textView' ,icon: 'bi bi-card-text' , title: 'Text view' , category: FormComponentCategory.Presentation , type: FormComponentType.String},
  {name: 'button' ,icon: 'bi bi-menu-button-wide-fill' , title: 'Button' , category: FormComponentCategory.Action , type: FormComponentType.Button},
]
