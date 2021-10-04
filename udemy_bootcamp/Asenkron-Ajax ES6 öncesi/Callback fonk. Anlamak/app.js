 // CallBack Fonk- asenkron işlemlerimizi yönetebiliyoruz

//  const langs=["python","java","C++"];

//  langs.forEach(function(lang){
//     console.log(lang);
//  });

// document.getElementById('btn').addEventListener("click",function(){
//     console.log('Tıkla')
// }) // JS geliştiricileri burada addEventListener bir tane callback fonk yerleştirmişler ve biiz tıkladıgımızda bu fonk çalıştırıyor

// callback atayarak senkron haline getiriyoruz
// function process1(callback){
// setTimeout(function(){
//     console.log("process1")
//     callback();

// },3000);    
// };

// function process2(){
//     setTimeout(function(){
//         console.log('process2');

//     },2000);


// };

// process1(process2);

// // process2();

// console.log('naber');

 const langs=["python","java","C++"];

function addLang(lang,callback){
    setTimeout(function(){
        langs.push(lang);
        console.log("Eklendi");
        callback();
        
    },2000);
}

function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);
        });
    },1000);
}


addLang('Javascript',getAllLangs);

// getAllLangs(); // Asenkron durum 


