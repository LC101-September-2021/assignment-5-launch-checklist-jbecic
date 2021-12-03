// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
    /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (typeof testInput === '') {
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

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
