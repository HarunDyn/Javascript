let value;
const firstName= 'Harun';
const lastName='Dayan';

const langs='python,js,C++'

value = firstName+' '+lastName

value = 'harun'
value += ' '+ 'Doruk' // value= value + 'Doruk'

value = firstName.length;

value = firstName.concat(' '+ lastName+' '+'Doruk') // concatenation=birleştirme

value= firstName.toLowerCase();  //harfleri küçült
value= firstName.toUpperCase(); 

value=firstName[3];
value= firstName[firstName.length-1]; // Uzunluğunu bilmediğimiz durumlarda son harfi bulmak için kullanılır 

// index.of 

value=firstName.indexOf('r');

// Char at

value=firstName.charAt('1'); 
value=firstName.charAt(firstName.length-1);

// split

value= langs.split(',');                    //   split=parçala array dizer.

//Replace yerini değiştir

value= langs.replace('js','CSS');

//İncludes

value=langs.includes('js'); //true
value=langs.includes('k'); //false


value=firstName.charAt('1');
value=firstName.indexOf('r');


value= langs.split(',');


















console.log(value);
