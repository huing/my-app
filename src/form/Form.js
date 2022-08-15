import { useImperativeHandle, forwardRef } from "react";
import Field from "./Field";
import FieldContext from "./FieldContext";
import useForm from "./useForm";

export function BaseForm({ children, form, onFinish, onFinishFailed }, ref) {
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
}

const Form = forwardRef(BaseForm);
Form.Field = Field;
Form.useForm = useForm;

export default Form;
