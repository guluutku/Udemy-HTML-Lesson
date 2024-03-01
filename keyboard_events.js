
// keypress
// document.addEventListener("keypress", run);
/*
function run(event){
    // console.log(event.which);
    console.log(event.key);
    // console.log("Press eventi");
}
*/

// keydown
/*
document.addEventListener("keydown", run);

function run(event){
    // console.log(event.which);
    console.log(event.key);
    // console.log("Down eventi");
}
*/

// key up
/*
document.addEventListener("keyup", run);

function run(event){
    // console.log(event.which);
    console.log(event.key);
    console.log(event.target.value)
    // console.log("Up eventi");
}
*/

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

document.addEventListener("keyup", run);

function run(event){
    header.textContent = event.target.value;
    console.log(header.textContent);
}

