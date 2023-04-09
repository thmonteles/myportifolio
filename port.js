
const form = document.getElementById('formulario');
const site = document.getElementById('site');
const port = document.getElementById('portifolio');
const movieform = document.querySelector('.movieform');
const movieport = document.querySelector('.movieport');
const moviesite = document.querySelector('.moviesite');


form.addEventListener("click",() => {
    form.classList.toggle('active');
    movieform.classList.toggle('active');
});
site.addEventListener("click",() => {
    form.classList.toggle('active');
    moviesite.classList.toggle('active');
});
port.addEventListener("click",() => {
    port.classList.toggle('active');
    movieport.classList.toggle('active');
});
