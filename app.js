const card = document.querySelector(".card__inner");
const submitBtn = document.querySelector('userDate__button')

card.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
});

document.addEventListener('DOMContentLoaded', () => {
    sendApiRequest();
})



async function sendApiRequest() {
    const API_KEY = "MctGerdPwb4ifUdu9fRT2e6qu0ckjaQvQl4dK2cF";

    card.classList.add('_sending')
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    let data = await response.json();


    useApiData(data);
    card.classList.remove('_sending')
};

function useApiData(data) {

    document.querySelector('.card__body').innerHTML = data.explanation;
    document.querySelector('.card__face').innerHTML = `<img src ="${data.url}">`;
    document.querySelector('.card__header h2').innerHTML = data.title;
};

// like button
const likeBtn = document.querySelector('.like__btn');
const likeIcon = document.querySelector('.like__icon');
const likeHeart = document.querySelector('.like__heart');

let clicked = true;
likeBtn.addEventListener('click', () => {
    if (!clicked) {
        clicked = true;
        likeHeart.innerHTML = `<i class="far fa-heart"></>`
        likeIcon.innerHTML = `Like Me`
    } else {
        clicked = false;
        likeHeart.innerHTML = `<i class="fas fa-heart"></>`
        likeIcon.innerHTML = `Liked !!!`
    }
})
