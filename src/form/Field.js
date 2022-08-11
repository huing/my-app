import FieldContext from "./FieldContext";
import React, { Component } from "react";

export default class Field extends Component {
  static contextType = FieldContext;
  componentDidMount() {
    this.context.registerFieldEntity(this);
  }
  onStoreChange = () => {
    this.forceUpdate();
  };
  getControlled = () => {
    const { getFieldValue, setFieldsValue } = this.context;
    const { name } = this.props;
    return {
      value: getFieldValue(name),
      onChange: (e) => {
        const newValue = e.target.value;
        setFieldsValue({ [name]: newValue });
      },
    };
  };
  render() {
    const returnChildNode = React.cloneElement(
      this.props.children,
      this.getControlled()
    );
    return returnChildNode;
  }
}
