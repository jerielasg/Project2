// API call JS 



// make a name space
const tripApp = {};

// get apikey
tripApp.apikey = `5ae2e3f221c38a28845f05b631a77b1fc7c3248c874195c075918c42`;


// Jeriel tripApp.apikey = `5ae2e3f221c38a28845f05b648a8524daca09304d39973a3c974ac0f`;
// create init function & call functions below
tripApp.init = () => {
    tripApp.getPlaces();
    tripApp.setUpEventListeners();
    //tripApp.getRadius();

}

// create a function to get data from the API
tripApp.getPlaces = () => {
    // get baseUrl and add new search params
    tripApp.baseUrl = new URL(`https://api.opentripmap.com/0.1/en/places/geoname`)
    tripApp.radiusUrl = new URL(`https://api.opentripmap.com/0.1/en/places/radius`)
     //console.log(tripApp.baseUrl);
    tripApp.baseUrl.search = new URLSearchParams ({
        apikey: tripApp.apikey,
        lang: "en",
        name: "bridge"
         
    })
    //console.log(tripApp.baseUrl);
    // call fetch  
    fetch(tripApp.baseUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        tripApp.displayPlaces(data.places);
        //fetch(tripApp.baseUrl)
        tripApp.radiusUrl.search = new URLSearchParams({
            apikey: tripApp.apikey,
            lang: "en",
            radius: 2000,
            lon: data.lon,
            lat: data.lat
        })
        return fetch(tripApp.radiusUrl)
        .then(response => response.json())
        .then(data => {
           console.log("data on second call",data);

        })
                
    })
    
}   


// create a function to display data we got from the fetch call 
tripApp.displayPlaces = () => {
    // create div, h2, p, image and append
    // const placeContainer = document.getElementById()
}

// create a function with addEventlistener
tripApp.setUpEventListeners = () => {

}
    // event.preventDefault
    // user clicks on the dropdown menu, the page reloads with new results

// call init
tripApp.init();






//*********** HAMBURGER MENU *********** //
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
    })

    // MODAL
    const modal = document.querySelector(".modal");
    const span = document.querySelector(".spanClose")
    const button = document.querySelector(".modalButton")

    span.addEventListener("click", function () {
        modal.style.display = "none";
    })

    button.addEventListener("click", function () {
        modal.style.display = "none";
    })
});




//*********** ABOUT PAGE Image Transition*********** //

// create a var that contains the images from the API
// create namespace

// create init function
// create function to pull the random image from the var
// create a timer function that pulls new rand image from the var
// create event listener(OnPageLoad)

