// let value;

// document objesi

// value=document;
// value=document.all; //HTML allcollection


// value=document.all.length;
// value=document.all[22];
// value=document.all[document.all.length-1];




// const elements=document.all; //Html Collection diye bir obje dönüyor
// console.log(elements);
// for(i=0; i<document.all.length;i++){
//     console.log(elements[i]);
// }

// const elements=document.all;
// for(i=0;i<elements.length;i++){
//     console.log(elements[i]);
// }



// elements.forEach(function(element){   
//     console.log(element);

// });


//for döngüsü dışında forEach kullanamıyoruz, kullanabilmek için aşağıda html collectiona arraylere çevirmemiz gerek

// const collections=Array.from(document.all);



// collections.forEach(function(element){
//     console.log(element);
// });

// value=document[8];
// value=document.body;

// value=document.scripts;

// value=document.links;
// value=document.links[2];
// value=document.links[document.links.length-1];
// value=document.links[document.links.length-1].getAttribute('class');
// value=document.links[document.links.length-1].getAttribute('href');
// value=document.links[document.links.length-1].className;
// value=document.links[document.links.length-1].classList;

// value=document.forms;
// value=document.forms.length;
// value=document.forms[2];
// value=document.forms[0].id;
// value=document.forms[0].getAttribute('id');
// value=document.forms[0].method; // get mi? Post mu ? defaoult olarak get eklenmiş




// value=document.forms['form']; //name i form ise bu şekilde de çağırabiliriz


                                // Element Seçme //


// let element;

// element=document.getElementById('todo-form');
// element=document.getElementById('tasks-title'); 
// // id ler bir kere kullanıldığı için sıkıntı oluşturmaz ama classları çağırırsak eğer arrayler oluşur.
// element=document.getElementsByClassName('list-group-item');

// // tag e Göre seçme

// element=document.getElementsByTagName('div');


// // Query Selector - css selector // sadece tek bir element dönüyor(ilkini) / Yuakrıdaki üçünü aynı anda dönebilir
// element=document.querySelector('#todo-form');
// element=document.querySelector('.list-group-item');
// element=document.querySelector('div');


// //Query Selector all

// element=document.querySelectorAll('li');

// for(i=0;i<element.length;i++){
//     console.log(element[i]);
// }

    // for(i=0;i<element.length;i++){
    //     console.log(element[i]);
    // }

// element.forEach(function(e){
//     console.log(e)
// });

// Element seçme ve Style özel.Değiştirme //

// const element=document.querySelector('#clear-todos');
// Element özellikleri
// console.log(element.id);
// console.log(element.className);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);

// Style ve Element özelliğini değiştirme 

// element.className='btn btn-success';
// element.style.color='black';
// element.style.marginLeft='50px';
// element.href='http://www.google.com';
// element.target='_blank';

// element.textContent='Silin';
// element.innerHTML="<span style = 'color red'>Sil</span>"; // Element ekleme 

// Li döngü kullanarak style ekleme 

// const element=document.querySelectorAll('.list-group-item'); //Nodelist şeklinde gelecek
// element.forEach(function(el){
//     el.style.color='red';
//     el.style.background='#0f0f0f';
// });

// let element2;


// let element2=document.querySelector('li:first-child');
// element2=document.querySelector('li:nth-child(2)');
// element2=document.querySelector('li:nth-child(3)');
// element2=document.querySelector('li:nth-child(4)');

// element2=document.querySelectorAll('li:nth-child(odd');
// element2=document.querySelectorAll('li:nth-child(even)');
// element2.forEach(function(el){
//     el.style.background='#eeeccc';
//     el.style.color='red';

// })
// console.log(element2);

// DOM elementleri üzerinde gezinme
let value;

// const todolist= document.querySelector('.list-group');
// const todo =document.querySelector('.list-group-item:nth-child(3)');
// const cardrow= document.querySelector('.card.row');


// value=todolist;
// value=todo;
// value=cardrow;


// //child nodes

// value=todolist.childNodes; // Burada etiket bitimleri son satır boş olduğundan text algılanıyor ve daha fazla child varmış gibi görünüyor


// value=todolist.childNodes[1];
// console.log(value);

// // children özelliği-sadece elementleri alır

// value=todolist.children;

// // for(i=0;i<todolist.children.length;i++){
// //     console.log(todolist.children[i]);

// // }

// for(i=0;i<value.length;i++){
//     console.log(value[i]);
// }

// value=todolist.children[2].textContent='DEğişti';

// value=cardrow;

// value=cardrow.children;
// value=cardrow.children[2].children[1].textContent='Burası da Değişti';

// value=todolist.firstElementChild;
// value=todolist.lastElementChild;
// value=todolist.children.length;
// value=todolist.childElementCount;

// value=cardrow;
// value=cardrow.parentElement;
// value=cardrow.parentElement.parentElement;

// // element kardeşlerini bulmak

// value=todo;
// value=todo.previousElementSibling;
// value=todo.nextElementSibling;
// value=todo.nextElementSibling.nextElementSibling;
// console.log(value)

// Dinamik Element Oluşturma
// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>                

// const newLink=document.createElement('a');
// const cardbody=document.getElementsByClassName('card-body')[1];

// newLink.id='clear-todos';
// newLink.className='btn btn-danger';
// newLink.href='http://www.google.com.tr';
// newLink.target='_blank';
// newLink.appendChild(document.createTextNode('Farklı Sayfaya Gidiniz'));
// cardbody.appendChild(newLink);

// console.log(newLink);

// Text Content -yerine text node kullanılması daha güvenli

// newLink.textContent='Farklı Sayfaya Geçiniz' //Her zaman düzgün çalışmayabilir.
//Eğer cardbody'e textcontent eklersek içindeki tüm child etiketleri gider.

// console.log(cardbody);

// cardbody.textContent='Delete';

// Text Node -Child gibi element olarak eklenebiliyor.

// const text= document.createTextNode('naber');
// cardbody.appendChild(text);
// console.log(cardbody);

//Dinamik Element Silme

const todolist=document.querySelector('ul.list-group');
const todos=document.querySelector('li.list-group-item');

// // remove Metodu

//  todos[1].remove(); // Çalışmadı

// Remove Child

todolist.removeChild(todolist.lastElementChild);

// todolist.removeChild(todos[2]); // Çalıştırmadı

// console.log(todolist);
// console.log(todos);

// Element Değiştirme REPLACE
//  <h5 class="card-title" id = "tasks-title">Todolar</h5>


// const cardbody2=document.querySelectorAll('.card-body')[1];

// const NewElement=document.createElement('h3');
// NewElement.className='card-title';
// NewElement.id='tasks-title';
// NewElement.textContent='Yeni Başlık Eklendi';
// // Eski element
// const oldElement=document.querySelector('#tasks-title');

// cardbody2.replaceChild(NewElement,oldElement);



// console.log(NewElement);

// Dinamik attribute değiştirme,silme ve ekleme 

// const todoInput=document.querySelector('#todo');
// let element;

// element=todoInput;
// element=todoInput.classList;
// element=todoInput.classList.add('newclass');
// element=todoInput.classList.add('newclass2');
// element=todoInput.classList.remove('form-control');

// todoInput.className='form-control newclass';


// element=todoInput;
// element=todoInput.placeholder;
// element=todoInput.getAttribute('placeholder');
// todoInput.setAttribute('title','input');
// todoInput.setAttribute('placeholder','naber');
// todoInput.removeAttribute('name');

// element=todoInput;

// element=todoInput.hasAttribute('class');









// console.log(element);





















