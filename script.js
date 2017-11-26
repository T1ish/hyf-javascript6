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
			console.log(request);
			
			//Here we take out the response text from the request result we got.
			const rawResponse = request.responseText;
			//Here we make the text to JSON so we have objects or array of objects to work with. 
			//We do this to make it easier to work with the result data
			const parsedResponse = JSON.parse(rawResponse);

			//Here we throw it out to the console to see how it looks.
			console.log(parsedResponse);

			//Since we have an article in our index.html page with the id resultRepos, we can get it and save it into a variable for further working.
			const resultRepositories = document.querySelector("#resultRepos");
			//We need to set the innerHTML for the article null. This way when we press on the button it will be reset
			// and our data will be fresh instead of adding on the old data from the previous button click.
			resultRepositories.innerHTML = null;

			//Since we know we have JSON meaning an array of objects we can run a for loop with the arrays lenght and put it on the html page
			for (var i = 0; i < parsedResponse.length; i++) {
				//Here we creates li elements
				const repoLiElement = document.createElement('li');

				//Here we put the inner html of the li element to one of the objects from the JSON
				repoLiElement.innerHTML = parsedResponse[i];
				//Here we append the filled li elements to the resultReposities so we can see the result on the html page
				resultRepositories.appendChild(repoLiElement);  
			}

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