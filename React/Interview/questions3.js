
let obj = {
    x: 2,
    getX: function() {
        setTimeout(() => console.log('a'), 0);
        new Promise( res =>  res(1)).then(v => console.log(v));
        setTimeout(() => console.log('b'), 0);
    }
}

//obj.getX();
console.log(1, "first")
//
new Promise(res =>  res(1)).then(v => console.log(v, "2"));
new Promise((resolve,reject)=>{
    console.log("initialised")
    resolve=>resolve(1)
}).then((passed)=>{console.log(passed)})

console.log("3")


//
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());