function getTxtFile() {
  fetch("example.txt")
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

function getJsonFile(){}

// getTxtFile();
