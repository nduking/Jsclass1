const changeButton= document.getElementById("btn");
const pr=document.getElementById("pr");

changeButton.addEventListener("click", (event) => {
      event.preventDefault()
      console.log("Clicked");
      changeButton.classList.add("changeButton");
      pr.classList.add("changetext");
      pr.style.backgroundColor="blue";
      pr.style.color="white";
})
