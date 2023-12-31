// import { word } from "./text.js";
// // import { company } from './iteratorEx.js'
// word()
// console.log(company.next())
// console.log(company.next())
// console.log(company.next())
// console.log(company.next())

const word = (() =>{
    const text = document.createTextNode('Hello World');
    const h1 = document.createElement('h1');
    h1.appendChild(text);
    document.body.appendChild(h1);
    h1.style.textAlign = 'center';
})
word()

// iterator - object with a next method

// Example 1 (next)

// const company = {
//     currEmployee: 0,
//     employees: ['Donna', 'Thelma', 'Laura'],
//     next() { //makes company object iterable. returns an object with a value property and a done property
//         if (this.currEmployee >= this.employees.length){
//             return {value: this.currEmployee, done: true} // signals when out of employees. sets done to true
//         }
//         const returnValue =  {value: this.employees[this.currEmployee], done: false};
//         this.currEmployee++;
//         return returnValue;
//     }
// }

// console.log(company.next())
// console.log(company.next())
// console.log(company.next())
// console.log(company.next())

// Example 2 (next with while loop)

const company = {
    currEmployee: 0, //incrimented and used as a condition for the loop
    employees: ['Donna', 'Thelma', 'Laura'],
    next() { //makes company object iterable. returns an object with a value property and a done property
        if (this.currEmployee >= this.employees.length){
            return {
                value: this.currEmployee, //ivalue of iterator
                done: true // signals when out of employees. sets done to true which will be negated to false on evaluation in the while loop conditional check
            } 
        }
        const returnValue =  {
            value: this.employees[this.currEmployee], //employee at the time the value of iterator is incrimented
            done: false // signals that their are still employees. sets done to false which will be negated to true on evaluation in the while loop conditional check
        }; 
        this.currEmployee++;
        return returnValue;
    }
}
let employee = company.next() //while loop adds looping logic to next method
while(!employee.done) { // negates done: false to !false returning true to enter the loop and negates done: true to !true returning false to not enter the loop
    // console.log(!employee.done)
    console.log(company.currEmployee, employee.value, employee);
    const indy = company.employees.forEach((ele, index) =>{
        // console.log(`${ele}'s index is ${index} and the incrimenters value is ${company.currEmployee}`)
    })
    employee = company.next()
}


//Example 3 (Symbol.iterator)

// const company = {
//     currEmployee: 0,
//     employees: ['Donna', 'Thelma', 'Laura'],
//     next() { //makes company object iterable. returns an object with a value property and a done property
//         if (this.currEmployee >= this.employees.length){
//             return {
//                 value: this.currEmployee, 
//                 done: true // signals when out of employees. sets done to true
//             } 
//         }
//         const returnValue =  {
//             value: this.employees[this.currEmployee], 
//             done: false // sinals that their are still employees. sets done to false
//         }; 
//         this.currEmployee++;
//         // console.log(returnValue)
//         return returnValue;
//     },
//     // Symbol.iterator value has to be an iterator (object with a next method)
//     [Symbol.iterator]: function* emplyoyeeGenerator() { // function* is a generator. it builds an iterator object (has a next methood)
//         // let employee = company.next() //while loop adds looping logic
//         //     while(!employee.done) { // negates done: false to !false returning true to enter the loop and negates done: true to !true returning false to not enter the loop
//         //         yield employee.value;
//         //         employee = company.next()
//         // }

//         let currentEmployee = 0;
//         while(currentEmployee < this.employees.length) {
//             yield this.employees[currentEmployee]; // returns whats after yield keyword as a  resulet of Generator call. Works with Generator
//         }
//     }
// }

// // for (const employee of company) {
// //     console.log(employee)
// // }

// Example 4 (without Symbol.iterator (uses getEmployee instead))

// const company = {
//     currEmployee: 0,
//     employees: ['Donna', 'Thelma', 'Laura'],
//     // next() { //makes company object iterable. returns an object with a value property and a done property
//     //     if (this.currEmployee >= this.employees.length){
//     //         return {
//     //             value: this.currEmployee, 
//     //             done: true // signals when out of employees. sets done to true
//     //         } 
//     //     }
//     //     const returnValue =  {
//     //         value: this.employees[this.currEmployee], 
//     //         done: false // sinals that their are still employees. sets done to false
//     //     }; 
//     //     this.currEmployee++;
//     //     // console.log(returnValue)
//     //     return returnValue;
//     // },
//     // Symbol.iterator value has to be an iterator (object with a next method)
//     getEmployee: function* emplyoyeeGenerator() { // function* is a generator. it builds an iterator object (has a next methood)
//             //let employee = company.next() //while loop adds looping logic
//             //  while(!employee.done) { // negates done: false to !false returning true to enter the loop and negates done: true to !true returning false to not enter the loop
//             //         yield employee.value;
//             //         employee = company.next()
//             // }
//         let currentEmployee = 0;
//         while(currentEmployee < this.employees.length) {
//             yield this.employees[currentEmployee]; // returns whats after yield keyword as a  resulet of Generator call. Works with Generator
//         }
//     }
// }

