// ES6 NEdir? Class'lar -Synactic Sugar-Statik Metodlar

// function Employee(name,age,salary){
//     this.name=name;
//     this.age=age;
//     this.salary=salary;
// }

// Employee.prototype.showInfos=function(){
//     console.log('İsim: '+this.name+' Yaş: '+this.age+' Maaş: '+this.salary)
// }

// const emp=new Employee('Harun',28,4000);
// console.log(emp);


//       Class      // 

// class Employee{
// constructor(name,age,salary){
//     this.name=name;
//     this.age=age;
//     this.salary=salary;
// }
// showInfos(){
//  console.log('İsim: '+this.name+' Yaş: '+this.age+' Maaş: '+this.salary)

// }
// }

// const emp=new Employee('Harun',28,4000);
// console.log(emp);

// emp.showInfos();

// Statik Metodlar  // 

// Durağan metodlardır. Eğer biz classlarımız içerisine statik metodlarımızı yazarsak burdan bir obje oluşturmasak dahi bunları kullanabiliyoruz.

// Obje oluşturduk 

// class Matematik{
//     cube(x){
//         console.log(x*x*x)
//     }
// }

// const math= new Matematik();
// math.cube(3);
// console.log(math);


// Obje oluşturmadan -static  // Object.create ; Math.sqrt();

class Matematik{
    sqrt(x){
        console.log(x*x)
    }
    static cube(x){
        console.log(x*x*x)
    }
}

Matematik.cube(3);

// Bu durumda Obje üzerinden kullanılamaz , çünkü static olarak yazılan metodlar class ın prototype yazılmıyor

const math=new Matematik();
math.sqrt(4);

