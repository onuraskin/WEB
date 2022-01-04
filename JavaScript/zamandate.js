//Date Objects
let zaman=new Date();
let birthday=new Date(1995,4,25);

//set Methotds
zaman.setDate(25);
zaman.setMonth(3);//april
//zaman.setFullYear(2024);
zaman.setHours(15);
//get methods ayları 0 dan sayar dikklat !
console.log(zaman.getMonth());
console.log(zaman.getDate());
console.log(zaman.getFullYear());
console.log(zaman.getDay());
console.log(zaman.getTime());
console.log(zaman.getHours());
console.log(zaman.getMinutes());
console.log(zaman.getSeconds());
console.log(zaman.getMilliseconds());

console.log((zaman.getFullYear())-birthday.getFullYear());
console.log(zaman.getMonth()-birthday.getMonth());















console.log(zaman);
console.log(typeof zaman);


