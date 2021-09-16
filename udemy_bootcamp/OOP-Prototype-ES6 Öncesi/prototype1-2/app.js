// Prototype
// Diğer programlama dillerinde objeler class tabanlı oluşturulmaktadır. Fakat JS objeler prototype tabanlı oluş.

// const object= new Object(); // object literal
// const object2=new Object();
// object.name='HArun';

// console.log(object);
// console.log(object2);

// Burada her iki objemizin içine göndereceğimiz aynı metodları prototype içinde tek sefer yazarak sağlayabiliriz.

// function Employee(name,age){
//     this.name=name;
//     this.age=age;
//     this.showInfos=()=>console.log('Bilgiler Gösteriliyor...');
// }

// const emp1=new Employee('HArun',28);
// console.log(emp1);

// console.log(emp1.toString());

// Burada Employee prototype içinde bir constructor bulunmakla beraber temel objenınde miras olarak geldiğini görüyoruz.

// Prototype objeler arası kalıtımı sağlar. Ve miras olarak metodların ve özelliklerin geçişini sağlar

function Employee(name,age){
    this.name=name;
    this.age=age;
   
}
Employee.prototype.showInfos= function(){console.log('İsim: '+ this.name  +  ' Yaş: '+this.age)};



const emp1=new Employee('Harun',28);
const emp2=new Employee('Doruk',1);

emp1.showInfos();
console.log(emp1);
console.log(emp2);

// emp1.showInfos(); // bu showInfos u _proto_ içindeki constructor prototype içine yazmamız gerekiyor 
// emp2.showInfos();
// Bizler objelerimiz içerisindeki metodumuzu prototype içine  yazarsak, metod defalarca tekrarlanmamıs olacak ve hafızada tek bir yer kaplamış olacak

