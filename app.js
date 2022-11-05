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
        name: "lisbon"
         
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
           console.log(data.features[5]);
           //math random function
           
        //    const arr = data.features;

        const fivePlaces = [];

        for (let i = 0; i<5; i++) {
            //console.log(getRandom(data.features.length));
            const randomFive = getRandom(data.features.length);
            //console.log(data.features[randomFive]);
            fivePlaces.push(data.features[randomFive]);
        }
        console.log(fivePlaces);

        })
                
    })
    
}   
//Random 5 pull function for array
const arrLength = 100;
function getRandom(arrLength) {
    return Math.floor(Math.random() * arrLength)

}

console.log(getRandom(arrLength))


/*const arr = tripApp.baseUrl;
function pullRandom(arr, num) {
    const shuffle = [...arr].sort(() => .5 - Math.random());
    return shuffle.slice(0,num);
}


console.log(pullRandom(arr,5));
*/




// create a function to display data we got from the fetch call 
tripApp.displayPlaces = (arrayOfPlaces) => {
    // create div, h2, p, image and append
    // const placeContainer = document.getElementById()
    // const placeContainer = document.getElementById('placeList');

    // placeContainer.innerHTML = ``;
    // arrayOfPlaces.forEach(properties => {
    //     const location = document.createElement('div');

    //     const title = document.createElement('h2');
    //     title.textContent = properties.name;
    //     console.log(title);
    // })
}

// create a function with addEventlistener
tripApp.setUpEventListeners = () => {

}
    // event.preventDefault
    // user clicks on the dropdown menu, the page reloads with new results

// call init
tripApp.init();







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

