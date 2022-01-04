//Scope Kavramı

//Global Scope


//Function Scope
function a() {

}
if (true) {
    //Block Scope    
}

var data1 = 5;//Global Scope   FuncScope>globalScope
let data2 = 10;
const data3 = 15;
/////////////////////////////////
// function func() {
//     var data1 = 30;
//     let data2 = 40;
//     const data3 = 50;
//     console.log(data1, data2, data3);
// }
// func();
// console.log(data1, data2, data3);
// if (true) {
//     var a = 30; // blok içinde var kullanırsak dışardada geçerli
//     let data2 = 40;
//     const data3 = 50;
//     console.log(a, data2, data3);
// }
// console.log(a, data2, data3);

if (true) {
    var data1 = 30; // blok içinde var kullanırsak dışardada geçerli
    let data2 = 40;
    const data3 = 50;
    console.log(data1, data2, data3);
}
console.log(data1, data2, data3);


var admin_password="12345"
if (true) {
    var admin_password="1234566"
}//sakıncalı bir durum var yerine let veya const kullan





