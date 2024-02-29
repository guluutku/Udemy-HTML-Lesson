
// const element = document.querySelector("#clear-todos");
// Element Özellikleri
/*
console.log(element.id);
console.log(element.className);
console.log(element.classList);
console.log(element.classList[0]);
console.log(element.textContent);
console.log(element.innerHTML);
console.log(element.href);
console.log(element.style);
*/

// Style ve Element Özelliklerini Değiştime
/*
element.className = "btn btn-primary";
element.style.color = "#000";
element.style.marginLeft = "5px";
element.href = "https://www.google.com.tr";
element.target = "_blank"; // Open href in a new tab
element.textContent = "Silin";
element.textContent = "<span>Silin</span>"; // normal text, not HTML element
element.innerHTML = "<span style='color:red'>Silin</span>"

console.log(element.textContent);
*/

/*
const elements = document.querySelectorAll(".list-group-item"); // Node List
elements.forEach(function(el){
    el.style.color = "red";
    el.style.backgroundColor = "#eee";
});
console.log(elements);
*/

let element2 = document.querySelector("li:first-child");
let element3 = document.querySelector("li:last-child");
let element4 = document.querySelector("li:nth-child(3)");
let element5 = document.querySelectorAll("li:nth-child(odd)");
let element6 = document.querySelectorAll("li:nth-child(even)");

element6.forEach(function(el){
    el.style.color = "#ccc";
    el.style.backgroundColor = "#fff"
});

console.log(element2);
console.log(element3);
console.log(element4);
console.log(element5);
console.log(element6);
