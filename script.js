// Here we get searchBtn from the html page
const searchButton = document.querySelector("#searchBtn");

//Here we uses the variable searchButton to listen to if there happens a click even and then output the console mnessage "You clicked me!"
searchButton.addEventListener('click', function(){
	console.log("You clicked me!");
});

