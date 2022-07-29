export interface FormItemDTO {
  name: string;
}

export enum ResultEnum {
  success = "成功",
  error = "失败",
}

export type FormDTO = Record<string, any>;
