//numbers
let veri;
// veri=Number("5");
// veri=parseInt("5");
// veri=parseFloat("5.123");
// veri=parseInt("5C")//sadece 5 dönüşür c yi görmez
// veri=parseInt("C5");//not a number NaN
// veri=isNaN("c5");//true
// veri=isNaN("5");
var sayi=15.12416123;
veri=sayi.toPrecision(3);//soldan itibaren 3 basaman 15.1
veri=sayi.toFixed(3)//virgülden sonra 3 basamak
veri=Math.PI;
veri=Math.round(3.5);// 4 Yuvarladı
veri=Math.ceil(3.2);//Yukarı yuvarlar 4
veri=Math.floor(8.4);//aşşağı vurlar 8
veri=Math.pow(3,2);//9
veri=Math.sqrt(9);//3
veri=Math.abs(-50);//50
veri=Math.min(1,23,54,5,6,7,87);//1 en kücük
veri=Math.max(1,2,45,6,75,57,8,898);//898 en kücük
veri=Math.random();//0 la 1 arası
veri=Math.random()*10;//0 la 10 arası
veri=Math.floor(Math.random()*10);//0-10 arası random ama floorlu







console.log(veri);
console.log(typeof veri);