// const allTitles = document.getElementsByClassName("title");
// console.log(allTitles);
// console.log(allTitles.length);

// for (let i = 0; i < allTitles.length; i++) {
//       console.log(allTitles[i]);
// }
const titles = document.querySelectorAll("h1");
console.log(titles.length);
titles[3].className = "ttiles";
titles[3].id = "forth-title";

console.log(titles[3].className)
console.log(titles[3].id);

for (let i=0; i <titles.length; i++){
      titles[3].className = "ttiles";
titles[3].id = "forth-title";

console.log(titles[3].className)
console.log(titles[3].id);
}