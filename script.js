// Here we get searchBtn from the html page
const searchButton = document.querySelector("#searchBtn");

//Here we uses the variable searchButton to listen to if there happens a click even and then output the console mnessage "You clicked me!"
searchButton.addEventListener('click', function(){
	// Using the console to find out that we have out addEventListener function working when you click on the button and this message comes out.
	console.log("You clicked me!");

	//We are saving the url for what we want to process in the variable url
	const url = "https://api.github.com/orgs/HackYourFuture/repos";

	//Since we are going to make a XMLHttpRequest let's save it into the request variable so we can work with it's result.
	const request = new XMLHttpRequest();

	//Here we listen to when something is loaded when we do the XMLHttpRequest call.
	request.addEventListener('load', function(){
		//Here we check if everything is all fine. It's fine with we get 200 from HTTP.
		if(this.status === 200){
			//Always check if you get something by output to console. After that you continue working with the request result.
//			console.log(request);
			
			//Here we take out the response text from the request result we got.
			const rawResponse = request.responseText;
			//Here we make the text to JSON so we have objects or array of objects to work with. 
			//We do this to make it easier to work with the result data
			const parsedResponse = JSON.parse(rawResponse);

			//here we throw it out to the console to see how it looks.
			console.log(parsedResponse);
		} else {
			console.log("Something is wrong cuz I'm not getting data!");
		}
	});

	//Here we listen to when something wrong happens and we get an error. We output a message to tell us that we have an error.
	request.addEventListener('error', function(){
		console.log("Some error happened!");
	});
	
	//Here we put url as arguement into the open function of XMLHttpRequest which we saved in request variable. 
	//We also tell that we want to get something from that url.
	request.open('GET', url);

	//Here we send the XMLHttpRequest to the url to get a response so we can have the addEventListener from before to start working.
	request.send();
	
});




