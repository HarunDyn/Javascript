// Local Storage

// localStorage.setItem('Hareket','Burpee');
// localStorage.setItem('Hareket2',50); // number kendi içinde string olarak yazıyor




// getitem
// const value=localStorage.getItem('Hareket2');
// console.log(value);

//clear Local storage
// localStorage.clear();

// localStorage.setItem('Hareket','Burpee');
// localStorage.setItem('Hareket2',50);

// console.log(localStorage.getItem('Hareket2'));

// if (localStorage.getItem('Hareket')===null){
//     console.log('Kaynak Bulunamadı');

// }
// else ( console.log('Kaynak Bulundu'));


// ****Local storage Array yazma ***// local storage sadece string kabul ettiği için array lerde ekstra işlemler gereklidir

// const todos=['todo1','todo2','todo3'];
// localStorage.setItem('todos',JSON.stringify(todos));

// console.log(JSON.parse(localStorage.getItem('todos')));


// const todos=['todo1','todo2','todo3'];

// sanki array miş gibi stringe çevrilmesi(JSON.stringify) ve array olarak geri çağrılmasını(JSON.parse) istiyorum..

// localStorage.setItem('todos',JSON.stringify(todos));

// console.log(JSON.parse(localStorage.getItem('todos')));

//
// {/* <button type="submit" class="btn btn-danger">Todo Ekleyin</button> */}


// const form=document.querySelector('#todo-form');

// const todoInput= document.querySelector('#todo');



// form.addEventListener('submit',addtodo);

// function addtodo(e){
//     const value=todoInput.value;

//     let todos;
//     if (localStorage.getItem('todos')===null){
//         todos=[];
//     }
//     else{
//         todos=JSON.parse(localStorage.getItem('todos'));

//     }

//     todos.push(value);

//     localStorage.setItem('todos',JSON.stringify(todos));

//     e.preventDefault();

// }


const form=document.querySelector('#todo-form');

const todoInput= document.querySelector('#todo');

form.addEventListener('submit',addtodo);

function addtodo(e){
        const value=todoInput.value;

        console.log(value);

        let todos;
        if(localStorage.getItem('todos')===null){
            todos=[];
        }
        else{
            todos=JSON.parse(localStorage.getItem('todos'));
        }

        todos.push(value);


        localStorage.setItem('todos',JSON.stringify(todos));



    e.preventDefault();

}


