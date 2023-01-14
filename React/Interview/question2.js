// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo,);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
//
function areTheNumbersAlmostEqual(num1, num2) {
	return Math.abs( num1 - num2 ) < Number.EPSILON;
}
console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));
console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));
//
var a={},
    b={key:'b'},
    c={key:'c'};

a.b=123;
a[c]=456;

console.log(a[b], a);
//
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};


var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

//

var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);

//

(function () {
    var x, y; // outer and hoisted
    try {
        throw new Error();
    } catch (x /* inner */) {
        x = 1; // inner x, not the outer one
        y = 2; // there is only one y, which is in the outer scope
        console.log(x, /* inner */);
    }
    console.log(x);
    console.log(y);
})();

//
for (var i = 0; i < 5; i++) {
	setTimeout(function() { console.log(i); }, i * 1000 );
}
//
for (let i = 0; i < 5; i++) {
	setTimeout(function() { console.log(i); }, i * 1000 );
}
//

//console.log(NaN === NaN);
//


var obj = {a:1};
var secondObj = obj;
secondObj.a = 2;

console.log(obj);
console.log(secondObj);

var obj = {a:1};
var secondObj = obj;
secondObj = {a:2};

console.log(obj);
console.log(secondObj);

//
const arrTest = [10, 20, 30, 40, 50][1, 3];
console.log(arrTest);

//

var a = 3;
var b = {
  a: 9,
  b: ++a
};
console.log(a, b,a, a + b.a + ++b.b,  "checking");



/////

let obj1 = {
    x: 2,
    getX: function() {
        setTimeout(() => console.log('a'), 0);
        new Promise( res =>  res(1)).then(v => console.log(v));
        setTimeout(() => console.log('b'), 0);
    }
}

obj1.getX();









console.log("Welcome to Programiz!");