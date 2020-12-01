
document.getElementById('get-kitty').addEventListener('click', (e) => {
  fetch('https://dcb-heroku-app.herokuapp.com/kitty')
    .then(res => res.json())
    .then(kitty => console.log(kitty))
    .catch(console.log)
});

document.getElementById('set-kitty').addEventListener('click', (e) => {
  fetch('https://dcb-heroku-app.herokuapp.com/kitty', {
    method: 'post',
    body: JSON.stringify({ name: 'another kitty' }),
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => res.json())
    .then(kitty => console.log(kitty))
    .catch(console.log)
})