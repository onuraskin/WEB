//arrays
let names=["onur","ali","veli","rıza"];
let years=[1990,1988,2005,2001,1999,1998,1980];
let mix=["arda","yilmaz",1990,null,undefined,["programlama","futbol"]];
console.log(names);
console.log(names.length);
console.log(typeof names);
console.log(years);
console.log(mix);
//get array item
console.log(names[2]);
//set array item
names[0]="mehmet";
console.log(names);
console.log(names.length);
names[5]="riza";//araya boş bir eleman ekler
names[names.length]="serdar";//böyle eklemek daha iyi

console.log(names);
//add item
names.push("eda");//sonuna ekleme
console.log(names);

names.unshift("baran");//başına eklemek
console.log(names);
//remove item
years.pop();//en sondaki indexsi siler
console.log(years);
years.shift();//baştaki
console.log(years);
//indexOf
 let index=names.indexOf("ali");
 console.log("index :"+index);
 //reverse diziyi ters çevir
 names.reverse();
 console.log(names);
 //sıralama sayısal
 years.sort();
 console.log(years);
 
 names.sort();
 console.log(names);

 let veri=names.concat(years);
 console.log(veri); // iki veriyi birleştirdi

 names.splice(2,1,"ahmet");//2.DEN SONRA İLK GELENİ SİL BUNU EKLE,
console.log(names);
names.splice(2,0,"qursat");//2.DEN SONRA İLK GELENİ elleme BUNU EKLE,
console.log(names);