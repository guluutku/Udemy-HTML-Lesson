const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit", submitForm);

function submitForm(e){
    console.log("Submit Event");

    // Disable default of the element
    e.preventDefault();
}

/*
filterInput.addEventListener("focus", function(event){
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.target.placeholder);
    console.log(event.target.className);
    // console.log("focus");
});
*/

/*
filterInput.onfocus = function(){
    console.log("Focus");
}
*/