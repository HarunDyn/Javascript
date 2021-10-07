
/* Fetch  API Kullanımı 

Ajax yerine kullanabileceğimiz alternatif bir asenkron veri alma veri gönderme api.
Ajax'e göre daha kolay.

Fetch api geri dönüşünü resolve olarak kendi içinde dönüyor, yani bize promise dönüyor
Ve bizda bunu çağırdığımız zaman then ile yakalayabiliyoruz
Olumsuz bir durumda da reject ile dönüyor ve catch ile bunu yakalıyoruz

text dosyasından, JSON dosyasından, ve uzaktaki bir rest api dan json verilerimizi ve text verilerimizi almaya çalışacağız.

fetch fonk Windows objesinin içinde bulunuyor ve bu bize bir arayuz sunacak ve bize bir tane response dönmüş olacak

*/

// Text dosyasından veri alma durumu 

function getTextFile(){ // Bu fonksiyon içinde biz Fetch api kullanmaya çalışacaz.
    fetch('example.txt')
    .then(response=>response.text()) // Önce response obje olarak almış olduk ve bunun text halini döndermiş olduk. Then içinde return yaptığımız için bu bize promise olarak gelicek. Ve bizde bu değerimizi then ile alabileceğiz.
    .then(data=>console.log(data))
    .catch(err=>console.error(err));


}


// getTextFile();

function getJsonFile(){ // Local bir Json Dosyasından veri almak
    fetch('example.json')
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
}


function getExternalAPI(){
    fetch('https://api.exchangerate.host/latest')
    .then(response=>response.json())
    .then(data=>console.log(data.rates.TRY))
    .catch(err=>console.error(err));

}

getExternalAPI();








// getTextFile();

// getJsonFile();

// Exchangeratesapi - exchangerate.host - Api veri almak (dolar kuru vb)
//https://api.exchangerate.host/latest







