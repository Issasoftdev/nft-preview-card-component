const image = document.querySelector(".card-image");
const overlay = document.querySelector(".overlay");

image.addEventListener('mouseover', function () {
    overlay.style.display = 'flex';
})

image.addEventListener('mouseout', function () {
    overlay.style.display = 'none';
})