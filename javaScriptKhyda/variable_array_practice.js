
var tvShow = 'Common Side Effects';
var funGuy  =['Golden Teachers','Penis Envy','Blue Albino'];

var medz = '30mg'
medz = '40mg';
console.log(medz); // I reassigned the value for medz, so 40mg will print

var dom = 'front end';
var dom = 'document object model';
console.log(dom); // I redeclared dom and assigned a different value, so the second value will print


// let can't be redeclared
// let iPhone = 13; 
// let iPhone = 16e; 
// but it can be reassigned (new value)
let iPhone = 'SE2';
iPhone = 13;
console.log(iPhone); // this will print 13


const headphones = 'Airpods';
// const headphones ='Beats';      // const can't be redeclared
// headphones = 'JBL';             // const can't be reassigned
const movies = ['Antwone Fisher','Taking of Pelham 123','Dejavu'];
console.log(headphones); // Airpods
console.log(movies);     // ['Antwone Fisher','Taking of Pelham 123','Dejavu']