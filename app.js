function getTxtFile() {
  fetch("example.txt")
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

function getJsonFile() { // Do same with api
  fetch("example.json")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

getJsonFile();
// getTxtFile();
