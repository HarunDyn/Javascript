// Template literal (şablon değişmezi)  ES6+(EcmaScript) ile String oluşturmada yeni standart 
const name= 'Harun Dayan';
const department='Hukuk';
const salary='4000£'

// const a='İsim: ' + name +'\n'+'Departmant: '+department+'\n'+'Maaş: '+salary;

// const a=`İsim :${name}\nDepartman :${department}\nMaaş :${salary}`; // template literal özelliğini kullandık

// const html= '<ul>'+
// '<li>'+name+'</li>'+
// '<li>'+department+'</li>'+
// '<li>'+salary+'</li>'+
// '</ul>';

// document.body.innerHTML= html;

function a(){
    return'MErhaba';
}

const html=`
<ul>
<li>${name}</li>
<li>${department}</li>
<li>${salary}</li>
<li>${10/4}</li>
<li>${a()}</li>

`

document.body.innerHTML= html;  // template literal 





console.log(a);
