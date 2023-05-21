// const firstName = document.getElementById("firstno").value;
// const secondName = document.getElementById("secondno").value;

function calc(event) {
      event.preventDefault();
      const firstNo = document.getElementById("firstno").value;
      const secondNo = document.getElementById("secondno").value;
      let result = Number(firstNo) + Number(secondNo);
      console.log (result);
}

function calc2(event) {
      event.preventDefault();
      const firstNo = document.getElementById("firstno").value;
      const secondNo = document.getElementById("secondno").value;
      let result = Number(firstNo) ** Number(secondNo);
      console.log (result);
}