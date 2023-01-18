let a = {}
let b = {}

a == b   // false


let a = { name: "Ok" }
let c = "Ok";
let b = { name: "Ok" }

a === c    //false
a === b  //false

null == undefined    //true


let a = {
  name: "ok",
  obj1: { d: true, b: 'hi', c: {}, d: [] }
}
let b = { ...a }

console.log(a, b)      /// ({},name: "ok", obj1: {})

a == b      // false 
a.name == b.name   // true //true
a.obj1 == b.obj1  //true
a.obj1.d === b.obj1.d  //true


let a = { person: { name: "Ok" } }
let b = { person: { name: "Ok" } }
let c = a;
a.person.name = 'Karan';

console.log(b.person.name);
console.log(c.person.name);
a.person == b.person
a.person === b.person


let a = { person: { name: "Ok" }, name: 'abc' }
let b = JSON.parse(JSON.stringfy(a))

a == b   //false 
a.person == b.person    //false
a.person === b.person     //false
a.person.name == b.person.name  //true 