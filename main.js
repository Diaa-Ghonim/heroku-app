
document.getElementById('get-kitty').addEventListener('click', (e) => {
  fetch('http://localhost:8080/kitty')
    .then(res => res.json())
    .then(kitty => console.log(kitty))
    .catch(console.log)
})