// // for (const employee of company) {
// //     console.log(employee)
// // }

// console.log(company.getEmployee().next()); // calls next on the getEmployee function because it returns an object with a next method that has to be called on getEmployee's yield
// console.log(company.getEmployee().next()); // calls next on the getEmployee function because it returns an object with a next method that has to be called on getEmployee's yield
// console.log(company.getEmployee().next()); // calls next on the getEmployee function because it returns an object with a next method that has to be called on getEmployee's yield
// console.log(company.getEmployee().next()); // calls next on the getEmployee function because it returns an object with a next method that has to be called on getEmployee's yield
// console.log(company.getEmployee().next()); // calls next on the getEmployee function because it returns an object with a next method that has to be called on getEmployee's yield

// Example 5

// const company = {
//     currEmployee: 0,
//     employees: ['Donna', 'Thelma', 'Laura'],
//     // next() { //makes company object iterable. returns an object with a value property and a done property
//     //     if (this.currEmployee >= this.employees.length){
//     //         return {
//     //             value: this.currEmployee, 
//     //             done: true // signals when out of employees. sets done to true
//     //         } 
//     //     }
//     //     const returnValue =  {
//     //         value: this.employees[this.currEmployee], 
//     //         done: false // sinals that their are still employees. sets done to false
//     //     }; 
//     //     this.currEmployee++;
//     //     // console.log(returnValue)
//     //     return returnValue;
//     // },
//     // Symbol.iterator value has to be an iterator (object with a next method)
//     getEmployee: function* emplyoyeeGenerator() { // function* is a generator. it builds an iterator object (has a next methood)
//             //let employee = company.next() //while loop adds looping logic
//             //  while(!employee.done) { // negates done: false to !false returning true to enter the loop and negates done: true to !true returning false to not enter the loop
//             //         yield employee.value;
//             //         employee = company.next()
//             // }
//         let currentEmployee = 0;
//         while(currentEmployee < this.employees.length) {
//             yield this.employees[currentEmployee]; // when yield is encountered JS saves the current state of exe and the next time the next() is called it continues from that point
//             currentEmployee++;
//         }
//     }
// }

// const it = company.getEmployee();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// for (const employee of company) {
//     console.log(employee)
// }

// Example 6 (with Symbol.iterator and for of loop)

// const company = {
//     currEmployee: 0,
//     employees: ['Donna', 'Thelma', 'Laura'],
//     // next() { //makes company object iterable. returns an object with a value property and a done property
//     //     if (this.currEmployee >= this.employees.length){
//     //         return {
//     //             value: this.currEmployee, 
//     //             done: true // signals when out of employees. sets done to true
//     //         } 
//     //     }
//     //     const returnValue =  {
//     //         value: this.employees[this.currEmployee], 
//     //         done: false // sinals that their are still employees. sets done to false
//     //     }; 
//     //     this.currEmployee++;
//     //     // console.log(returnValue)
//     //     return returnValue;
//     // },
//     // Symbol.iterator value has to be an iterator (object with a next method)
//     [Symbol.iterator]: function* emplyoyeeGenerator() { // function* is a generator. it builds an iterator object (has a next methood)
//             //let employee = company.next() //while loop adds looping logic
//             //  while(!employee.done) { // negates done: false to !false returning true to enter the loop and negates done: true to !true returning false to not enter the loop
//             //         yield employee.value;
//             //         employee = company.next()
//             // }
//         let currentEmployee = 0;
//         while(currentEmployee < this.employees.length) {
//             yield this.employees[currentEmployee]; // when yield is encountered JS saves the current state of exe and the next time the next() is called it continues from that point
//             currentEmployee++;
//         }
//     }
// }

// for (const employee of company) { // for of loop iterates therough object(company) being looped through and searches for Symbol.iterator then executes the function if finds which should be a Generator. Executes next as long as done is not true
//     console.log(employee);
// }
// let ride = [...company]// spread operator looks for Symbol.iterator then goes through all of the values and adds them as elements of array
// console.log(ride) 

// Example 7 ()

// const company = {
//     currEmployee: 0,
//     employees: ['Donna', 'Thelma', 'Laura'],
//     // next() { //makes company object iterable. returns an object with a value property and a done property
//     //     if (this.currEmployee >= this.employees.length){
//     //         return {
//     //             value: this.currEmployee, 
//     //             done: true // signals when out of employees. sets done to true
//     //         } 
//     //     }
//     //     const returnValue =  {
//     //         value: this.employees[this.currEmployee], 
//     //         done: false // sinals that their are still employees. sets done to false
//     //     }; 
//     //     this.currEmployee++;
//     //     // console.log(returnValue)
//     //     return returnValue;
//     // },
//     // Symbol.iterator value has to be an iterator (object with a next method)
//     [Symbol.iterator]: function* emplyoyeeGenerator() { // function* is a generator. it builds an iterator object (has a next methood)
//             //let employee = company.next() //while loop adds looping logic
//             //  while(!employee.done) { // negates done: false to !false returning true to enter the loop and negates done: true to !true returning false to not enter the loop
//             //         yield employee.value;
//             //         employee = company.next()
//             // }
//         let currentEmployee = 0;
//         while(currentEmployee < this.employees.length) {
//             yield this.employees[currentEmployee]; // when yield is encountered JS saves the current state of exe and the next time the next() is called it continues from that point
//             currentEmployee++;
//         }
//     }
// }

