// Create new element
// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>               

const newLink = document.createElement("a");
const cardBody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr"
newLink.target = "_blank";

// Text Content
// newLink.textContent = "Sayfaya git";

// Text Node
const text = document.createTextNode("Naber");
// cardBody.appendChild(text);
newLink.appendChild(text);
cardBody.appendChild(newLink);

console.log(newLink);
