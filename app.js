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
tripApp.getPlaces = (query) => {
    // get baseUrl and add new search params
    tripApp.baseUrl = new URL(`https://api.opentripmap.com/0.1/en/places/geoname`)
    tripApp.radiusUrl = new URL(`https://api.opentripmap.com/0.1/en/places/radius`)
    tripApp.infoUrl = new URL(`https://api.opentripmap.com/0.1/en/places/xid`)
    //console.log(tripApp.baseUrl);
    tripApp.baseUrl.search = new URLSearchParams({
        apikey: tripApp.apikey,
        lang: "en",
        name: query

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
                radius: 5000,
                lon: data.lon,
                lat: data.lat,
                rate: "3"
            })
            return fetch(tripApp.radiusUrl)
                .then(response => response.json())
                .then(data => {
                    //console.log(data.features[5]);
                    //math random function

                    //    const arr = data.features;

                    const fivePlaces = [];

                    for (let i = 0; i < 5; i++) {
                        //console.log(getRandom(data.features.length));
                        const randomFive = getRandom(data.features.length);
                        console.log(data.features[randomFive])
                        if (data.features[randomFive].properties.name !== "") {
                            fivePlaces.push(data.features[randomFive]);
                        } else {
                            i = i - 1
                            //console.log("isblank")
                        }
                        //console.log(data.features[randomFive]);
                        // fivePlaces.push(data.features[randomFive]);

                    }
                    // tripApp.displayFive(fivePlaces);
                    // console.log(fivePlaces);
                    tripApp.displayFive(fivePlaces);
                    /*
                    return fetch(tripApp.infoUrl)
                    .then(response => response.json())
                    .then(data => {
                        tripApp.infoUrl.search = new URLSearchParams ({
                            apikey: tripApp.apikey,
                            lang: "en",
                            xid: data.xid
                            
                            
                        })
                        tripApp.placesInfo(data.dataInfo);
                        console.log(data.dataInfo)
                    })
                    */

                })

        })

}
//Random 5 pull function for array
const arrLength = 100;
function getRandom(arrLength) {
    return Math.floor(Math.random() * arrLength)

}

// console.log(getRandom(arrLength))


/*const arr = tripApp.baseUrl;
function pullRandom(arr, num) {
    const shuffle = [...arr].sort(() => .5 - Math.random());
    return shuffle.slice(0,num);
}
console.log(pullRandom(arr,5));
*/



// console.log("HELLLLP",tripApp.displayFive);
// create a function to display data we got from the fetch call 
tripApp.displayPlaces = (arrayOfPlaces) => {
    // create div, h2, p, image and append
    // const placeContainer = document.getElementById('placeList');

    // placeContainer.innerHTML = ``;
    // arrayOfPlaces.forEach(properties => {


    //     //const location = document.createElement('div');
    //     //location.classList.add(``);

    //     const title = document.createElement('h2');
    //     title.textContent = properties.name;
    //     console.log(title);
    // })
}
tripApp.displayFive = (arrayOfPlacesToo) => {
    // create div, h2, p, image and append
    console.log(arrayOfPlacesToo)
    const placeContainer = document.getElementById('placeList');

    placeContainer.innerHTML = ``;
    arrayOfPlacesToo.forEach(properties => {


        // const location = document.createElement('div');
        // location.classList.add(`location`);

        const title = document.createElement('h3');
        title.classList.add('newPlaceName');
       // title.textContent = properties.properties.name;
        title.innerHTML = `<i class="far fa-square"></i>` +"  "+ properties.properties.name;
        placeContainer.append(title)
        //console.log(title.textContent);
        //console.log(title);
        function updateToDo(iElement) {
            iElement.classList.toggle('fa-square');
            iElement.classList.toggle('fa-check-square');
            iElement.parentElement.classList.toggle('text-muted');
        }
        title.addEventListener("click",function(event){
            updateToDo(event.target);
            console.log('hi')
        })
    })
}


//console.log("Hi", tripApp.displayFive)
// create a function with addEventlistener
tripApp.setUpEventListeners = () => {
    const select = document.querySelector('#cityNames');
    select.addEventListener('change', function (event) {
        event.preventDefault();
        const chosenCity = this.value;
        tripApp.getPlaces(chosenCity);
        
        const photoContainer = document.getElementById('photoDisplay');
        const image = document.createElement('img');
        photoContainer.innerHTML=``;
        image.setAttribute("src","./assets/"+chosenCity+ ".jpg");
        photoContainer.append(image)
    })

}
// event.preventDefault
// user clicks on the dropdown menu, the page reloads with new results



// function updateToDo(iElement) {
//     const firstClass = iElement.classList[0];
//     if (firstClass === 'far')
//      {
//         iElement.classList.toggle('fa-square');
//         iElement.classList.toggle('fa-check-square');
//         iElement.parentElement.classList.toggle('text-muted');
//     }
// }

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

//************** MODAL Subscribe ****************//
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

// placeItem.addEventListener("click", function () {

// });

//************** MODAL Alert ****************//


//************** MODAL EndQuestion ****************//


//*********** ABOUT PAGE Image Transition*********** //

// create a var that contains the images from the API
// create namespace

// create init function
// create function to pull the random image from the var
// create a timer function that pulls new rand image from the var
// create event listener(OnPageLoad)