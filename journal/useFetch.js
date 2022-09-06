import { useEffect, useLayoutEffect, useRef, useState } from "react";

const useCallbackRef = (callback) => {
  const savedOnSuccess = useRef(callback);
  useLayoutEffect(() => {
    savedOnSuccess.current = callback;
  }, [callback]);
  return savedOnSuccess;
};

export const useFetch = (options) => {
  const [data, setData] = useState(null);

  // const savedOnSuccess = useRef(options.onSuccess);
  // useLayoutEffect(() => {
  //   savedOnSuccess.current = options.onSuccess;
  // }, [options.onSuccess]);

  const savedOnSuccess = useCallbackRef(options.onSuccess);

  useEffect(() => {
    console.log("useFetch useEffect");
    if (options.url) {
      fetch(options.url)
        .then((response) => response.json())
        .then((json) => {
          // options.onSuccess?.();
          savedOnSuccess.current?.();
          setData(json);
        });
    }
    //  如果用值引用可以写options
    // }, [options]);
    //  也可以单独写 options.url, 基础值相等
  }, [options.url]);

  return {
    data,
  };
};

const obj = { a: 1 };

const depCompare = (oldDeps, newDeps) =>
  oldDeps.length === newDeps.length &&
  oldDeps.every((dep, i) => dep === newDeps[i]);

depCompare([obj], [obj]);
