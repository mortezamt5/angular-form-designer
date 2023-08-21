export interface FormComponentDto {
  name: string;
  title: string;
  category: FormComponentCategory;
  type: FormComponentType;
  icon: string;
  value?: any;
}

export enum FormComponentType {
  Number = 'number',
  String = 'string',
  Boolean = 'boolean',
  DateTime = 'dateTime',
  List = 'list',
  Image = 'image',
  Button = 'button',
}

export enum FormComponentCategory {
  Basic = 'Basic',
  Selection = 'Selection',
  Presentation = 'Presentation',
  Action = 'Action',
}
