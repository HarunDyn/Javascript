var değişkeni

var a;

a=20;
console.log(a);

var name='harun';
console.log(name);

name='doruk';
console.log(name);

Let Değişkeni 

let name='harun';
name='Doruk';
console.log(name);

let name='doruk'; 


aynı değişken ard arda iki farklı değer tanımlanamaz 

let a,b;
a=10;
b=90;
console.log(a+b);

const anahtar kelimesi (constant=sabit)

const name='harun';

console.log(name);
name='doruk';  // değişkene tekrar bir değer atanması gerçekleştirilemiyor

const a=[1,2,3,4,5];

console.log(a);

// a=[1,2,3,4,5,6]; //burada bu şekilde ekleme yapamıyoruz çünkü a'nın serverda  referans ettiği yeri değiştirmiş oluyoruz.

a.push(6); // sadece a'nın referans ettiği yerin değerini değiştirmiş oluyoruz. Değere yeni atama yaparak yerini değiştirmiş olmuyoruz.

console.log(a);








