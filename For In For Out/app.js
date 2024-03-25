const person = {
  name: "Gün",
  year: 1997,
  salary: 1000,
};

const langs = ["Python", "C++", "Java", "PHP"];

const name = "Gun";

/*
// For In
for (let prop in person) {
  console.log(prop, person[prop]);
}

// Array
for (let index in langs) {
  console.log(index, langs[index]);
}

// String
for (let index in name) {
  console.log(index, name[index]);
}
*/

// For Of

// Object
for (let value of person) {
  // Error: Person is not Iterable
  console.log(value);
}

for (let value of langs) {
  console.log(value);
}

// String
for (let character of name) {
  console.log(character);
}
