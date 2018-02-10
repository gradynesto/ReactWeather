var names = ['Andrew', 'Eli', 'Tommy'];

// names.forEach(function (name) {
//     console.log('forEach', name);
// });

// names.forEach((name) =>{
//     console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));


// var returnMe = (name) => name + '!';

// console.log(returnMe('Ernie'));

// var person = {
//     name: 'Ernie',
//     greet: function () {
//         names.forEach((name)=> {
//             console.log(this.name + ' says hi to ' + name)            
//         });
//     }
// }

// person.greet();

// Challenge Area

function add(a, b) {
    return a + b;
}

console.log(add(1,3));
console.log(add(9,0));
 
//addStatement
var addStatement = (a,b) => {
    return a + b;
}

console.log(addStatement(4,7));

// addExpression
var addMe = (a,b) => a + b;

console.log(addMe(3,-2));


// names.forEach((name) =>{
//     console.log('arrowFunc', name);
// });
