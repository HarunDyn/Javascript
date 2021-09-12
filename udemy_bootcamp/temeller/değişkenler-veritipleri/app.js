// // Değişkenler
var a = 10;
var b = 20;
var c = 206;

console.log(b,c,a);

// veri tipleri

// 1-primitive veri tipleri(ilkel veri tipi ) number/string/boolean/null/undefined

var a= 10;  //number veri tipi
console.log(typeof a); 

var name=('harun') //string veri tipi
console.log(typeof name)

var a = true;
console.log(typeof a);

var b= null;
console.log(b);
 
// var a; //undefined
console.log(a);





// 2-reference veri tipleri   refereance tiplerin her biri object dir


var numbers =[1,2,3,4,5];  //array birden fazla değer biriktirmek için kullanılır

console.log(numbers[2]);
console.log(typeof numbers);

// kendi referanslarımızı oluşturabiliriz.

const person={
    name:'Harun',
    surname: 'Dayan',
    age:29
};

console.log('İsim: ',person.name,'Soyad: ',person.surname);






var a =  10;
var b = a ;

console.log(a,b);

a=20;
console.log(a,b);









