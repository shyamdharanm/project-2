const form = document.getElementById('content');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting
  
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const name=fname + '' + lname

  const address = document.getElementById('address').value;




  console.log(`Name: ${name}`);

  //to loca strg

localStorage.setItem("name",name)
localStorage.setItem("address",address)

});
