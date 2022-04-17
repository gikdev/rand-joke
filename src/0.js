const joke_parag = document.querySelector('#joke_parag');
const generate_btn = document.querySelector('#generate_btn');
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
const get_joke = () => {
  fetch(url)
    .then(data => data.json())
    .then(item => {
      if (item.type === 'single') joke_parag.innerHTML = item.joke;
      if (item.type === 'twopart') joke_parag.innerHTML = `${item.setup} <br> ${item.delivery}`;
    })
}
generate_btn.addEventListener('click', get_joke);
document.addEventListener('DOMContentLoaded', get_joke);