// for (const employee of company) { // for of loop iterates therough object(company) being looped through and searches for Symbol.iterator then executes the function if finds which should be a Generator. Executes next as long as done is not true
//     console.log(employee);
// }
// let ride = [...company]// spread operator looks for Symbol.iterator then goes through all of the values and adds them as elements of array
// console.log(ride) 

// const djs = ['Tray', 'Swift'];//array is simply an object with the Symbol(Symbol.iterator): ƒ values(). which is a generator function that yields an iterator object with next(). The length property of th array in tandem with the Genrator help control what values are return from the array
// console.log(djs)

// !!! The Eeflect API !!!

// const course = {
//     title: 'JavaScript - The Complete Guide'
// };

// Reflect.setPrototypeOf(course, {
//     toString() {
//         return this.title;
//     }
// })

// console.log('Onject property before deleteProperty- ', course.toString())

// Reflect.deleteProperty(course, 'title'); // The Reflect API offers a deleteProperty method

// // Object.deleteProperty(course, 'title') // The Object API does not have a deleteProperty method 

// // delete course.title; //the traditional way to a delete an Objects property. 

// console.log('Onject property after deleteProperty- ',course)

// !!! The Proxy API (get trap) !!!

// const course = {
//     title: 'JavaScript - The Complete Guide'
// };

// Reflect.setPrototypeOf(course, {
//     toString() {
//         return this.title;
//     }
// })

// // console.log('Onject property before deleteProperty- ', course.toString())
// // Reflect.deleteProperty(course, 'title'); // The Reflect API offers a deleteProperty method
// // Object.deleteProperty(course, 'title') // The Object API does not have a deleteProperty method 
// // delete course.title; //the traditional way to a delete an Objects property. 
// // console.log('Onject property after deleteProperty- ',course)
// console.log(course)

// const courseHandler = {
//     get(obj, propertyName) { //handler is executed when someone tries to read/access a value from the wrapped object. takes 2 args, the wrapped obj and the property name in the obj being accessed
//         console.log(propertyName); // logs property key being accessed
//         // return obj[propertyName]; //defines what the get trap returns. here it returns the value in the poperty being accessed
//         // return 'Traped cha boyee' // can return anything if access on property is attempted
//         if (propertyName === 'length') { // action for access attemt on a specific property key 
//             return 0;
//         }
//         return obj[propertyName] || '- Not Found'; // if an attempt is made on a property that does not exist

//     }
// }

// const pCourse = new Proxy(course, courseHandler) // instantiates the Proxy Object and creates a new Proxy Object. constructor takes 2 args- the object where the proxy will be applied as an argument and wraps around it. and also takes a hadler object that the custom behavior of the proxy
// // console.log(pCourse.title);
// // console.log(course, pCourse)
// console.log(pCourse.title, pCourse.length, pCourse.rating)//read attemps on Proxy Object pCourse


// !!! The Proxy API (set trap) !!!

const course = {
    title: 'JavaScript - The Complete Guide'
};

Reflect.setPrototypeOf(course, {
    toString() {
        return this.title;
    }
})

// console.log('Onject property before deleteProperty- ', course.toString())
// Reflect.deleteProperty(course, 'title'); // The Reflect API offers a deleteProperty method
// Object.deleteProperty(course, 'title') // The Object API does not have a deleteProperty method 
// delete course.title; //the traditional way to a delete an Objects property. 
// console.log('Onject property after deleteProperty- ',course)
console.log(course)

const courseHandler = {
    get(obj, propertyName) { //handler is executed when someone tries to read/access a value from the wrapped object. takes 2 args, the wrapped obj and the property name in the obj being accessed
        console.log(propertyName); // logs property key being accessed
        // return obj[propertyName]; //defines what the get trap returns. here it returns the value in the poperty being accessed
        // return 'Traped cha boyee' // can return anything if access on property is attempted
        if (propertyName === 'length') { // action for access attemt on a specific property key 
            return 0;
        }
        return obj[propertyName] || '- Not Found' // if an attempt is made on a property that does not exist
    },
    // set(obj, propertyName, newValue) 
    set(obj, propertyName, newValue) { // takes 3 args. used to validate, lock down, or forward to set value
        console.log('Setting Data...')
        if (propertyName === 'rating') { // blocks access to setting rating property by returning
            return;
        }
        obj[propertyName] = newValue; // sets new property value
    }
}

const pCourse = new Proxy(course, courseHandler); // instantiates the Proxy Object and creates a new Proxy Object. constructor takes 2 args- the object where the proxy will be applied as an argument and wraps around it. and also takes a hadler object that the custom behavior of the proxy
// console.log(pCourse.title);
// console.log(course, pCourse)
pCourse.rating = 5;
console.log(pCourse.title, pCourse.length, pCourse.rating)//read attemps on Proxy Object pCourse

