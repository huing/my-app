// import Form, { Field } from "rc-field-form";
// import React from "react";
// const Input = ({ value = "", ...props }) => <input value={value} {...props} />;
import Form from "./Form";
import Field from "./Field";
// import useForm from "./useForm";

const RCFieldForm = () => {
  const [form] = Form.useForm();
  // let a: string;
  // a = 'sss' as string;
  //  a = <string> 'aaa';
  return (
    <Form
      form={form}
      onFinish={(values) => {
        console.log("Finish:", values);
      }}
    >
      <Field name="username">
        <input />
        {/* <Input placeholder="Username" /> */}
      </Field>
      <Field name="password">
        <input />
        {/* <Input placeholder="Password" /> */}
      </Field>

      <button>Submit</button>
    </Form>
  );
};

export default RCFieldForm;
