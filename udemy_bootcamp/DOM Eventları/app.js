// Event Listeners ve Event objesi kullanma
// document.addEventListener('DOMContentLoaded',load);
// function load(e){
//     console.log('Sayfa Yüklendi');
// }
// const filterInput=document.getElementById('filter');

// filterInput.onfocus=function(){
//     console.log('naber');
// };

// filterInput.addEventListener('focus',function(e){
// console.log(e);
// console.log(e.type);
// console.log(e.target);
// console.log(e.target.placeholder);
// console.log(e.target.className);
// })

// console.log(filterInput);

// const todoForm=document.getElementById('todo-form');

// todoForm.addEventListener('submit',submitform);

// function submitform(e){
//     console.log('submit event yazdır'); // Form olup tekrar sayfaya gittiği için belli bir saniye gördük ve tekrar anasayfaya gitti. // Default özell.kaldırcaz
//     e.preventDefault();

// }; 
// console.log(todoForm);

                        // Klavye Eventleri 


//keypress
// document.addEventListener('keypress',run);
// function run(e){
//     // console.log(e.which); // hangi tuşa basıldığını gösteririr ASCII deki sayısal değerlerini gösterir
//     // console.log(e.key); // basılan tuşun gerçek değeri gösterilir ya harf ya da sayı olmalı.

// }


//keydown

// document.addEventListener('keydown',run);
// function run(e){
//     // console.log(e.which); // hangi tuşa basıldığını gösteririr ASCII deki sayısal değerlerini gösterir
//     console.log(e.key); // basılan tuşun gerçek değeri gösterilir ya harf ya da sayı olmalı.

// }

//keyup

// document.addEventListener('keyup',run);
// function run(e){
// //     // console.log(e.which); // hangi tuşa basıldığını gösteririr ASCII deki sayısal değerlerini gösterir
//     console.log(e.key); // basılan tuşun gerçek değeri gösterilir ya harf ya da sayı olmalı.

// }

// const header=document.querySelector('.card-header'); // getElementsByClassName çalışmadı !!!

// const todoInput=document.querySelector('#todo');

// todoInput.addEventListener('keyup',changetext);

// function changetext(e){
//     header.textContent=e.target.value;

     // İnput alanından değer almak için e.target.value yazılır
// };

// Mouse Eventleri
// const cardBody=document.querySelectorAll('.card-body')[1];

// const title=document.querySelector('#tasks-title');

// Click event
// cardBody.addEventListener('click',run);
// function run(e){
//     console.log(e.typed);

// }

// double clıck eventi  

// title.addEventListener('dblclick',run);
// function run(e){
//     console.log(e.type);
// }

//Mouse down 

// title.addEventListener('mousedown',run);
// function run(e){
//     console.log(e.type);
// }

// mouseup
// title.addEventListener('mouseup',run);
// function run(e){
//     console.log(e.type)
// }
// mouseover

// cardBody.addEventListener('mouseover',run);

// function run(e){
//     console.log(e.type);
// }

// mouseout

// cardBody.addEventListener('mouseover',run);

// cardBody.addEventListener('mouseout',run);
// function run(e){
//     console.log(e.type);
// }

// mouse enter ve leave

// cardBody.addEventListener('mouseenter',run);
// cardBody.addEventListener('mouseleave',run);

// function run(e){
//     console.log(e);
// }

// console.log(title);

// İnput Eventleri

// const filterInput = document.getElementById('filter');

// filterInput.addEventListener('focus',function run(e){console.log(e.type)});

// filterInput.addEventListener('blur',function run(e){console.log(e.type)}); // out the focus

// filterInput.addEventListener('paste',function run(e){console.log(e.type)});

// filterInput.addEventListener('copy',function run(e){console.log(e.type)});

// filterInput.addEventListener('cut',function run(e){console.log(e.type)});

// filterInput.addEventListener('select',function run(e){console.log(e.type)});
// console.log(filterInput);

// Event Bubbling(olay kabarcıklanması) // Tabi click her birine atanmışsa kabarcıklanma yukarıya doğru ilerler

// document.querySelector('.container').addEventListener('click',function run(e){console.log('Div Container')});
// document.querySelector('.card.row').addEventListener('click',function run(e){console.log('Card Row')});
// document.querySelectorAll('.card-body')[1].addEventListener('click',function run(e){console.log('Card Body')});

// Event Capturing or Delegation (olay yakalama) //

const cardBody=document.querySelectorAll('.card-body')[1];

cardBody.addEventListener('click',run);

function run(e){
    if(e.target.className==='fa fa-remove'){
        console.log('İşlem Silindi')
    };
    if(e.target.id==='filter'){
        console.log('Filtreleme işlemi Gerçekleşti')
    };
    if(e.target.id==='clear-todos'){
        console.log('Tüm tasklar Temizlendi')
    };

    console.log(e.target);
};


