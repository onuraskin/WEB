//switch

let islem = 6;
// switch (islem) {
//     case 1:
//         console.log("1 Nolu işlem yapıldı . . . . ")
//         break;
//     case 2:
//         console.log("2 Nolu işlem yapıldı . . . . ")
//         break;
//     case 3:
//         console.log("3 Nolu işlem yapıldı . . . . ")
//         break;

//     default:
//             console.log("İşlem Geçersiz . ....");
//         break;
// }
// let day;
// switch (new Date().getDay()+0) {//bir sonraki gün+1
//     case 0:
//         day = "Pazar";
//         break;
//     case 1:
//         day = "Sali";
//         break;
//     case 2:
//         day = "Sali";
//         break;
//     case 3:
//         day = "Carsamba";
//         break;
//     case 4:
//         day = "Persembe";
//         break;
//     case 5:
//         day = "Cuma";
//         break;
//     case 6:
//         day = "Cumartesi";
//         break;



//     default:
//         break;
// }
// console.log(day);
let hour = 16;
switch (true) {
    case (hour >= 6 && hour <= 12):
        console.log("Günaydın");
        break;
    case (hour >= 13 && hour <= 17):
        console.log("İyi Günler");
        break;
    case (hour >= 18 && hour <= 24):
        console.log("İyi geceler");
        break;

    default:
        console.log("Yanlış Zaman Aralığı");
        break;
}