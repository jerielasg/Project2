document.addEventListener("DOMContentLoaded", () => {
    //*********** HAMBURGER MENU *********** //
    const hamburgerButton = document.querySelector('#hamburger');
    const closeButton = document.querySelector('#close')
    const menu = document.querySelector('.slideOutNav');

    hamburgerButton.addEventListener('click', (e) => {
        menu.classList.add('open');
    });
    closeButton.addEventListener('click', (e) => {
        menu.classList.remove('open');
    })

    //************** MODAL ****************//
    const modal = document.querySelector(".modal");
    const span = document.querySelector(".spanMainClose");
    const button = document.querySelector(".modalButton");

    span.addEventListener("click", function () {
        modal.style.display = "none";
    })
    button.addEventListener("click", function () {
        modal.style.display = "none";
    });
});