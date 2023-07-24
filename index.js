const buttons = document.querySelectorAll(".btn");

buttons.forEach((item) => {
  item.onclick = () => {
    alert(item.innerText);
  };
});
