let value;

//Veritiplerini stringe çevirme

value= String(123);
value= String(3.14);
value= String(function() {console.log()});


value=(124).toString(); // aynı şekilde value stringe çevirir
value=('harun').toString();

//Veritiplerini sayıya çevirme

value=Number(123);
value=Number(null);
value=Number(undefined);
value=Number(function(){console.log()});
value=Number([1,2,3,4,5]); // array
vale= Number('hello world'); // NaN Not A Number uayarısı alınır çünkü herhangi bir sayısal deger içermezler
value=Number(3.14);

value= parseFloat('3.14');
value= parseInt('3');


const a= 'hello' +34
console.log(a);
console.log(typeof a); // hello34 string oldu ; otomatik olarak number string ile toplanınca string haline dönüştü

const h= Number('34') + 55;
console.log(h);
console.log(typeof h);

value= String(null);

value= parseFloat('3.14');



value= parseInt('3');



console.log(value);
console.log(typeof value);

