// iterator - object with a next method

// Example 1 (next)

export const company = {
    currEmployee: 0,
    employees: ['Donna', 'Thelma', 'Laura'],
    next() { //makes company object iterable. returns an object with a value property and a done property
        if (this.currEmployee >= this.employees.length){
            return {value: this.currEmployee, done: true} // signals when out of employees. sets done to true
        }
        const returnValue =  {value: this.employees[this.currEmployee], done: false};
        this.currEmployee++;
        return returnValue;
    }
}

// console.log(company.next())
// console.log(company.next())
// console.log(company.next())
// console.log(company.next())