import React, { useImperativeHandle } from "react";
import Field from "./Field";
import FieldContext from "./FieldContext";
import useForm from "./useForm";

export function BaseForm({ children, form, onFinish, onFinishFailed }, ref) {
  const [formInstance] = useForm(form);
  useImperativeHandle(ref, () => formInstance);
  formInstance.setCallbacks({ onFinish, onFinishFailed });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formInstance.submit();
      }}
    >
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  );
}

// const Form = React.forwardRef(BaseForm);
const Form = BaseForm;
Form.Field = Field;
Form.useForm = useForm;

export default Form;
