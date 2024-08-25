const data = [
  "Python",
  "Java",
  "JavaScript",
  "React",
  "NodeJS",
  "VueJS",
  "Ruby on Rails",
  "Visual Studio Code",
];

const search = document.getElementById("search");
const output = document.getElementById("output");

search.onkeyup = function () {
  let word = search.value;
  let result = [];
  if (word.length) {
    result = data.filter((value) => {
      return value.toLocaleLowerCase().includes(word.toLocaleLowerCase());
    });
  }

  if (result.length > 0) {
    const content = result.map((value) => {
      return "<li onclick=selectChoice(this)>" + value + "</li>";
    });
    output.innerHTML = "<ul>" + content.join("") + "</ul>";
  } else {
    output.innerHTML = "";
  }
};

function selectChoice(word) {
  search.value = word.innerHTML;
}
