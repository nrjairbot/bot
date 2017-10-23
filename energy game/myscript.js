var array = [
   {
      "name":"Welcher maskierte Act war vor zwei Jahren an der Energy Star Night dabei?",
      "number":3
   },
   {
      "name":"In welchen 3 Städten findest du unsere Radiostudios?",
      "number":3
   },
   {
      "name":"Zum wievielten Mal findet die Energy Star Night statt?",
      "number":2
   },
   {
      "name":"Unter welchem Motto findet die diesjährigen Energy Star Night statt?",
      "number":3
   },
   {
      "name":"Auf welchem dieser Portale kann man keine Tickets gewinnen",
      "number":3
   },
   {
      "name":"Sunrise Avenue wird das Publikum an der diesjährigen Energy Star Night mitreissen. In welchen Jahren performten sie bereits an der Energy Star Night?",
      "number":3
   },
   {
      "name":"In welchem Jahr fand die erste Ausgabe des Energy Stars For Free statt?",
      "number":3
   },
   {
      "name":"Welcher Preis wird an der Energy Star Night vergeben?",
      "number":1
   },
   {
      "name":"Wie oft stand der Schweizer Act Bligg bereits auf der Energy Star Night Bühne?",
      "number":1
   },
   {
      "name":"Welche zwei Schweizer Acts performten 2016 gemeinsam auf der Energy Star Night Bühne?",
      "number":1
   },
   {
      "name":"Was für Acts spielen jeweils auf der Bühne der Energy Star Night?",
      "number":3
   }
]

function answerQuestion() {
	if(document.getElementById("answers") != null){
		var question = document.getElementsByTagName("h3")[1].innerHTML.trim();
		function check(element) {
			return element.name.trim() == question;
		}
		var result = array.find(check);
		if(result == undefined){
			result = {"number": 1};
		}
	  
		// Set answer
		var answerElements = document.getElementsByName("answers");
		for(i = 0; i < answerElements.length; i++) {
			if(answerElements[i].defaultValue == (result.number - 1)) {
				answerElements[i].click();
				break;
			}
		}
	  
		if(document.getElementById("next-question") !== null){
			document.getElementById("next-question").click();
		}
	}
	
	if(document.getElementsByTagName("h1")[1].innerHTML.trim() == "Leider verloren"){
		document.getElementsByClassName("btn btn-primary game-button btn-lg")[0].click();
	}
}
answerQuestion();