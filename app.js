document.addEventListener("DOMContentLoaded", () => {


    //************** SubmitButtonPop ****************//
    const submitPop = document.querySelector(".selectionDropDown");
    const submitQbtn = document.querySelector(".submitQ");

    submitPop.addEventListener("click", function() {
        submitQbtn.classList.remove('submitQ');
        submitQbtn.classList.add('submitNew');
    })


    //************** MODAL ****************//

    const modalScoreSubmit = document.getElementById('submitQ');
    const modalScore = document.querySelector(".modalScore");
    const modalScoreClose = document.querySelector(".spanCloseScore");

    modalScoreSubmit.addEventListener('click', () => {
        modalScore.style.display = "block";
    })
    modalScoreClose.addEventListener('click', () => {
        modalScore.style.display ="none";
    })


    const modalContinue = document.getElementById('modalContinue');
    const modalEnd = document.querySelector(".modalEndQuestion");
    const modalQuestionClose = document.querySelector('.spanCloseQuestion');

    modalContinue.addEventListener('click', () => {
        modalEnd.style.display = "block";
        modalScore.style.display = "none";
    })
    modalQuestionClose.addEventListener('click', () => {
        modalEnd.style.display = "none";
    })

});

// API call JS 



// make a name space
const tripApp = {};

// get apikey
tripApp.apikey = `5ae2e3f221c38a28845f05b631a77b1fc7c3248c874195c075918c42`;
// Back-up tripApp.apikey = `5ae2e3f221c38a28845f05b648a8524daca09304d39973a3c974ac0f`;

// create init function & call functions below
tripApp.init = () => {
    tripApp.getPlaces();
    tripApp.setUpEventListeners();
   

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
                    
                    
                    //math random function to pull 5 random locations

                    const fivePlaces = [];

                    for (let i = 0; i < 5; i++) {
                        //console.log(getRandom(data.features.length));
                        const randomFive = getRandom(data.features.length);
                        //console.log(data.features[randomFive])
                        if (data.features[randomFive].properties.name !== "") {
                            fivePlaces.push(data.features[randomFive]);
                        } else {
                            i = i - 1
                            //console.log("isblank")
                        }
                        //console.log(data.features[randomFive]);
                      

                    }
                    
                    // console.log(fivePlaces);
                    tripApp.displayFive(fivePlaces);
                   

                })

        })

}
//Random 5 pull function for array
const arrLength = 100;
function getRandom(arrLength) {
    return Math.floor(Math.random() * arrLength)

}



// create a function to display data we got from the fetch call 
tripApp.displayPlaces = (arrayOfPlaces) => {

}
tripApp.displayFive = (arrayOfPlacesToo) => {
    // create div, h2, p, image and append
    console.log(arrayOfPlacesToo)
    const placeContainer = document.getElementById('placeList');
    var count = 0;

    placeContainer.innerHTML = ``;
    arrayOfPlacesToo.forEach(properties => {


        // const location = document.createElement('div');
        // location.classList.add(`location`);

        const title = document.createElement('h3');

        //const boxIcon = document.querySelectorAll('.fa-square');
        title.classList.add('newPlaceName', 'far', 'fa-square');
        //title.classList.add('fa-square');
        //title.classList.add('fa-check-square');
        // title.textContent = properties.properties.name;
        //title.innerHTML = `<i class="far fa-square"></i>` + "  " + properties.properties.name;
        title.innerHTML = properties.properties.name;


        placeContainer.append(title)
        //console.log(title.textContent);
        //console.log(title);
        function updateToDo(iElement) {
            iElement.classList.toggle('fa-square');
            iElement.classList.toggle('fa-check-square');
            //iElement.parentElement.classList.toggle('text-muted');
 
        }



        
        title.addEventListener("click",function(event){
            updateToDo(event.target);
            // if (title.classList.contains('.fa-square')) {
            //     count++;
            // } else {
            //     count;
            // }   
            if (count <5 && title.classList.contains("fa-check-square") == true) {
                count++;
            } else if (title.classList.contains("fa-square") == true) {
                count--;
            }
            console.log("There are", count, "/5");
            
            const score = document.querySelector('.score');
            score.textContent = count;

            const pass = document.querySelector('.pass');
            const fail = document.querySelector('.fail');

            if (count>=3) {
                pass.style.display = "block";
                fail.style.display = "none";

            } else {
                pass.style.display = "none";
                fail.style.display = "block";
            }
        })

    });
};



// create a function with addEventlistener
tripApp.setUpEventListeners = () => {
    const select = document.querySelector('#cityNames');
    select.addEventListener('change', function (event) {
        event.preventDefault();
        const chosenCity = this.value;
        tripApp.getPlaces(chosenCity);

        const photoContainer = document.getElementById('photoDisplay');
        const image = document.createElement('img');
        photoContainer.innerHTML = ``;
        image.setAttribute("src", "./assets/" + chosenCity + ".jpg");
        photoContainer.append(image)
    })

}
// event.preventDefault
// user clicks on the dropdown menu, the page reloads with new results





// call init
tripApp.init();







