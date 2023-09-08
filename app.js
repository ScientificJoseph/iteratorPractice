// iterator - object with a next method

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

const company = {
    currEmployee: 0,
    employees: ['Donna', 'Thelma', 'Laura'],
    next() { //makes company object iterable. returns an object with a value property and a done property
        if (this.currEmployee >= this.employees.length){
            return {
                value: this.currEmployee, 
                done: true // signals when out of employees. sets done to true
            } 
        }
        const returnValue =  {
            value: this.employees[this.currEmployee], 
            done: false // sinals that their are still employees. sets done to false
        }; 
        this.currEmployee++;
        // console.log(returnValue)
        return returnValue;
    }
}

let employee = company.next()

while(!employee.done) { // negates done: false to !false returning true to enter the loop and negates done: true to !true returning false to not enter the loop
    // console.log(!employee.done)
    console.log(company.currEmployee, employee.value, employee);
    employee = company.next()
}