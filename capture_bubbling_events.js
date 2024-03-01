// Event Bubbling
/*
document.querySelector(".container").addEventListener("click", function () {
  console.log("Div container");
});

document.querySelector(".card.row").addEventListener("click", function () {
  console.log("Card Row");
});

document.querySelector(".card-body").addEventListener("click", function () {
  console.log("card-body");
});
*/

// Event Capturing
const cardBody = document.querySelectorAll(".card-body")[1];

cardBody.addEventListener("click", run);

function run(e){
    console.log(e.target);
}
