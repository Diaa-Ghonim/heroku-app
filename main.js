
document.getElementById('get-kitty').addEventListener('click', (e) => {
  fetch('https://dcb-heroku-app.herokuapp.com/kitty')
    .then(res => res.json())
    .then(kitty => console.log(kitty))
    .catch(console.log)
})