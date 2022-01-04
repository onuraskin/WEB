
// let firstName="Onur";
// let lastName="Askin";
// let firstName2="Onur";
// let lastName2="Askin";
// let levent=["Levent","Ertunalılar",37];
// let veli=["Esra","Kırbag",41];

//object Literals
let veri;
let user={
    userName:"leventert",
    firstName:"Levent",
    lastName:"Ertunalı",
    age:"37",
    hobbies:["spor","box","futbol"],
    addres:{
            city:"İstanbul",
            country:"Turkey",
            phone:"0555500000",
    }
}
veri=user;//tüm bilgiler
veri=user.firstName;
veri=user.hobbies.length;//3
veri=user.addres.country;

console.log(veri);
console.log(typeof user);