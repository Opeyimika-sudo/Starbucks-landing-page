const firstImage = document.querySelector('#img1');
const secondImage = document.querySelector('#img2');
const thirdImage = document.querySelector('#img3');
const background = document.querySelector('#green-bg');
const heroImage = document.querySelector('#hero-img');

firstImage.addEventListener('click', () => {
    background.style.cssText = "background-color: #017143"
    heroImage.src= "images/img1.png";
})

secondImage.addEventListener('click', () => {
    background.style.cssText = "background-color: #eaa6b8;"
    heroImage.src= "images/img2.png";
})

thirdImage.addEventListener('click', () => {
    background.style.cssText = "background-color: #ac2483;"
    heroImage.src= "images/img3.png";
})