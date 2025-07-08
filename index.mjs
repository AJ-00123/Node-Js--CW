// // // console.log("Hello, World! Arpan jain")
// // // // node --watch .\index.js automatic restart code


// // // import os from 'os'; 
// // // console.log("Hello, World! Arpan jain");

// // // const os=require('os');
// // // console.log(os.version());

// // // import taking from './module/add.mjs';
// // // // const taking = require('./module/add.mjs');
// // // console.log(taking.title)
// // // console.log(taking.msg);
// // // console.log(taking.subtitle);


// // import { title, subtitle } from './module/add.mjs';
// // console.log(title,subtitle);

// // exports.msg = "hello i'm module"
// // exports.title = "W3grads with GLA"
// // exports.subtitle = "This is learning platform"
 
// export const title = "this is title"
// export const subtitle = "this is subtitle"
 
// import {title, subtitle} from './module/add.mjs'
 
 
// console.log(title, subtitle)
 
// import * as taking  from './module/add.mjs'
 
 
// console.log(taking.title)
// console.log(taking.subtitle7)
// console.log(taking.subtitle1)
// console.log(taking.subtitle2)
 

import { add } from './module/add.mjs'; // Importing the add function from the module
import { sub } from './module/sub.mjs'; // Importing the sub function from the module
import { mul } from './module/mul.mjs'; // Importing the mul function from the module
import { div } from './module/div.mjs'; // Importing the mul function from the module


console.log(add(12, 10)); // Using the add function to add two numbers and log the result
console.log(sub(12, 10)); // Using the Sub function to add two numbers and log the result
console.log(mul(12, 10)); // Using the Mul function to add two numbers and log the result
console.log(div(12, 10)); // Using the Div function to add two numbers and log the result