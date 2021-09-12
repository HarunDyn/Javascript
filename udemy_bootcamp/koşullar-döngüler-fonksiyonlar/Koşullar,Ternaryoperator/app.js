// Karşılaştırma operatörler ,Koşullar, Ternary Operatör

// ==
// ===
// != eşit değil
// !==
// <
// >
// >=
// <=  // karşılaştırma operatörleri kullanıldıgında bıze bır boolen deger donuyor true ya da false olarak

// console.log(2==2);
// console.log('js'=='Java');
// console.log(2=='2'); // Burada bır tarafta  sayı bir tarafta string varsa bu otomatık olarak stringe dönüşüyor. diğer dillerde yok
// // peki nasıl false yapıcaz aynı zamanda tiplerinide sorgulayacağız
// console.log(2==='2'); // hem tiplerini hem değerlerini karşılaştırır. En sağlıklı yöntem bu.
// console.log(5>4);
// console.log(3<2);
// console.log(2!=3); 

// console.log(4>=4);

// console.log(3<=2);


// mantıksal bağlaçlar//

// Not Operatörü // ! // bir değeri false ise true ya true ise false çeviriyor.

// console.log(!(2!=2));

// And operatörü // && // Koşullardan biri bile false olursa sonuç false olur true çıkması için tüm koşulların true olması gerekir
// console.log((2==2)&&('harun'=='harun')&&(2=='2'));

// // Or operatörü //  ||  // koşullardan birinin true olması sonucu true yapar, sonucun false olması için her birirnin kendi içinde false olması gerekır

// console.log((2==4)||('harun'=='harun')||(2==='2'));

// Koşullu Durumlar if , else if , else ;

// if Koşulu (if koşulu true olursa block çalışacak eğer false olursa çalışmayacak)


// if(koşul){
//     //if block
// }

// const error=true;

// if(error==true){
//     console.log('Hata ayıklandı')
// }

// Else blokları(yanına herhangi bir koşul yazmıyoruz, sadece üstteki if bloğu çalışmadığı zaman çalışıyor)


// const error=true;

// if(error==false){
//     console.log('Hata ayıklandı')
// }

// else{
//     console.log('hata ayıklanamadı')
// }

// const user='Dayanx1';

// if(user==='Dayanx'){
//     console.log('Kullanıcı bulundu..!')
// }

// else{
//     console.log('Kullanıcı bulunamadı..!')
// }



// Else if (birden fazla koşul oluşturmak )

// const process='5';

// if (process==='1'){
//     console.log('İşlem-1');
// }
// else if (process==='2'){
//     console.log('İşlem-2');
// }
// else if (process==='3'){
//     console.log('İşlem-3');
// }
// else if (process==='4'){
//     console.log('İşlem-4');
// }
// else {
//     console.log('program çalışmadı');
// }

// const number=999;
// if(number===999){
//     console.log('Bu sayı 999 eşittir.');
// }
// else {
//     console.log('Bu sayı 999a eşit değildir!');
// }
// Ternary Operator (Diğer dillerde de mevcut) ukarıdakı kosulu tek satırda yazıcaz

// console.log(number===999 ? 'Sayı 999dür' : 'sayı 999 değildir')

// tek işlem içeriyorsa süslü parantez kullanılmayabılır

// if(number===999) console.log('sayı 999 dur');
// else console.log('değildir');

// Switch Case Yapıları / Bizim if ve elselerin yerine kullanabileceğimiz yapı türü, break döngülerde de kullanılan anahtar ve switchden çıkmamızı yani diğer koşullarında çalışmasını engeller


// const process='5';

// if (process==='1'){
//     console.log('İşlem-1');
// }
// else if (process==='2'){
//     console.log('İşlem-2');
// }
// else if (process==='3'){
//     console.log('İşlem-3');
// }
// else if (process==='4'){
//     console.log('İşlem-4');
// }
// else {
//     console.log('program çalışmadı');
// }

const process=3;

switch(process){

case 1:
    console.log('İşlem1');
    break;
case 2:
    console.log('işlem2');
    break;
case 3:
    console.log('işlem3');
    break;
default:
    console.log('İşlem geçersizdir.');


}












