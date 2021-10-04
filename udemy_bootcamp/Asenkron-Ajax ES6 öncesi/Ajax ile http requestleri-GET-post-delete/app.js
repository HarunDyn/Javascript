// Ajax, callback, http requests

class Request{
    constructor(){

        this.xhr=new XMLHttpRequest();

    }

    // GET request

    get(url,callback){
        this.xhr.open('GET',url);// Bağlantı açık

        this.xhr.onload=() =>{

            if(this.xhr.status===200){ // this.xhr.status=200 burada this Request değil bizzat xhr belirttiği için undefined olarak tanımlanır.Çözüm için aşağı.. 
              
                callback(null,this.xhr.responseText); // isteğimiz bitti
               
                
            }
            else{
                //hata durumunda 
                callback('Hata Oluştu',null)
            }
        }

        this.xhr.send(); 
    }

    post(url,data,callback){
        this.xhr.open('POST',url);
        this.xhr.setRequestHeader('Content-type','application/json') // Json verisi göndereceğimizi söylüyoruz

        this.xhr.onload= ()=>{
           if(this.xhr.status===201){
               callback(null,this.xhr.responseText);
           } 
           else{
               callback('hata oluştu',null)
           }
        }
        this.xhr.send(JSON.stringify(data)); // Geri dönecek veriyi string olarak göndermemiz gerekiyor.

    }

    put(url,data,callback){
        this.xhr.open('PUT',url);
        this.xhr.setRequestHeader('Content-type','application/json') // Json verisi göndereceğimizi söylüyoruz

        this.xhr.onload= ()=>{
           if(this.xhr.status===200){
               callback(null,this.xhr.responseText);
           } 
           else{
               callback('hata oluştu',null)
           }
        }
        this.xhr.send(JSON.stringify(data)); // Geri dönecek veriyi string olarak göndermemiz gerekiyor.

    }

    delete(url,callback){
        this.xhr.open('DELETE',url);// Bağlantı açık

        this.xhr.onload=() =>{

            if(this.xhr.status===200){ // this.xhr.status=200 burada this Request değil bizzat xhr belirttiği için undefined olarak tanımlanır.Çözüm için aşağı.. 
              
                callback(null,this.xhr.responseText); // isteğimiz bitti
               
                
            }
            else{
                //hata durumunda 
                callback('Hata Oluştu',null)
            }
        }

        this.xhr.send(); 
    }


}



const request =new Request();

// request.get('https://jsonplaceholder.typicode.com/albums',function(err,response){
//     if(err===null){
//         console.log(response);

//     }
//     else{
//         console.log(err);
//     }
// });

// request.get('https://jsonplaceholder.typicode.com/albums',function(err,response){
//     if(err===null){
//         console.log(response);

//     }
//     else{
//         console.log(err);
//     }
// });

// request.post('https://jsonplaceholder.typicode.com/albums',{userId:2,title:'Thriller'},function(err,album){
//     if(err===null){
//         console.log(album);
//     }
//     else{
//         console.log(err);
//     }
// })

// request.put('https://jsonplaceholder.typicode.com/albums/10',{userId:143,title:'Karma Sıla'},function(err,album){
//     if(err===null){
//         console.log(album);
//     }
//     else{
//         console.log(err);
//     }
// })

request.delete('https://jsonplaceholder.typicode.com/albums/2',function(err,response){
    if(response===null){
        console.log(response);

    }
    else{
        console.log(err);
    }
});











/* 

if(this.xhr.status=200){ // this.xhr.status=200 burada this Request değil bizzat xhr belirttiği için undefined olarak tanımlanır.Çözüm için aşağı.. 
              
                console.log(this.xhr.responseText); 
               
                // 
            }

Yukarıda if bloğunun içinde this.xhr.status olarak yazılan değerde this içinde bulunduğu
metodun, yani tanımlandığı metodu temsil eder. Burdan this in zaten xhr eşit olduğunu görürüz,
burada çözüm için birden çok yol var 

1) ilkel bir yol olan çözüm =
get metodunun içerisine const temp =this; diyerek temp in  requeste göstermesini sağlamış oluruz.
Burada if(temp.xhr.status===200){console.log(temp.xhr.responseText)} diyerek request in içindeki xhr demiş oluruz. ilkel bir yol olduğu için önerilmez

2) if(this.status===200){console.log(this.responseText)} denirse burda this zaten xhr gösterdiği için sorun çözülecektir.

3) get() metodunun sonuna get(){

}.bind(this);  ekleyerek this request göstermesini sağlıyoruz.

4) arrow function kullanarak zaten .bind(this) işlevin, görmüş olacaktır
this.xhr.onload=()=>{
    if(this.xhr.status===200){
        console.log(this.xhr.responseText);
    }
}

*/

// POST

/* Şimdi biz get request sayesinde biz bir web sayfasına erişiriz ve web sayfası bize bir html sayfası 
 döner ya da burdaki gibi bir rest api kullanırız ve bize json verisi döner ve kullanırız. Biz google.com gibi bir isteg yaptıgımız zaman
 Bu arka planda bulanan ıp adresıne gore html,css,js dosyları bize direk olarak iniyor.
 
 Post request ile de biz rest api bilgimizi gönderebiliriz.(json yada form bilgilerimiz)
 */

// post requesti yukarıdaki yaptığımız işlemleri kullanarak uygulayacagız.



// PUT Request - Bir veriyi update etmemizi güncellemmizi sağlayan request tipimiz
// PUT /posts/1 ıd 1 olan veriyi update etme


// DELETE requesti -GET requeste benziyor veri göndermiyoruz belirtilen veriyi siliyoruz. Ve response olarak boş bir obje dönüyor


