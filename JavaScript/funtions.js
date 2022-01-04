//Fonksiyonlar

// function nameOfFuncions(){
//     console.log("Hello !");
// }
//nameOfFuncions();
// function fwithParameters(name,age){
//     console.log(`isim : ${name} Yaş : ${age}`);
// }
// fwithParameters("Onur",34);

// function ageCalculator(bornYear){
//     return 2021-bornYear;
// }
// console.log(ageCalculator(1992));

function dLicenseSituation(bornYear,name){
        let yas=2021-bornYear;
        if (yas>=18) {
                console.log(`İsim : ${name}  Ehliyet Alabilirsiniz :${yas}`);
        }
        else{
            console.log("Ehliyet Alamazsınız ");
        }
}
dLicenseSituation(1995,"Onur");