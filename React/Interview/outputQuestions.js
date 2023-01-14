let x = 5;
let obj = {
    x: 2,
    getX: function(){
        let x = 10;
        console.log(this.x);
    }
}

let y = obj.getX;
y(); (3)
 

 //q1

// let obj = {
//     x: 2,
//     getX: function() {
//         console.log(this.x);
//     }
// }

// obj.getX(); (1)
 // q2
// let x = 5;
// let obj = {
//     x: 2,
//     getX:() => {
//         console.log(this.x)
//     }
// }

// obj.getX(); (2)


//q3
// let x = 5;
// let obj = {
//     x: 2,
//     getX: function(){
//         let x = 10;
//         console.log(this.x);
//     }
// }

// let y = obj.getX;
// y(); (3)