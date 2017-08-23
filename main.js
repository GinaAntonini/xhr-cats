
function domString(catArray){
	var catString = "";
	for (var i = 0; i < catArray.length; i++){
		var catCard = catArray[i];
		catString+=`<div class="kat" id="catCard-${i}">`;
		catString+=`</div>`;
		catString+=`<h1 class="name">${catCard.name}</h1>`;
		catString+=`<h2 class="color">${catCard.color}</h2>`;
		catString+=`<img class="image" src="${catCard.url}">`;
	}
	writeToDom(catString);
}

function writeToDom(theCatString){
	var katKoralDiv = document.getElementById("kat-koral");
	katKoralDiv.innerHTML += theCatString;
}


function executeThisCodeAfterFileLoads(){
	var data = JSON.parse(this.responseText);
	domString(data.cats);
}
//here, we looked into the console, typed this.responseText and got the json info, then we typed data. the array popped up under that. Therefore we can access this array by data.cats

function exectureThisCodeIfFileErrors(){
	console.log("Shit broke");
}
var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest.addEventListener("error", exectureThisCodeIfFileErrors);
myRequest.open("GET", "cats.json");
myRequest.send();

var myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest2.addEventListener("error", exectureThisCodeIfFileErrors);
myRequest2.open("GET", "dogs.json");
myRequest2.send();
//this tells of the XML request and what to do once it's been retrieved. The last line means run the request
