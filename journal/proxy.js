var obj = new Proxy(
  {},
  {
    get: function (target, propKey, receiver) {
      console.log(`getting ${propKey}!`);
      return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
      console.log(`setting ${propKey}!`);
      return Reflect.set(target, propKey, value, receiver);
    },
  }
);

obj.count = 1;
++obj.count;

var proxy = new Proxy(
  {},
  {
    get: function (target, propKey) {
      return 35;
    },
  }
);

let obj1 = Object.create(proxy);
obj1.time; // 35

console.log(obj1);
