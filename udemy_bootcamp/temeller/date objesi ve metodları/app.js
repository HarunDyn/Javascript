let value;

const now= new Date(); // Şu an ki zamanı almamızı sağlar

// console.log(now);

const date1=new Date("10-10-1993 15:32:09");
const date2=new Date('october 10 1993');
const date3=new Date('10/10/1993');

value=date1;
value=date1.getMonth();
value=date1.getDate();
value=date1.getDay();
value=date1.getHours();
value=date1.getMinutes();
value=date1.getSeconds();

date1.setMonth(11);
date1.setDate(12);
date1.setFullYear(1992);
date1.setHours(18);
date1.setMinutes(15);
date1.setSeconds(00);
date1.setMilliseconds(0);




value=date1;



















console.log(value);


