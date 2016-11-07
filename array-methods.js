
var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var el = document.getElementById("planets");

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
planets.forEach(function inject(planet){
	console.log("Planet", planet);
	el.innerHTML += " " + "<br>" + planet;
})

// Use the map method to create a new array where the first letter of each planet is capitalized
planets.map(function capital(planet){
    var newPlanet = planet.charAt(0).toUpperCase() + planet.slice(1);
	console.log("CapitalLetter", newPlanet);
})

// Use the filter method to create a new array that contains planets with the letter 'e'
planets.filter(function eFilter(planet) {
	if (planet.search('e') >= 0 || planet.search('E') >= 0) {
		console.log("FilterForE", planet);
	}
})

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

function create(previous, current) {
	return previous + " " + current;
}

var sentence = words.reduce(create);
console.log("The New Sentence:", sentence);