// Write your JavaScript code here!

//const { formSubmission } = require("./scriptHelper");
//const { validateInput } = require("./scriptHelper");

window.addEventListener("load", function() {

    function validateInput(testInput) {
        if (testInput === '') {
            return 'Empty';
        }
        if (isNaN(testInput) === true) {
            return 'Not a Number';
        }
        if (isNaN(testInput) === false) {
            return 'Is a Number';
        }
    }
    
    function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) { 
        const doc = document;
        const lis = list;
        const form = doc.querySelector(lis);
        const pil = validateInput(form[pilot].value);
        const copil = validateInput(form[copilot].value);
        const fuel = validateInput(form[fuelLevel].value);
        const cargo = validateInput(form[cargoLevel].value);
        const arr = [pil, copil, fuel, cargo];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 'Empty') {
                return window.alert('Please fill in all fields.');
            } 
        }
        for (let i = 0; i < 2; i++) {
            if (arr[i] === 'Is a Number') {
                return window.alert('Pilot and Co-pilot cannot be numbers. Please enter in a new value.');
            }
        }
        for (let i = 2; i < 4; i++) {
            if (arr[i] === 'Not a Number') {
                return window.alert('Fuel level and cargo level must be numbers. Please enter in a new value.');
            }
        }
        return faultyItems();
    }

    function faultyItems() {
        const faultyItems = document.getElementById('faultyItems');
        const form = document.querySelector('[data-testid=testForm]');
        const pilot = form['pilotName'].value;
        const copilot = form['copilotName'].value;
        const fuelLevel = form['fuelLevel'].value;
        const cargoMass = form['cargoMass'].value;
        const launchStatus = document.getElementById('launchStatus');
        const pilotStatus = document.getElementById('pilotStatus');
        const copilotStatus = document.getElementById('copilotStatus');
        const fuelStatus = document.getElementById('fuelStatus');
        const cargoStatus = document.getElementById('cargoStatus');

        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch.`;

        if (fuelLevel < 10000) {
            faultyItems.style.visibility = 'visible';
            fuelStatus.innerHTML = 'There is not enough fuel for the journey!';
            launchStatus.innerHTML = 'Shuttle not ready for launch!';
            launchStatus.style.color = 'red';
        }

        if (cargoMass > 10000) {
            faultyItems.style.visibility = 'visible';
            cargoStatus.innerHTML = 'There is too much mass for the shuttle to take off!';
            launchStatus.innerHTML = 'Shuttle not ready for launch!';
            launchStatus.style.color = 'red';
        }

        if (fuelLevel >= 10000 && cargoMass <= 10000) {
            faultyItems.style.visibility = 'visible';
            fuelStatus.innerHTML = 'There is enough fuel for the journey.';
            cargoStatus.innerHTML = 'There is not too much mass for the shuttle to take off.';
            launchStatus.innerHTML = 'Shuttle is ready for launch!';
            launchStatus.style.color = 'green';
        }
    }

    function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
        // Here is the HTML formatting for our mission target div.
        const doc = document;
        const missionTarget = doc.getElementById('missionTarget');
        missionTarget.innerHTML = `
                    <h2>Mission Destination</h2>
                    <ol>
                        <li><span>Name: ${name}</span></li>
                        <li id='diameter'><span>Diameter: ${diameter} </span></li>
                        <li><span>Star: ${star}</span></li>
                        <li><span>Distance from Earth: ${distance} </span></li>
                        <li><span>Number of Moons: ${moons} </span></li>
                    </ol>
                    <img src="${imageUrl}">
        `;
    }

    // async function myFetch() {
    //     let planetsReturned;
    
    //     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {response.json();});
    
    //     return planetsReturned;
    // }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function pickPlanet(planets) {
        return planets[getRandomInt(planets.length)];
    }

    document.getElementById('formSubmit').addEventListener('click', () => {
        //const form = document.querySelector('[data-testid=testForm]'); //used to get form
        //console.log((form['copilotName'].value)); // can use element ids to select item in form array
        formSubmission(document, '[data-testid=testForm]', 'pilotName', 'copilotName', 'fuelLevel', 'cargoMass');
        event.preventDefault();
    })

//     let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//     let listedPlanetsResponse = myFetch();
//     listedPlanetsResponse.then(function (result) {
//         listedPlanets = result;
//         console.log(listedPlanets);
//     }).then(function () {
//         console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//         const planet = pickPlanet(listedPlanets);
//         addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
//     })
    const fetchPromise = fetch("https://handlers.education.launchcode.org/static/planets.json");
    fetchPromise.then(function(response) {
        const jsonPromise = response.json();
        jsonPromise.then(function(json) {
            console.log(json);
            const planet = pickPlanet(json);
            addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
        })
    })

});