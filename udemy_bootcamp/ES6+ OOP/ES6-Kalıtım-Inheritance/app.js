// ES6 ile Inheritance

// function Person(name,age){
//     this.name=name;
//     this.age=age
// }

// Person.prototype.showInfos=function(){
//     console.log('İsim: '+this.name+' Yaş: '+this.age)
// }

// function Employee(name,age,salary){
//     Person.call(this,name,age); 
//     this.salary=salary;
// }

// Employee.prototype=Object.create(Person.prototype);
// Employee.prototype.toString=function(){
//     console.log('Employee');
// }

// // Overriding=İptal etme
// Employee.prototype.showInfos=function(){
//     console.log('İsim: '+this.name+' Yaş: '+this.age+' Maaş: '+this.salary)
// }
// const emp=new Employee('Harun',28,3000);
// console.log(emp);

class Person{ // Superclass-Baseclass (üstsınıf-temel sınıf)
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showInfos(){
     console.log('İsim: '+this.name+' Yaş: '+this.age)

    }
}

class Employee extends Person{ // DerivedClass(altsınıf),childClass
    constructor(name,age,salary){
        // this.name=name;
        // this.age=age;
        super(name,age);
        this.salary=salary;
    }
    showInfos(){ //overriding
    console.log('İsim: '+this.name+' Yaş: '+this.age+' Maaş: '+this.salary)

    }
    toString(){ //Overriding
        console.log('Employee');
    }
    raiseSalary(amount){ // ekstra metod
        this.salary+=amount;
    }
}

const emp=new Employee('harun',28,4000)
emp.raiseSalary(500);
console.log(emp);

emp.showInfos();
emp.toString();



