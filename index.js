// const firstName = document.getElementById("firstno").value;
// const secondName = document.getElementById("secondno").value;

function calc(event) {
      event.preventDefault();
      const firstName = document.getElementById("firstno").value;
      const secondName = document.getElementById("secondno").value;
      let result = Number(firstName) + Number(secondName);
      console.log (result);
}

function calc2(event) {
      event.preventDefault();
      const firstName = document.getElementById("firstno").value;
      const secondName = document.getElementById("secondno").value;
      let result = Number(firstName) ** Number(secondName);
      console.log (result);
}