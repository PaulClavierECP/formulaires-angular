export class ModelBase<T> {
  value: T;
  name: string;
  label: string;
  required: boolean;
  order: number;
  type: string;
  controlType: string;
  options: { key: string; value: string }[];

  constructor(
    model: {
      value?: T;
      name?: string;
      label?: string;
      required?: boolean;
      order?: number;
      type?: string;
      controlType?: string;
      options?: { key: string; value: string }[];
    } = {}
  ) {
    this.value = model.value;
    this.name = model.name;
    this.label = model.label || '';
    this.required = !!model.required;
    this.order = model.order === undefined ? 1 : model.order;
    this.type = model.type || '';
    this.controlType = model.controlType || '';
    this.options = model.options || [];
  }
}
