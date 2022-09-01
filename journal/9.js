const obj = {
  bar: function () {
    return () => {
      // console.log(this);
      return this;
    };
  },
};
obj.bar()();
const f = obj.bar;
f()();

const obj1 = {
  bar: function () {
    return function () {
      // console.log(this);
      return this;
    };
  },
};
obj1.bar()();
const f1 = obj1.bar;
f1()();

const obj2 = {
  bar: function () {
    // console.log(this);
    // const x = () => {
    //   console.log("x", this);
    // };
    // const y = function () {
    //   console.log("y", this);
    // };
    return {
      x: () => {
        // console.log("x", this);
      },
      y: function () {
        // console.log("y", this);
      },
    };
  },
};

const obj3 = {
  bar: function () {
    return {
      x: () => {
        // console.log("x", this);
      },
      y: function () {
        // console.log("y", this);
      },
    };
  },
};
