const buttons = document.querySelectorAll(".btn");
const button1 = document.querySelector(".btn-primary");
console.log("🚀 ~ file: index.js:3 ~ button1:", button1);

console.log(button1);

// const handleClick = () => {
//   console.log("aaaaaaaaaaaaaaaa");
// };

// button1.onclick = () => {
//   console.log(1);
// };

let myArray = Array.from(buttons);

myArray.map((item) => {
  item.onclick = (e) => {
    alert(item.innerText);
  };
});
