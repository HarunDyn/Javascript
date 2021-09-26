// Destructuring -Bizim array içinden ya da objelerin içinden değerleri almak için kısa bir yol

// let number1,number2;

// const arr=[100,200,300,400];

// number1=arr[0];
// number2=arr[1];
// console.log(number1,number2);

// Destructuring 

// [number1,number2]=arr;

// const [number1,number2]=arr;
// console.log(number1,number2);

// object destructuring

// const numbers={
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50,
// }

// const {a:number1,c:number2,d:number3}=numbers;
// console.log(number1,number2,number3);

// function destructuring

// const getlangs=()=>['python','java','Javascript']

// const [lang1,lang2,lang3]=getlangs();
// console.log(lang1,lang2,lang3);

// obje

const person={  // çalışmadı
    name:'harun',
    year:1992,
    salary:3000,
    showInfos : ()=> console.log('Bilgiler gösteriliyor...')
}

const {name:İsim,year:yıl,salary:maaş,showInfos:BilgileriGöster}=person;


console.log(İsim,yıl,maaş);
BilgileriGöster();












// const array=[100,200,300,400];
 
// const [val1,,,val2]=array;
 
// console.log(val1,val2);//100 400
 
// Virgüllerle değerler arasında gezinebilir böyle bir işlemde ekrana 100 400 yazar

 
// let a=3;
// let b=6;
 
// [a,b]=[b,a];
// console.log(a);//6
// console.log(b);//3
 

 
// const names=["isimler","ahmet","mehmet","necdet","sezer"];
 
// const [isimler,...isim]=names;
 
// console.log(isimler,isim);//isimler (4) ["ahmet", "mehmet", "necdet", "sezer"]

