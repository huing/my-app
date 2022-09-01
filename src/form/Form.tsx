import {
  useImperativeHandle,
  forwardRef,
  ForwardRefRenderFunction,
} from "react";
import Field from "./Field";
import FieldContext from "./FieldContext";
import { Callbacks, FormInstance } from "./interface";
import useForm from "./useForm";

type BaseFormProps = Omit<
  React.FormHTMLAttributes<HTMLFormElement>,
  "onSubmit" | "children"
>;

export interface FormProps<Values = any> extends BaseFormProps {
  form?: FormInstance<Values>;
  children?: React.ReactNode;
  onFinish?: Callbacks<Values>["onFinish"];
  onFinishFailed?: Callbacks<Values>["onFinishFailed"];
}

// 常规函数和 class 组件不接收 ref 参数，且 props 中也不存在 ref
export const BaseForm: ForwardRefRenderFunction<FormInstance, FormProps> = (
  props,
  ref
) => {
  const { children, form, onFinish, onFinishFailed } = props;
  const [formInstance] = useForm(form);

  // useImperativeHandle 应与 forwardRef 一起使用
  //使用ref时， 自定义暴露给父组件的实例值
  useImperativeHandle(ref, () => formInstance);
  formInstance.getInternalHooks().setCallbacks({ onFinish, onFinishFailed });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        formInstance.submit();
      }}
    >
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  );
};

const InternalForm = forwardRef<FormInstance, FormProps>(BaseForm) as <
  Values = any
>(
  props: FormProps<Values> & { ref?: React.Ref<FormInstance<Values>> }
) => React.ReactElement;

type BaseFormType = typeof InternalForm;

interface FormType extends BaseFormType {
  Field: typeof Field;
  useForm: typeof useForm;
}

const Form: FormType = InternalForm as FormType;
Form.Field = Field;
Form.useForm = useForm;

export { Field, useForm };
export default Form;
