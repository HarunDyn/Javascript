// ES6 Sets (Kümeler-Bir değeri sadece bir defa taşıyor)

const myset = new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add(true);
myset.add('harun');
myset.add([1,2,3]);
myset.add({a:10,b:20});

const myset2= new Set([100,3.14,'harun',true]); // set den array oluşturma

// console.log(myset);
// console.log(myset2);

// console.log(myset.size);

//Delete Metodu

// myset.delete('harun');
// console.log(myset);

// Has Metodu

// console.log(myset.has('harun'));  // boolen döner
// console.log(myset.has([1,2,3])); // rference tipi iki farklı obje olduğu için false alırız
// console.log(myset.has({a:10,b:20})); // aynı şekilde 

// forEach Döngüsü

// myset.forEach(function(v){
//     console.log(v);
// }

// for of Döngüsü -for each ıle aynı değeri verir

// for(let value of myset){
//     console.log(value);

// }

// Set array oluşturma

const array=Array.from(myset);

console.log(array);








