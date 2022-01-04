//Koşullu durumlar (if-else)
const firstName="busenur";
const userName="bsnr2908";
const age=23;
const isStudent=true;
const school="university";
if(userName=="bsnr2908"){
    console.log("Merhaba "+firstName);
}
else{
    console.log("Kullanıcı Bulunamadi . . ");
}
if (age===23) {
    console.log("Yasiniz : "+age);
}
else{
    console.warn("u are lier");
}
if(isStudent){
    console.log("Öğrencilik durumu "+true);
}
else{
    console.log("Mesleğiniz nedir ?");
}
if (age>18) {
    if (school=="university") {
    
        console.log("Ehliyet alabilirsin");
    }
    
}
    else{
    console.log(" Eğitim durumu veya yaş nedeniyleEhliyet Alamazsın");
}

