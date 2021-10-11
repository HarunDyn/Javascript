// ES7 Async, Await kullanımı ve Promiselerle İlişkisi
// javascript.info -güzel bir tutorial kaynağı
// Await (keyword): Bir promise resolve etmesini bekleyen anahtar kelimesidir. Sadece async olan bir fonk içinde çalışır
// Async ve await ler yeni bir konsept üzerine kurulmuş iki anahtar kelime değil promiseleri rahat bir şekilde kullanmamızı sağlıyor.

// async function test(data){
    // fonk. async olması mutlaka bir promise döneceğini gösteriyor. datayı otomatik olarak promise döndürüyor.
    
    // return new Promise((resolve,reject)=>{
    //     resolve(data);
    // })  promise objesini yazmamıza gerek kalmıyor
    // Await sadce Async funk içinde kullanılabilir

//     return data;
// }

// test('Merhaba').then(response=>console.log(response));

// async function test(data){
//     let promise=new Promise((resolve,reject)=>{
//       setTimeout(function(){
//         resolve('Bu bir değerdir')
//       },5000)     
//     });

//     // Await resolve edilmesini bekler ve response çalıştırdıktan sonra asenk çalışır

//     let response=await promise; // 5 saniye bekleyecek
//     console.log(response);
//     console.log('NAber');


// }

// test('merhaba')


// async function test(data){
//     let promise=new Promise((resolve,reject)=>{
//       setTimeout(function(){
//         resolve('Bu bir değerdir')
//       },5000)     
//     });

//     // Await resolve edilmesini bekler ve response çalıştırdıktan sonra asenk çalışır

//     let response=await promise; // 5 saniye bekleyecek

//     return response;

// }

// test('merhaba').then(response=>console.log(response))



// async function testData(data){
//     let promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(typeof data==='string'){
//                 resolve(data);
//             }
//             else{
//                 reject(new Error("Lütfen bir string değeri giriniz!"))
//             }
//         },4000);
//     });

//     const response=await promise; // burada response 'thriller' oluyor 

//     return response; // Dışarda yakalayabilmek için tekrar response return ediyoruz ve promise dönüşüyor dışarda then() ile yakalıyoruz
//     // console.log(response)
// }

// testData(24)
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

// Async ve await lerin en güzel kullanım alanları fetch fonk beraber kullanılmaları

async function getCurrency(url){

    const response=await fetch(url); // Response Object

    const data=await response.json(); // JSON objesı

return data;
}

getCurrency('https://api.exchangerate.host/latest')
.then(harun=>console.log(harun));
