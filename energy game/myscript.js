var array = [  
   {  
      "name":"Welcher dieser Acts Stand schon auf der Stade de Suisse Bühne?",
      "number":2
   },
   {  
      "name":"Welcher DJ stand noch nie auf der Energy Air Bühne?",
      "number":2
   },
   {  
      "name":"Wann fand das Energy Air letztes Jahr statt?",
      "number":1
   },
   {  
      "name":"Welcher Energy Air Act aus den letzten Jahren stand nur mit seinem Gitarristen auf der Bühne?",
      "number":1
   },
   {  
      "name":"Welches Stadion ist das grösste der Schweiz?",
      "number":1
   },
   {  
      "name":"Wie oft pro Jahr findet das Energy Air statt? ",
      "number":3
   },
   {  
      "name":"Was bedeutet Air auf Deutsch?",
      "number":2
   },
   {  
      "name":"Wann wurde das Stade de Suisse offiziell fertig gestellt?",
      "number":1
   },
   {  
      "name":"Welcher Pop-Sänger stand in diesem Jahr schon auf der Bühne des Stade de Suisse?",
      "number":1
   },
   {  
      "name":"Welche deutsche Sängerin stand letztes Jahr auf der Energy Air Bühne?",
      "number":1
   },
   {  
      "name":"Mit welchem Künstler stand Schlangenfrau Nina Burri auf der Bühne?",
      "number":1
   },
   {  
      "name":"In welchem Jahr stand OneRepublic auf der Bühne des Energy Air?",
      "number":1
   },
   {  
      "name":"Welcher Act performte in einem Karton-Hippie-Bus?",
      "number":3
   },
   {  
      "name":"Wie heissen die beiden anderen grossen Events von Energy?",
      "number":1
   },
   {  
      "name":"Wann findet das diesjährige Energy Air statt?",
      "number":2
   },
   {  
      "name":"Was ist das Energy Air als einziger Energy Event?",
      "number":1
   },
   {  
      "name":"Wie lautet der offizielle Energy Air Hashtag?",
      "number":3
   },
   {  
      "name":"Wo findet das Energy Air statt?",
      "number":3
   },
   {  
      "name":"Wann ist offiziell Türöffnung beim Energy Air?",
      "number":1
   },
   {  
      "name":"Wie viele Sitzplätze hat das Stade de Suisse bei Sport Veranstaltungen?",
      "number":1
   },
   {  
      "name":"Wo kann man Energy Air Tickets kaufen?",
      "number":3
   },
   {  
      "name":"Zum wievielten Mal findet das Energy Air statt? ",
      "number":2
   },
   {  
      "name":"Von welchem ehemaligen Energy Air Act ist der Song «Bilder im Kopf»",
      "number":1
   },
   {  
      "name":"Welcher Act stand NOCH NIE auf der Energy Air Bühne?",
      "number":3
   },
   {  
      "name":"Wie hiess das Stade de Suisse früher?",
      "number":1
   },
   {  
      "name":"Wie viel kostet ein Energy Air Ticket?",
      "number":1
   },
   {  
      "name":"Welcher Act stand NOCH NIE auf der Energy Air Bühne?",
      "number":1
   },
   {  
      "name":"Welche Farben dominieren das Energy Air Logo?",
      "number":3
   },
   {  
      "name":"Welcher Act stand schon einmal auf der Energy Air Bühne?",
      "number":1
   },
   {  
      "name":"Wer war der letzte Act am Energy Air 2016? ",
      "number":3
   },
   {  
      "name":"In welchen Schweizer Stadt hat Energy KEIN Radiostudio?",
      "number":3
   },
   {  
      "name":"Wann fand das erste Energy Air statt?",
      "number":1
   },
   {  
      "name":"Von welchem vergangenen Energy Air Act ist der Song «Angelina»?",
      "number":1
   },
   {  
      "name":"Wie viele Zuschauer passen ins Stade de Suisse? ",
      "number":1
   },
   {  
      "name":"Wie hiess der Energy Air Song im Jahr 2014? ",
      "number":3
   },
   {  
      "name":"Wie viele Tage dauert das Energy Air? ",
      "number":3
   },
   {  
      "name":"Von wem wird das Energy Air durchgeführt?",
      "number":1
   },
   {  
      "name":"Wie viel kostet die Energy Air App? ",
      "number":2
   },
   {  
      "name":"Wie viele Tickets werden für das Energy Air verlost?",
      "number":1
   },
   {  
      "name":"Wie gross ist die Spielfläche des Stade de Suisse?",
      "number":2
   },
   {  
      "name":"Wie hiess im Jahr 2015 die Energy Air Hymne?",
      "number":1
   },
   {  
      "name":"Das Energy Air ist …?",
      "number":1
   },
   {  
      "name":"Wie viele Male standen Dabu Fantastic bereits auf der Enrgy Air Bühne?",
      "number":1
   },
   {  
      "name":"Welcher Fussballverein ist im Stade de Suisse Zuhause?",
      "number":1
   },
   {  
      "name":"Ab wann darf man am Energy Air teilnehmen?",
      "number":1
   },
   {  
      "name":"Was ist die obere Altersbeschränkung des Energy Air?",
      "number":2
   },
   {  
      "name":"In welchem Monat findet das Energy Air jeweils statt?",
      "number":2
   },
   {  
      "name":"Was für Plätze gibt es am Energy Air?",
      "number":3
   },
   {  
      "name":"In welcher Schweizer Stadt hat Energy KEIN Radiostudio?",
      "number":3
   }
]

if(document.getElementsByTagName("form").length > 0 && document.getElementsByTagName("form")[0].getAttribute("class") === "question"){
  const question = document.getElementsByTagName("h1")[0].innerHTML.trim();
  function check(element) {
    return element.name.trim() == question;
  }
  let result = array.find(check);
  document.getElementById("option"+ result.number).click();
  if(document.getElementsByClassName("round-button-circle") != null){
    document.getElementsByClassName("round-button-circle")[0].click();
  }
}

if(document.getElementsByTagName("h1").length > 0){
  switch (document.getElementsByTagName("h1")[0].innerHTML) {
    case "GEWINNE JETZT TICKETS MIT DEM ENERGY AIR GAME":
      chrome.storage.sync.get(['number'], function(items) {
        if(document.getElementById("mobile") != null){
          if(items.number){
            var actualCode = "captchaValid = true;"
            var script = document.createElement('script');
            script.textContent = actualCode;
            (document.head||document.documentElement).appendChild(script); 
            script.remove(); 
            document.getElementById("mobile").value = items.number
            document.getElementById("go").click()
          }else{
              alert("please set a number!")
          } 
        }
      })
      break;
    case "Hinter welchem Energy Air Logo versteckt sich das Ticket?":
      window.location.href = "?ticket=0";
      break;
    case "Das war das falsche Logo, knapp daneben! Versuche es erneut!":
      document.getElementsByTagName("Button")[0].click()
      break;
  }
}

if(document.getElementsByTagName("h2")[1] !== undefined && document.getElementsByTagName("h2")[1] !== "Glückwunsch!"){
  if(document.getElementsByClassName("round-button-circle")[0].innerHTML == "WEITER GEHTS!"){
    document.getElementsByClassName("round-button-circle")[0].click()
  }
}

// Teilwis verkackts dr Bot iwie (kp wiso), de muesme neustarte klicke. Hie de Teil outomatisiert
if(document.getElementsByTagName("button").length > 0) {
  if(document.getElementsByTagName("button")[0].innerHTML.trim() == "neu starten".trim()){
    document.getElementsByTagName("button")[0].click();
  }
}
