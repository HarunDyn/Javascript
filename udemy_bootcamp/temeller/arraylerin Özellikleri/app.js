// arraylerimiz birden fazla değeri depolamak için kullandığımız veri tipleridir.
let value;

const numbers = [98,23,56,2,3,76,1];

// 
const langs=['Python','C++','JavaScript'];

const a=['merhaba',22,null,undefined,3.14];

value=numbers.length; //uzunluk

value=numbers[0]; // indeksleme
value=numbers[3];
value=numbers[numbers.length-1];

// herhangi bir indeks degerini degişstirme 
numbers[2]=8888;
value=numbers;

// index of
value=numbers.indexOf(8888);

// array sonuna ve basına deger ekleme 

numbers.push(9999); //sona
numbers.unshift(7777); //başa eklenir.
value=numbers;

// sonundan değer atma

numbers.pop();
value=numbers;

// başından değer atma 
numbers.shift();
value=numbers;

// belli kısmını atma
numbers.splice(0,3);
value=numbers;

// reverse elamanları ters çevirme

numbers.reverse();
value=numbers;
value=numbers.sort(); // sayının büyüklüğüne bakmıyor sadece ilk rakamların buyuklugune gore sıralar
value=numbers.sort(function(x,y){ // küçükten büyüğe doğru sıralayın
    return x-y
})
value=numbers.sort(function(x,y){ // büyükten küçüğe doğru sıralayın
    return y-x
})

















console.log(value);
