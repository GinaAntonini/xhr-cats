var cats = [
	{name: "Fluffy", color: "Green", url: "http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg"},
	{name: "Minton", color: "Gray", url: "http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg"},
	{name: "CatCat", color: "Orange", url: "http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg"}
];

var katKoralDiv = document.getElementById("kat-koral");

function domString(catArray){
	var catString = "";
	for (var i = 0; i < cats.length; i++){
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
	katKoralDiv.innerHTML = theCatString;
}

domString(cats);


