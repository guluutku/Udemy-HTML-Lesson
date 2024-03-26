const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// Created Object
const ui = new UI();
const storage = new Storage();

// Tüm Eventleri Yükle
eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", function () {
    let films = storage.getFilmsFromStorage();
    ui.loadAllFilms(films);
  });
}

function addFilm(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === "") {
    ui.displayMessages("Tüm alanlar doldurulmalı...", "danger");
  } else {
    const newFilm = new Film(title, director, url);

    ui.addFilmToUI(newFilm);
    storage.addFilmToStorage(newFilm);
    ui.displayMessages("Film Eklendi...", "success");
  }

  ui.clearInputs(titleElement, directorElement, urlElement);
  e.preventDefault();
}
