class Commitment {
  static PENDING = "待定";
  static FULFILLED = "成功";
  static REJECTED = "拒绝";
  private status: "PENDING" | "FULFILLED" | "REJECTED";
  private result: any;
  private resolveCallbacks: any[];
  private rejectCallbacks: any[];
  constructor(
    func: (
      resolve: (value: any) => void,
      reject: (reason?: any) => void
    ) => void
  ) {
    this.status = "PENDING";
    this.result = undefined;
    this.resolveCallbacks = [];
    this.rejectCallbacks = [];
    try {
      func(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
      this.reject(e);
    }
  }
  resolve(value: any) {
    // setTimeout(() => {
    //   if (this.status === "PENDING") {
    //     this.status = "FULFILLED";
    //     this.result = value;
    //     this.resolveCallbacks.forEach(callback => {
    //       callback(value);
    //     });
    //   }
    // });
    if (this.status === "PENDING") {
      this.status = "FULFILLED";
      this.result = value;
    }
  }
  reject(reason?: any) {
    // setTimeout(() => {
    //   if (this.status === "PENDING") {
    //     this.status = "REJECTED";
    //     this.result = reason;
    //     this.rejectCallbacks.forEach(callback => {
    //       callback(reason);
    //     });
    //   }
    // });
    if (this.status === "PENDING") {
      this.status = "REJECTED";
      this.result = reason;
    }
  }
  then(onfulfilled?: (value: any) => void, onrejected?: (reason: any) => void) {
    // console.log(this.status);
    // if (this.status === "FULFILLED" && onfulfilled) {
    //   setTimeout(() => {
    //     onfulfilled(this.result);
    //   });
    // }
    // if (this.status === "REJECTED" && onrejected) {
    //   setTimeout(() => {
    //     onrejected(this.result);
    //   });
    // }
    // console.log(this, onfulfilled, onrejected);
    return new Commitment((resolve, reject) => {
      // console.log(this);
      setTimeout(() => {
        // console.log(this);
        // if (this.status === "PENDING") {
        //   this.resolveCallbacks.push(onfulfilled);
        //   this.rejectCallbacks.push(onrejected);
        // }
        let res: any;
        if (this.status === "FULFILLED" && onfulfilled) {
          res = onfulfilled(this.result);
        }
        if (this.status === "REJECTED" && onrejected) {
          res = onrejected(this.result);
        }
        if (this.status === "FULFILLED" && resolve) {
          resolve(res);
        }
        if (this.status === "REJECTED" && reject) {
          reject(res);
        }
      });
    });
  }
}

console.log(1);
const commitment = new Commitment((resolve, reject) => {
  console.log(2);
  setTimeout(() => {
    resolve("这次一定");
    console.log(4);
  });
  // throw new Error("白嫖不成功");
});
// console.log(commitment);
commitment
  .then(
    (value) => {
      console.log(value);
      // return value;
    },
    (reason) => {
      console.log(reason);
    }
  )
  .then(
    (value) => {
      console.log(value);
      return "ddd";
    },
    (reason) => {
      console.log(reason);
    }
  )
  .then(
    (value) => {
      console.log(value);
    },
    (reason) => {
      console.log(reason);
    }
  )
  .then(
    (value) => {
      console.log(value);
    },
    (reason) => {
      console.log(reason);
    }
  );
console.log(3);

export {};
