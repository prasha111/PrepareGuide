const testObj = {
    foo: console.log,
    bar: function() {
      return this;
    },
    baz: () => this === globalThis,
    self: this
  };
  
  
  // Predict the output
  console.log("foo  → ", this); 
  console.log("bar  → ", testObj.bar());
  console.log("baz  → ", testObj.baz());
  console.log("self → ", testObj.self);