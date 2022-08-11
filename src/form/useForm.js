import { useEffect, useRef } from "react";

// type Store = Record<string, any>;
class FormStore {
  // store: Store;
  constructor() {
    this.store = {};
    this.fieldEntities = [];
    this.callbacks = {};
  }
  setCallbacks = (newCallbacks) => {
    this.callbacks = { ...this.callbacks, ...newCallbacks };
  };
  registerFieldEntity = (entity) => {
    this.fieldEntities.push(entity);
    return () => {
      this.fieldEntities = this.fieldEntities.filter((_en) => entity !== _en);
      delete this.store[entity.props.name];
    };
  };
  // 获取所有值
  getFieldsValues = () => {
    return this.store;
  };
  // 获取数据
  getFieldValue = (name) => {
    return this.store[name];
  };
  // 存值 params: {key: value}
  setFieldsValue = (params) => {
    this.store = {
      ...this.store,
      ...params,
    };
    // this.fieldEntities.forEach((entity) => {
    //   entity.onStoreChange();
    // });
    console.log(params, this.store);
  };
  getForm = () => {
    return {
      getFieldValue: this.getFieldValue,
      getFieldsValues: this.getFieldsValues,
      setFieldsValue: this.setFieldsValue,
      registerFieldEntity: this.registerFieldEntity,
    };
  };
}
const useForm = (form) => {
  const formRef = useRef(null);
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      const formStore = new FormStore();
      formRef.current = formStore.getForm();
    }
  }
  return [formRef.current];
};

export default useForm;
