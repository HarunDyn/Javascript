// Mapler - key - value

//  let mymap=new Map();// Map oluşturma

//  console.log(mymap);

//  const key1='Harun';
//  const key2={
//      a:10,
//      b:20
//  }
//  const key3=()=>2;

//  mymap.set(key1,'String Değer');
//  mymap.set(key2,'object literal değeri');
//  mymap.set(key3,'function değer');

//  console.log(mymap.get(key1));
//  console.log(mymap.get(key2));
//  console.log(mymap.get(key3));

// console.log(mymap);
// console.log(mymap.size);


// const cities=new Map();

// cities.set('İstanbul',15);
// cities.set('Ankara',6);
// cities.set('İzmir',4);

// console.log(cities);

// forEach 

// cities.forEach(function (value,key){
//     console.log(key,value);
// });

// for of
// for(let [key,value] of cities){
//     console.log(key,value);
// }

// for(let key of cities.keys()){
//     console.log(key);
// }

// for(let value of cities.values()){
//     console.log(value);
// }

// Arraylerden map oluşturma

// const array=[['key1','value1'],['key2','value2']];
// const lastmap=new Map(array);

// console.log(lastmap);

// Map den array oluşturma

const cities=new Map();

cities.set('İstanbul',15);
cities.set('Ankara',6);
cities.set('İzmir',4);

const array=Array.from(cities);

console.log(array);
