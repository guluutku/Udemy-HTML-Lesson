const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");

const lastUsers = document.getElementById("last-users");

const github = new Github();
const ui = new UI();

eventListeners();

function eventListeners() {
  githubForm.addEventListener("submit", getData);
  clearLastUsers.addEventListener("click", clearAllSearched);
  document.addEventListener("DOMContentLoaded", getAllSearched);
  Storage.getSearchedUsersFromStorage();
}

function getData(e) {
  let username = nameInput.value.trim();

  if (username === "") {
    alert("Geçerli Kullanıcı Adı Girin");
  } else {
    github
      .getGithubData(username)
      .then(response => {
        if (response.user.message === "Not Found") {
          ui.showError("Kullanıcı Bulunamadı");
        } else {
          Storage.addSearchedUserToStorage(username);

          ui.showUserInfo(response.user);
          ui.showRepoInfo(response.repo);
        }
      })
      .catch((err) => console.log(err));
  }

  ui.clearInput();

  e.preventDefault();
}

function clearAllSearched() { }

function getAllSearched() { }
