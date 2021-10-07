// Callback Cehennemi ve Promise


// Callback hell

a(function (resultsFromA){
    b(resultsFromA, function(resultsFromB){
        c(resultsFromB, function(resultsFromC){
            d(resultsFromC, function(resultsFromD){
                e(resultsFromD, function(resultsFromE){
                    f(resultsFromE, function(resultsFromF){
                        console.log(resultsFromF);
                    })
                })
            })
        })
    })
});



/* 
Callback asenkron işlemlerimizi yönetmemizi sağlıyordu. Ve asenkron işlemlerimizi senkron bir hale getiriyordu.
Yukarıda Callback hell olarak nitelendirilen içiçe fonk. asenkron bi şekilde yani sırasız bir şekilde çalışabilir.
Biz burda a dan dönen değeri alıp b de çalıştırıp daha sonra b den alıp c de çalıştırabilmek için yani senkron hale getirmek için 
callback kullanmamız gerekiyor. Burada gelen bir sıkıntı durumunda fonk tek tek kontrol etmek durumunda kalıyoruz.
Hata yönetimi ve callback cehennemıne dusme durumu callback en dezavantajlı halleri olmakta.

Bundan dolayı ES6 ile promise (bir obje) yapısı ortaya kondu. 


*/