// let veri;
// veri=window.document;
// veri=window.document.head;
// veri=window.document.body;
// veri=window.document.URL;
// veri=window.document.domain;
// veri=window.document.images;
// veri=window.document.forms;
// veri=window.document.forms[0].id;
// veri=window.document.forms[0].method;
// veri=window.document.forms[0].action;
// veri=window.document.scripts;
// veri=window.document.scripts[2];
// console.log(veri);
//---------------------------------------------- ctrlk+u
//Elementlerin Seçilmesi
//--Tek Element Seçimi--
  //document.getElemtById() method

//   let veri;
//   veri=document.getElementById("header");
//   veri=document.getElementById("header").id;
//   veri=document.getElementById("header").className;
//   veri=document.getElementById("header");
//   //veri=veri.id;//veriden direkt erişim
//   //veri=veri.className;
//   veri.style.color="blue";
//   veri.style.fontSize="50px";
//   veri.style.fontWeight="bold";
//  // veri.style.display="none";
//  //baslık değiştirme
//  document.getElementById("header").innerText="Yapılacaklar";

// document.getElementById("header").innerHTML="<b>ToDo List</b>";
//console.log(document.querySelector("#header"));
//console.log(document.querySelector(".card-header"));
//console.log(document.querySelector("div"));
// document.querySelector("li").style.color="blue";//ilk eleman
// document.querySelector("li:last-child").style.color="red";
// document.querySelector("li:nth-child(2)").style.color="red";
// document.querySelector("li").className="list-group-item list-group-item-danger";
// document.querySelector("li").classList.add("active");

//---------------------------------------------- ctrlk+u
//ÇOKLU ELEMENT SEÇİMİ

//document.getElementsByClassName()
// let veri;
//veri=document.getElementsByClassName("list-group-item");
// //sadece 1. öğe
// veri=document.getElementsByClassName("list-group-item")[0];
// veri=document.getElementsByClassName("list-group-item")[2];
//veri=veri[2];
// veri[1].style.fontSize="30px";
// veri[1].style.color="red";
// veri[1].textContent="NewS";

// for (let i = 0;i <veri.length; i++) {
//     console.log(veri[i].style.color="orange");
//     console.log(veri[i].textContent="Degis");    
// }

//document.getElementsByTagName();


// veri=document.getElementsByTagName("li");
// veri=document.getElementsByTagName("a");

//li nin içindeki a lara
//veri=document.getElementById("task-list").getElementsByTagName("a");

//document.queerySelectorAll();
// veri=document.querySelectorAll("li");
// veri.forEach(function (item,index){
//     item.textContent=`${index} -item`;
// })
// console.log(veri);



//Elementlerin Üzerinde Gezinme

// let value;
// const todoList=document.querySelector(".list-group");
// const todo=document.querySelector(".list-group-item:nth-child(2)");
// const card=document.querySelector(".card");
// value=todoList;
// value=todo;
// value=card;
//console.log(value);



//Child Nodes

// value=todoList.childNodes;//9 childı var 4ü liste ve diğeri liler
// value=todoList.children;// 4 sadece çocukları verir
// value=todoList.children[2];//3. eleman
// value=todoList.children[todoList.children.length-1];//son index
// value=todoList.children[1].textContent="Değişen Madde";

// value=card;
// value=card.children;
// value=card.children[1].children[0].textContent="Merhaba";
// value=todoList;
// //value=todoList.children[0];
// value=todoList.firstChild;//ilk cocuk
// value=todoList.lastElementChild;//son cocuk
// value=todoList.children.length;//4 cocuk
// value=todoList.childElementCount;//4 daha kısa daha pratik

// value=card;
// value=card.parentElement;//ebebeyne erişme
// value=card.parentElement.parentElement;//ebebeynin ebebeyni

// value=todo;//kardeşlerden kardeşe gezinme
// value=todo.previousElementSibling;//önceki
// value=todo.nextElementSibling;
// value=todo.nextElementSibling.nextElementSibling;//sonrakinin sonraki
// value=todo.previousElementSibling.previousElementSibling; //öncekinin öncekine gidemiyoruz çünkü ebebeyne ulaşamıyoruz
// console.log(value);





// //Element Oluşturma

// const li=document.createElement("li");
// //ad class
// li.className="list-group-item list-group-item-secondary";
// //li.id= eğer id si olsaydı yazcaktık
// //Atribute
// li.setAttribute("title","New İtem");
// li.setAttribute("data-id","5");
// const text=document.createTextNode("Todo 5");
// li.appendChild(text);//Texti li ye iletme
// const a =document.createElement("a");
// a.setAttribute("href","#");
// a.className="delete-item float-right";
// a.innerHTML='<i class="fas fa-times"></i>';
// li.appendChild(a);
// document.querySelector("#task-list").appendChild(li);


// console.log(li);


//element silme

// const taskList=document.querySelector("#task-list");
// taskList.remove();
// taskList.childNodes[7].remove();
//taskList.children[2].remove();
//taskList.removeChild(taskList.children[0]);


//Attribute Silme

//taskList.children[0].removeAttribute("class");
//tüm li lerin classlarını sildik 
// for(let i=0;i<taskList.children.length;i++){
//   taskList.children[i].removeAttribute("class");
  
// }



//Element Güncelleme

const cardHeader=document.querySelector(".card-header");
const h2=document.createElement("h2");
h2.setAttribute("class","card-header");
h2.appendChild(document.createTextNode("Yeni Listeler"));
const parent=document.querySelector(".card");
parent.replaceChild(h2,cardHeader);

//Classlarda Güncelleme
//id si task list olanı seçtik
const taskList=document.querySelector("#task-list");
let value;
link=taskList.children[0].children[0];
value=link.className;
value=link.classList;
// value=link.classList[0];
// value=link.classList[1];

link.classList.add("new");
link.classList.remove("new");


//Atribute güncelleme
value=link.getAttribute("href");
value=link.setAttribute("href","https:/instagram.com/onur.askinn");

value=link.hasAttribute("href");//varmı yok mu boolean

console.log(value);