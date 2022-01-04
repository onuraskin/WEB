


//1.Aritmetik Operatörler
let veri;
const a=20;
const b=10;
const c=5;
let d=3;
veri=a+b;
veri=a-b;
veri=a*b;
veri=a/b;
veri=d++;
veri=++d;
veri=d--;
veri=--d;
veri=a%b;
//2.Atama Oparatörleri
veri=a;
veri+=a; //veri=veri+a;
veri-=a;
veri*=a;
veri/=a;
veri%=a;
//3. Karşılaştırma 
veri=a==b;//birbirine eşitmi? false true
veri=b==c;
veri=5=="5";//== olsa true dicek
c;
veri=5==="5";//false type boolean
veri=a!=b;//true
veri=a!==b;//true
veri=a>b;
veri=a<c;//false
veri=5>=5;//true
veri=b<=c;//false
//4. Mantıksal Oparatörler 
//&& and
veri=(a>b)&&(a>c) //true
veri=(b>a) || (a>c) //true
//!(not) değilini al
veri=!(a>b)//trueyi false yaptı







console.log(veri)
console.log(typeof veri)