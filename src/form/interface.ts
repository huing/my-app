export type InternalNamePath = (string | number)[];
export type NamePath = string | number | InternalNamePath;

export type StoreValue = any;
export type Store = Record<string, StoreValue>;

export interface FormInstance<Values = any> {
  // Origin Form API
  getFieldValue: (name: NamePath) => StoreValue;
  getFieldsValue: () => Values;
  setFieldsValue: (values: Values) => void;
  // New API
  submit: () => void;
}

export interface ValidateErrorEntity<Values = any> {
  values: Values;
  errorFields: { name: InternalNamePath; errors: string[] }[];
  outOfDate: boolean;
}

export interface Callbacks<Values = any> {
  onFinish?: (values: Values) => void;
  onFinishFailed?: (errorInfo: ValidateErrorEntity<Values>) => void;
}
