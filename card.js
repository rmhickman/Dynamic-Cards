var cards = [];

var cardsDiv = document.getElementById('cards');
var textAreaField = document.getElementById('textArea');
var createButton = document.getElementById('createButton');


function writeToDom(strang){
	cardsDiv.innerHTML = strang;
}

function domString(cardz){
	var cardString = '';
	for (var i = 0; i<cardz.length; i++){
		var newCard = "";
		newCard +=`<div class="cardBox" id="cardBox-${i}">`
		newCard +=`<div class="cardName">${cardz[i]}</div>`
		newCard +=`<input class="cardButton" type="button" value="delete" id="deleteButton-${i}">`
		newCard +=`</div>`
		cardString += newCard;
	}
	console.log(cardString);
	writeToDom(cardString);
	createDeletes(cardz);



}


function addNewCard (cardz){
	debugger
	cardz.push(textAreaField.value);
	domString(cardz);

}

function createDeletes (cardz){
	for( var i = 0; i<cardz.length; i++){console.log(i)
		debugger
		var currentDeleteButton = document.getElementById(`deleteButton-${i}`)
		currentDeleteButton.addEventListener('click', function(e){
		var index = e.target.id.split('-')[1];
		cards.splice(index, 1);
		domString(cards);
		console.log(cards);
		})
	}

}



createButton.addEventListener('click', function(){
	addNewCard(cards);
	textAreaField.value='';
})