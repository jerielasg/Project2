// make a name space
    // ex. const destinationApp = {};

// get apikey
    // destinationApp.apikey =

// create init function & call functions below


// create a function to get data from the API
    // ex. destinationApp.getPlaces
    // get baseUrl and add new search params
    // call fetch   

// create a function to display data we got from the fetch call 
    // create div, h2, p, image and append


// create a function with addEventlistener
    // event.preventDefault
    // user clicks on the dropdown menu, the page reloads with new results

// call init
// ex. destinationApp.init();

document.addEventListener("DOMContentLoaded", () => {
    // NAV BAR
    const hamburgerButton = document.querySelector('#hamburger');
    const closeButton = document.querySelector('#close')
    const menu = document.querySelector('.slideOutNav');

    hamburgerButton.addEventListener('click', (e) => {
        menu.classList.add('open');
    });
    closeButton.addEventListener('click', (e) => {
        menu.classList.remove('open');
    });   
});