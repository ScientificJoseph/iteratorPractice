// iterator - object with a next method

const company = {
    currEmployee: 0,
    employees: ['Donna', 'Thelma', 'Laura'],
    next() {
        if (this.currEmployee >= this.employees.length){
            return {value: this.currEmployee, done: true}
        }
        const returnValue =  {value: this.employees[this.currEmployee], done: false};
        this.currEmployee++;
        return returnValue;
    }
}

console.log(company.next())
console.log(company.next())
console.log(company.next())
console.log(company.next())