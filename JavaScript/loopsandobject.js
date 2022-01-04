//Dizi ve Objelerde Döngü kullanımı
let citys = ["İstanbul", "İzmir", "Ankara", "Eskişehir"];
//obje
let users=[
    {firstname:"Aslı",lastName:"Yılmaz"},
    {firstname:"Kerem",lastName:"Bilgin"},
    {firstname:"Tolga",lastName:"Mertoğlu"},
    {firstname:"Selin",lastName:"Şahin"},

]

// for (let i = 0; i < citys.length; i++) {
//     console.log(citys[i]);
// }

// for(let i in citys){
//     console.log(`index:${i} value:${citys[i]}`);
// }
// citys.forEach(function(item) {
//   console.log(item)  
// });

// for(let i = 0; i < users.length; i++) {
//     console.log(users[i].firstname);
//     console.log(users[i].lastName);
//     console.log(users[i]);
// }
// for(let i in users){
//     console.log(`index: ${i} value : ${users[i].firstname}`);
// }
// for(let i in users){
//     console.log(`index: ${i} value : ${users[i].lastName}`);
// }
//map: returns an array
let veri=users.map(function(item){
    return item.firstname+" "+item.lastName
});
console.log(veri);

let numbers=[1,3,5,9,12];
let num=numbers.map(function(n){
    return n*n;
});
console.log(num)