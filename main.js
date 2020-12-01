
document.getElementById('get-kitty').addEventListener('click', (e) => {
  fetch('https://dcb-heroku-app.herokuapp.com/kitty')
    .then(res => res.json())
    .then(kitty => console.log(kitty))
    .catch(console.log)
});

document.getElementById('set-kitty').addEventListener('click', (e) => {
  fetch('https://dcb-heroku-app.herokuapp.com/kitty', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'another kitty' })

  })
    .then(res => res.json())
    .then(kitty => console.log(kitty))
    .catch(console.log)
})