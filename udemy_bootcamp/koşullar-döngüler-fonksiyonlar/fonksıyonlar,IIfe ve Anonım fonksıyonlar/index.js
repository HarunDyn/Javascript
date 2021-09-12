// Fonksiyonlar, IIFE ve Anonım fonksıyonlar

//Fonksiyon tanımlama

//     function  Identıty(name,surname,age){

//     // if ( typeof name===undefined) name=='Bilgi yok'; // fonks tanımında direk varsayılan olarak atanabilir
//     // if ( typeof surname===undefined) surname=='Bilgi yok';
//     // if ( typeof age===undefined) age=='Bilgi yok';

//     console.log(`İsim': ${name} 'Soyad': ${surname} 'Yaş': ${age}`)

// }

// Identıty('Ali Dorukhan ','Dayan',1.4);
// Identıty('Harun ','Dayan',29);
// Identıty('Aylin ','Dayan',27);
// Identıty();

// Fonksiyonlarda return - oluşturulan değerin fonksiyondan dışarı çıkıp diğer fanks kullanılabılmesını saglar
//ayrıca fonksıyon içerisinde return altına yazdığımız işlemler çalışmaz



function Id(name,surname,age){
    if(typeof name===undefined) name=='Bilgi yok';
    if(typeof surname===undefined) surname=='Bilgi yok';
    if(typeof age===undefined) age=='Bilgi yok';

    console.log(` İsim : ${name} Soyad: ${surname} Yaş: ${age}`)
}

Id('Harun','Dayan',);



// function square(x){
//     return x*x;
// }

// function cube(x){
//     return x*x*x;
// }


// let a= cube(square(3));
// console.log(a);



// Function Expressıon (Fonksiyon ifadesi)

// function merhaba(){
//    return 'Merhaba'
// }
// console.log(merhaba());

// const merhaba = function(name){
//     console.log('merhaba'+name)
// }

// merhaba();
// merhaba('Harun');

// Immediately Invoked function expression(IIFE) / Tanımlandığı yerde çalışan fonksiyonlar

// (function(name){
//     console.log('merhaba: '+name)
// })('harun');


const database ={
    host:'localhost',
    add: function(){console.log('eklendi');},
    get: function(){console.log('Getir');},
    delete: function(){console.log('Silindi');},
    update: function(id){
        console.log(`ID: ${id} güncellendi`);
    },


}
console.log(database.host);
database.update(10);
database.get();







