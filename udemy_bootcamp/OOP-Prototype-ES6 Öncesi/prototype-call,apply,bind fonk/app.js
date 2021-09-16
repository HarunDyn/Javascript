// call,apply,bind fonksiyonları

const obj1={
    number1:10,
    number2:40
}

const obj2={
    number1:20,
    number2:50
}

function addnumbers(number3,number4){
    console.log(this.number1+this.number2+number3+number4)
}

// addnumbers(100,200);
//bir constructor içinde olmadığımız için buradaki this global scopeda windows objemize denk geliyor
//bizler objemizi çağırıp thislere atayarak işlemlerimizi gerçekleştireceğiz

// addnumbers.call(obj1,100,200);
// addnumbers.call(obj2,100,200);

// addnumbers.apply(obj1,[100,200]);
// addnumbers.apply(obj2,[100,200]);

// başka bir constructor kullanabilmek için biz call ve apply kullanabiliriz

// Bind sayesinde de biz fir fonk. bir objeye bağlıyoruz farklı faklı objelere bağlıyoruz. Genelde eventlerde kullanılır ve bize bir kopya fonk üretir.


function getnumberstotal(number3,number4){
    return this.number1+this.number2+number3+number4;
}

const copyfunc1=getnumberstotal.bind(obj1);
const copyfunc2=getnumberstotal.bind(obj2);

// console.dir(copyfunc1);
// console.dir(copyfunc2);

console.log(copyfunc1(100,200));
console.log(copyfunc2(200,400));