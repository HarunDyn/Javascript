// // Async, await yapılarıyla http requestleri

// class Request{
//     // Herhangi bir constructor olmayacak çünkü herhangi bir objeye ihtiyacımız yok. Direk window objesı üzerindeki fetch fonk kullanacağız.

//        async get(url){

//             // return new Promise((resolve,reject)=>{
//             //     fetch(url)
//             //     .then(response=>response.json())
//             //     .then(data=>resolve(data)) // Burdan dönen değerleri promise yapısıyla request.get() aktarabiliriz
//             //     .catch(err=>reject(err))
    

//             //  });

//             const response= await fetch (url); //Response object
//             const data= await response.json() // json obje

//             return data; 


          
            
//         }

//        async post(url,data){

//             // return new Promise((resolve,reject)=>{
//             //     fetch(url, {
//             //         method: 'POST',
//             //         body: JSON.stringify({
//             //           title: 'foo',
//             //           body: 'bar',
//             //           userId: 1,
//             //         }),
//             //         headers: {
//             //           'Content-type': 'application/json; charset=UTF-8',
//             //         },
//             //       })
//             //       .then(response=>response.json())
//             //       .then(data=resolve(data))
//             //       .catch(err=>reject(err));
    
            
//             // })

//             const response = await fetch(url, {
//                         method: 'POST',
//                         body: JSON.stringify(data),
//                         headers: {
//                           'Content-type': 'application/json; charset=UTF-8',
//                         },
//                       }) // Response objesi dönecek
            
//             const data=await response.json();
                    
//             return data;


//         }

//         async put(url,data){
//         //     return new Promise((resolve,reject)=>{
//         //     fetch(url, {
//         //     method: 'PUT',
//         //      body: JSON.stringify(data),
//         //      headers: {
//         //     'Content-type': 'application/json; charset=UTF-8',
//         //      },
//         //     })
//         //     .then(response=>response.json())
//         //     .then(data=>resolve(data))
//         //     .catch(err=>reject(err))
            
//         // })


//         const response = await fetch(url, {
//             method: 'PUT',
//             body: JSON.stringify(data),
//             headers: {
//               'Content-type': 'application/json; charset=UTF-8',
//             },
//           }) // Response objesi dönecek

//         const data=await response.json();
        
//         return data;


//         }

//        async delete(url){
//             // return new Promise((resolve,reject)=>{
//             //     fetch('https://jsonplaceholder.typicode.com/posts/1', {
//             //     method: 'DELETE',
//             //     }).then(response=>resolve('Veri İşlemi Başarılı')) // Data göndermedik ya da json çevirmedik çünkü boş bir obje dönecek sadece bir string ile bunun silindiğini göstericez
//             // });

//             const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', { // Burda promise resolve etmesi bekleniyor
//                     method: 'DELETE',
//                     }) // Response Object

//                     return "veri silme işlemi başarılı"


//         }

            

// }

// const request=new Request();

// request.delete('https://jsonplaceholder.typicode.com/posts/1')
// .then(message=>console.log(message))
// .catch(err=>console.log(err))


// Sadece async ve awaite kullanımı
// Async, await yapılarıyla http requestleri

class Request{
    // Herhangi bir constructor olmayacak çünkü herhangi bir objeye ihtiyacımız yok. Direk window objesı üzerindeki fetch fonk kullanacağız.

       async get(url){

            const response= await fetch (url); //Response object
            const redata= await response.json() // json obje

            return redata; 


          
            
        }

       async post(url,data){


            const response = await fetch(url, {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: {
                          'Content-type': 'application/json; charset=UTF-8',
                        },
                      }) // Response objesi dönecek
            
            const redata=await response.json();
                    
            return redata;


        }

        async put(url,data){
        


        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }) // Response objesi dönecek

        const redata=await response.json();
        
        return redata;


        }

       async delete(url){
            

            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', { // Burda promise resolve etmesi bekleniyor
                    method: 'DELETE',
                    }) // Response Object

                    return "veri silme işlemi başarılı"


        }
    }

    const request=new Request();


// request.get('https://jsonplaceholder.typicode.com/albums')
// .then(albums=>{
//     console.log(albums);

// })
// .catch(err=>console.log(err));


// request.post('https://jsonplaceholder.typicode.com/albums',{
//   userId:1,title:'Thriller' 
// })
// .then(newAlbum=>console.log(newAlbum))
// .catch(err=>console.log(err))


// request.put('https://jsonplaceholder.typicode.com/albums/1',{userId:10,title:'Sıla-Vaveyla'})
// .then(album=>console.log(album))
// .catch(err=>console.log(err))



request.delete('https://jsonplaceholder.typicode.com/posts/1')
.then(message=>console.log(message))
.catch(err=>console.log(err))
