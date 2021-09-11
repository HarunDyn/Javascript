// Nesne yönelimli proglamlama
let value;

const programmer = {
    name: 'Harun Dayan',
    age: 29,
    email: 'harundayann@gmail.com',
    langs: ['python','C++','Java'],

    address: {
        city: 'ankara',
        country: 'Turkey',

    },
    work: function(){ console.log('Harun anlamaya çalışıyor');}
}


value=programmer;

value=programmer.email; // genelde bu kullanılır
// value=programmer.['email']; //hata verdi
value=programmer.langs;
value=programmer.address.city;
value=programmer.work();




const programmers=[
    {name:'harun',age:29},
    {name:'doruk',age:1.5}
] ;
value=programmers[1].age;















console.log(value);
