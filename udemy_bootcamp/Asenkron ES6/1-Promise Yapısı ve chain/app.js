// Promise Yapısı ve Chain //

// function getData(data){ // Promise Objesi döndüren Fonksiyon
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve('Olumlu Sonuç');
//         },10000);
//     });

// }


// getData('Merhaba').then(function(response){
//     console.log(response);
// }) 


// function getData(data){ // Promise Objesi döndüren Fonksiyon
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             reject('Olumsuz Sonuç');
//         },5000);
//     });

// }


// getData('Merhaba').catch(function(err){
//     console.log(err);
// })



// function getData(data){ // Promise Objesi döndüren Fonksiyon
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//            if(typeof data==='string'){
//             resolve(data)
//            } 
//            else{
//             reject(new Error('Lütfen String bir değer girin'));
//            }
//         },5000);
//     });

// }

// // new Error objesi ile hatamızı daha güzel ve detaylı yazdırabiliriz


// getData(3)
// .then(response=> console.log('Gelen Deger '+ response))
// .catch(err=>console.error(err)); // console.log yerıne console.error şeklinde yazılırsa alert durumunda çıkar uyarı)


/* 
        Promise Chain YApısı 'ard arda then'
Tek bir then işlemi yaptık ve olumlu sonuç döndü.Ancak biz istersek bu then içindende return ile bir değer döndürebiliriz. Eğer return ile 
bir değer döndürüyorsanız sistem fonk. içinde bu yine bize bir promise olarak gelicek ve bizde ard arda then kullanarak bunları tek tek almaya çalışacağız
 
Yalnız sadece bir defa catch kullanıyoruz-birden çok then kullanabiliriz


*/

 function addtwo(number){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            if(typeof number==='number'){
                resolve(number+2);
            }
            else{
                reject(new Error('Lütfen bir sayı girin'));
            }
        },3000);
    });

 }

addtwo(10)
.then(response=>{
    console.log(response);
    return response+2;
}).then(response2=>{console.log(response2); return response2+5;})
.then(response3=>console.log(response3))
.catch(err=>console.error(err));



