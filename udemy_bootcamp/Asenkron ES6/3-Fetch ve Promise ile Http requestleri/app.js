// Fetch Ve promise ile Http Requestleri
// https://jsonplaceholder.typicode.com/ jsonplaceholder json objelerımızı alıcaz

// GET 

// class Request{
//     // Herhangi bir constructor olmayacak çünkü herhangi bir objeye ihtiyacımız yok. Direk window objesı üzerindeki fetch fonk kullanacağız.

//         get(url){

//             fetch(url)
//             .then(response=>response.json())
//             .then(data=>console.log(data))
//             .catch(err=>console.log(err))

            
//         }

// }

// const request=new Request();

// request.get('https://jsonplaceholder.typicode.com/albums');

// Burada fark edilirse verimizi sadece get fonk ıcınde yazdırabılıyoruz. verimizi dısarda elde edebilmek içinde şöyle yapabiliriz

// class Request{
//     // Herhangi bir constructor olmayacak çünkü herhangi bir objeye ihtiyacımız yok. Direk window objesı üzerindeki fetch fonk kullanacağız.

//         get(url){

//             return new Promise((resolve,reject)=>{
//                 fetch(url)
//                 .then(response=>response.json())
//                 .then(data=>resolve(data)) // Burdan dönen değerleri promise yapısıyla request.get() aktarabiliriz
//                 .catch(err=>reject(err))
    

//              });

            
            
//         }

// }

// const request=new Request();

// let albums;

// request.get('https://jsonplaceholder.typicode.com/albums')
// .then(albums=>{
//     console.log(albums);

// })
// .catch(err=>console.log(err));

// console.log(albums); // Eğer burada çalıştırırsak asenkron çalışacagı için öncelik bu kodu çalıştıracak ve undefined olarak tanımlanacak o yuzden then içinde çalıştırmamız gerekmekte.


// POST Request


// class Request{
//     // Herhangi bir constructor olmayacak çünkü herhangi bir objeye ihtiyacımız yok. Direk window objesı üzerindeki fetch fonk kullanacağız.

//         get(url){

//             return new Promise((resolve,reject)=>{
//                 fetch(url)
//                 .then(response=>response.json())
//                 .then(data=>resolve(data)) // Burdan dönen değerleri promise yapısıyla request.get() aktarabiliriz
//                 .catch(err=>reject(err))
    

//              });

          
            
//         }
//         post(url,data){

//             return new Promise((resolve,reject)=>{
//                 fetch(url, {
//                     method: 'POST',
//                     body: JSON.stringify({
//                       title: 'foo',
//                       body: 'bar',
//                       userId: 1,
//                     }),
//                     headers: {
//                       'Content-type': 'application/json; charset=UTF-8',
//                     },
//                   })
//                   .then(response=>response.json())
//                   .then(data=resolve(data))
//                   .catch(err=>reject(err));
    
            
//             })
//         }

            

// }

// const request=new Request();

// request.post('https://jsonplaceholder.typicode.com/albums',{
//   userId:1,title:'Thriller' 
// })
// .then(newAlbum=>console.log(newAlbum))
// .catch(err=>console.log(err))


// PUT AND DELETE Request

// class Request{
//     // Herhangi bir constructor olmayacak çünkü herhangi bir objeye ihtiyacımız yok. Direk window objesı üzerindeki fetch fonk kullanacağız.

//         get(url){

//             return new Promise((resolve,reject)=>{
//                 fetch(url)
//                 .then(response=>response.json())
//                 .then(data=>resolve(data)) // Burdan dönen değerleri promise yapısıyla request.get() aktarabiliriz
//                 .catch(err=>reject(err))
    

//              });

          
            
//         }
//         post(url,data){

//             return new Promise((resolve,reject)=>{
//                 fetch(url, {
//                     method: 'POST',
//                     body: JSON.stringify({
//                       title: 'foo',
//                       body: 'bar',
//                       userId: 1,
//                     }),
//                     headers: {
//                       'Content-type': 'application/json; charset=UTF-8',
//                     },
//                   })
//                   .then(response=>response.json())
//                   .then(data=resolve(data))
//                   .catch(err=>reject(err));
    
            
//             })
//         }

//         put(url,data){
//             return new Promise((resolve,reject)=>{
//             fetch(url, {
//             method: 'PUT',
//              body: JSON.stringify(data),
//              headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//              },
//             })
//             .then(response=>response.json())
//             .then(data=>resolve(data))
//             .catch(err=>reject(err))
            
//         })

//         }

            

// }

// const request=new Request();

// request.put('https://jsonplaceholder.typicode.com/albums/1',{userId:10,title:'Sıla-Vaveyla'})
// .then(album=>console.log(album))
// .catch(err=>console.log(err))


// Delete Request


class Request{
    // Herhangi bir constructor olmayacak çünkü herhangi bir objeye ihtiyacımız yok. Direk window objesı üzerindeki fetch fonk kullanacağız.

        get(url){

            return new Promise((resolve,reject)=>{
                fetch(url)
                .then(response=>response.json())
                .then(data=>resolve(data)) // Burdan dönen değerleri promise yapısıyla request.get() aktarabiliriz
                .catch(err=>reject(err))
    

             });

          
            
        }
        post(url,data){

            return new Promise((resolve,reject)=>{
                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify({
                      title: 'foo',
                      body: 'bar',
                      userId: 1,
                    }),
                    headers: {
                      'Content-type': 'application/json; charset=UTF-8',
                    },
                  })
                  .then(response=>response.json())
                  .then(data=resolve(data))
                  .catch(err=>reject(err));
    
            
            })
        }

        put(url,data){
            return new Promise((resolve,reject)=>{
            fetch(url, {
            method: 'PUT',
             body: JSON.stringify(data),
             headers: {
            'Content-type': 'application/json; charset=UTF-8',
             },
            })
            .then(response=>response.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err))
            
        })

        }

        delete(url){
            return new Promise((resolve,reject)=>{
                fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'DELETE',
                }).then(response=>resolve('Veri İşlemi Başarılı')) // Data göndermedik ya da json çevirmedik çünkü boş bir obje dönecek sadece bir string ile bunun silindiğini göstericez
            });
        }

            

}

const request=new Request();

request.delete('https://jsonplaceholder.typicode.com/posts/1')
.then(message=>console.log(message))
.catch(err=>console.log(err))

