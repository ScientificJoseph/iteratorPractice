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

// Example 2 (next with loop)

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
//     }
// }

// let employee = company.next() //while loop adds looping logic to next method
// while(!employee.done) { // negates done: false to !false returning true to enter the loop and negates done: true to !true returning false to not enter the loop
//     // console.log(!employee.done)
//     console.log(company.currEmployee, employee.value, employee);
//     employee = company.next()
// }

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

const company = {
    currEmployee: 0,
    employees: ['Donna', 'Thelma', 'Laura'],
    // next() { //makes company object iterable. returns an object with a value property and a done property
    //     if (this.currEmployee >= this.employees.length){
    //         return {
    //             value: this.currEmployee, 
    //             done: true // signals when out of employees. sets done to true
    //         } 
    //     }
    //     const returnValue =  {
    //         value: this.employees[this.currEmployee], 
    //         done: false // sinals that their are still employees. sets done to false
    //     }; 
    //     this.currEmployee++;
    //     // console.log(returnValue)
    //     return returnValue;
    // },
    // Symbol.iterator value has to be an iterator (object with a next method)
    [Symbol.iterator]: function* emplyoyeeGenerator() { // function* is a generator. it builds an iterator object (has a next methood)
            //let employee = company.next() //while loop adds looping logic
            //  while(!employee.done) { // negates done: false to !false returning true to enter the loop and negates done: true to !true returning false to not enter the loop
            //         yield employee.value;
            //         employee = company.next()
            // }
        let currentEmployee = 0;
        while(currentEmployee < this.employees.length) {
            yield this.employees[currentEmployee]; // when yield is encountered JS saves the current state of exe and the next time the next() is called it continues from that point
            currentEmployee++;
        }
    }
}



for (const employee of company) { // for of loop goes therough onject(complany) being looped through and searches for Symbol.iterator then executes the function if finds which should be a Generator. Executes next as long as done is not true
    console.log(employee);
}