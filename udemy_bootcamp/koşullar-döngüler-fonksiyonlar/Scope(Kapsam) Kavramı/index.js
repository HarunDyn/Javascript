// Scope (Kapsam) Kavramı / Functıon scope/Global scope/Block Scope --Bütün programlama dillerinden bulunur, bir değişkenin nerelerde var olabildiğini söyler, bir değişken fonksiyon içinde tanımlanmısşsa dışarda var olabilir mi,ya da if blogu içinde tanımlanmışsa dısarda var olur mu?

// function a(){
//     //Function scope
// }

// if (){
// //block scope
// }

var value1=10;
let value2=20;
const value3=30;

// function scope(){
//     var value1=40;
//     let value2=50;
//     const value3=60;
//     console.log(value1,value2,value3);


// };

// console.log(value1,value2,value3);
// scope(); 
// Burada fonksıyon içinde tanımlanan değişkenler fonk almış oldukları değerleri korudular.Çünkü serverda fonksiyona özel alanda saklanıyor


if(true){
    var value1=40;
    let value2=50;
    const value3=60;
    console.log(value1,value2,value3);


}
console.log(value1,value2,value3); 
// burada da value2 ve 3 blok dışındaki değerlerini aldı. ve value 1 blok içindeki değerini almış oldu..yani var değişkenine blok içindeki aldığı değerler blok dışı değerinin yerini almış oldu.


console.log(a); // sadece var değişeni blok dışına çıkabilir.
console.log(b);
console.log(c);





