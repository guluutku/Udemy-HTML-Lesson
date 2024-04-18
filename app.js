class Request {
  get(url) {
    // Get request

    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json)
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    });
  }
}

const request = new Request();
request.get("https://jsonplaceholder.typicode.com/albums");
