// Döngüler belli koşullarda kendi döngülerini sürekli çalıştıran yapılardır.
// let i=0;


// while(i<10){// i değerini duruma göre artırıp azalatmazsak koşulumuz sürekli true göstererek sonsuz döngüye girer.
    
//     console.log(i);
//     i=i+1 //i+=1  // i++
// }

// let i=10;

// while(i){
//     console.log(i);
//     i-=2

// }

// break ve continue 

// let i=0;

// while(i<10){
//     console.log(i);
//     if(i==5){
//         break;
//     }
//     i++
// }
// let i=0;

// while(i<40){
//     if(i==5){
//         i++;
//        continue;
//     }
//     console.log(i);

//     i +=5;
// }


// let i=0;

// while(i<10){
//     if(i==3||i==5){
//     i++;

//     continue; // 3 ve 5 kesti
//  }
    
//     console.log(i);
//     i++;

// }


// Do While döngüsü / En az bir defa çalışma garantisi var

// let i=0;
// do{
// console.log(i);
// i++;

// }while(i<10);

//         For döngüleri  // Daha kolay yazma metodları anlatıldı

// const langs=['Python','JavaScript','C++'];

// let index=0;

// while(index<langs.length){
//     console.log(langs[index]);
//     index++;

// }

// const exam=['Math','Jit','C'];

// let index=0;

// while(index<exam.length){
//     console.log(exam[index]);
//     index++;

// }



//  console.log(langs[2]); array yazımı

// for(index=0; index<langs.length ;index++){
//     console.log(langs[index]);

// }

//  Biz burada array elemanlarını tek tek gezindik buna itirasyon? denir /
// her bir elaman üzerinde tek tek gezinmek için ayrıca langs.forEach kullanabiliriz.

// langs.forEach(function(a,i){
//     console.log(a,i);
// });


// Object kullanabileceğimiz -map metodu-, framework lerde karşımıza çıkacak(react)


const users=[
    {name: 'harun', age: '29'},
    {name: 'doruk', age: '1.5'},
    {name: 'aylin', age: '27'},
];

const names= users.map(function(user){
    return user.name;

});

// const ages=users.map(function(user){
//     return user.age;
// });

// console.log(ages);


// console.log(names);


// for in Döngüsü 

const user={
    name:'harun',
    age:28,

}

for(let key in user){
    console.log(key,user[key]);
}





