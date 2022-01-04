//Strings
const firstName="Onur";
const lastName="askin";
const age="26";
let hobbies="formula sinema spor kitap yazılım"
//string concatenations

veri=firstName+lastName;//Onuraskin
veri=firstName+" "+lastName;//Onur askin
veri="Levent";
veri+=" Ceza";//Levent Ceza
veri='Benim adım '+firstName+' '+lastName+' Yaşım '+age+'ve Kütahya\'da yaşıyorum';
veri=firstName.concat(' ',lastName)//Onur askin 
veri=veri.toUpperCase();//ONUR ASKIN
veri=veri.toLowerCase();

//veri=veri.substring(3,8);//  r ask
//veri=veri.slice(1,8);// nur ask
//veri=veri.indexOf("n");//1  n 1 de
veri=veri.replace("onur","Arda");//Arda askin oldu
veri=veri.length;//10
veri=hobbies.split(" ");

console.log(veri);
console.log(typeof veri);