
const timeout = 1000;
for (let i = 0; i < 20; i++) {
  setTimeout(() => {
    console.log('app is instanitiated')
  }, i * timeout);

}