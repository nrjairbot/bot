var array = [
  {
    name: 'Wo erfährst du immer die neusten Infos rund um Energy Air?',
    answer: 'im Radio, auf der Website und über Social Media'
  },
  {
    name: 'Wie viele Acts waren beim letzten Energy Air dabei?',
    answer: '15'
  },
  {
    name: 'Wie schwer ist die Energy Air Bühne?',
    answer: '450 Tonnen'
  },
  {
    name:
      'Mit welchem dieser Tickets geniesst du die beste Sicht zur Energy Air Bühne?',
    answer: 'XTRA-Circle'
  },
  {
    name: 'Welche Fussballmannschaft ist im Stade de Suisse zuhause?',
    answer: 'BSC Young Boys'
  },
  {
    name: 'Die wievielte Energy Air Ausgabe findet dieses Jahr statt?',
    answer: 'Die fünfte'
  },
  {
    name: 'Welcher dieser Acts hatte einen Auftritt am Energy Air 2017?',
    answer: 'Aloe Blacc'
  },
  {
    name: 'Wann fand Energy Air zum ersten Mal statt?',
    answer: '2014'
  },
  {
    name: 'Wer war der letzte Act beim Energy Air 2017?',
    answer: 'Kodaline'
  },
  {
    name: 'Das NRJ-Gefährt ist ein…',
    answer: 'Tuk Tuk'
  },
  {
    name:
      'Mit welchem Preis wurde der Nachwuchsstar Luna Wedler dieses Jahr ausgezeichnet?',
    answer: 'Shootingstar Berlinale 2018'
  },
  {
    name: 'Wo findet das Energy Air statt?',
    answer: 'Stade de Suisse (Bern)'
  },
  {
    name: 'Wann findet das Energy Air 2018 statt?',
    answer: '18. September 2018'
  },
  {
    name: 'Welcher Schauspieler/Rapper trägt im Film eine goldene Maske?',
    answer: 'Cyril'
  },
  {
    name: 'Energy Air Tickets kann man…',
    answer: 'gewinnen'
  },
  {
    name:
      'Wann ist der offizielle Filmstart von DAS SCHÖNSTE MÄDCHEN DER WELT in den Schweizer Kinos?',
    answer: '6. September 2018'
  },
  {
    name: 'Wo erfährst du immer die neusten Infos rund um Energy Air?',
    answer: 'im Radio, auf der Website und über Social Media'
  },
  {
    name: 'Wer eröffnete das erste Energy Air?',
    answer: 'Bastian Baker'
  },
  {
    name: 'Was ist Cyrils (Aaron Hilmer) Markenzeichen im Film?',
    answer: 'Seine grosse Nase'
  },
  {
    name: 'Was ist Cyrils besondere Begabung?',
    answer: 'Texte schreiben und rappen'
  },
  {
    name:
      'Wer stand am letzten Energy Air als Überraschungsgast auf der Bühne?',
    answer: 'Bastian Baker'
  },
  {
    name:
      'Welcher Schweizer Shootingstar spielt in DAS SCHÖNSTE MÄDCHEN DER WELT die Hauptrolle?',
    answer: 'Luna Wedler'
  },
  {
    name: 'Wie viele Energy Air Tickets werden verlost?',
    answer: '40’000'
  },
    name: 'Wann beginnt das Energy Air 2018?',
    answer: 'Um 17 Uhr'
  },
  {
    name: 'Was passiert, wenn es am Eventtag regnet?',
    answer: 'Energy Air findet trotzdem statt'
  },
  {
    name: 'Wie reiste Kygo im Jahr 2015 ans Energy Air?',
    answer: 'Im Privatjet'
  },
  {
    name: 'Welchen Song performte Dodo am Energy Air mit den Überraschungsgästen Lo & Leduc?',
    answer: 'Für Ingwer & Ewig'
  },
  {
    name: 'Welche amerikanische Band trat am Energy Air 2016 auf?',
    answer: 'One Republic'
  },
  {
    name: 'Wie viele Mitarbeiter sind am Energy Air im Einsatz?',
    answer: '1300'
  },
  {
    name: 'Wie heisst der aktuelle Sommerhit von Energy Air Act Alvaro Soler?',
    answer: 'La Cintura'
  },
  {
    name: 'Woher kommt Energy Air Act Max Giesinger?',
    answer: 'Deutschland'
  },
  {
    name: 'Wohin führt die Klassenfahrt?',
    answer: 'Berlin'
  },
  {
    name: 'Welcher Act interviewte vor dem letzten Energy Air das Publikum?',
    answer: 'Dodo'
  },
  {
    name: 'Auf welcher Social-Media-Plattform kann man keine Energy Air Tickets gewinnen?',
    answer: 'Twitter'
  },
  {
    name: 'Wen nahm Knackeboul am Energy Air 2014 mit backstage?',
    answer: 'Sein Mami'
  },
  {
    name: 'Wie viele Konfetti-Kanonen gibt es am Energy Air?',
    answer: '60'
  },
  {
    name: 'Wer spielt die Mutter von Cyril?',
    answer: 'Anke Engelke'
  }
];
function getAnswer() {
  // if (document.getElementsByTagName('button')[5].innerHTML === 'Neustart') {
  //   location.reload();
  // } else {
  //   location.reload();
  location.reload();

  if (
    document.getElementsByTagName('h2').length == 0 &&
    document.getElementsByTagName('h3').length == 1
  ) {
    if (document.getElementsByTagName('h1').length > 1) {
      document.getElementsByTagName('button')[5].click();
    } else {
      document.getElementById('lose').click();
    }
  } else if (document.getElementsByTagName('h2').length > 0) {
    switch (document.getElementsByTagName('h2')[0].innerText) {
      case 'Hinter welchem Logo verstecken sich die Tickets?':
        document.getElementsByClassName('pulse')[5].click();
        break;
    }
  } else if (document.getElementsByTagName('h3').length > 0) {
    if (
      document.getElementsByTagName('h3')[1].innerText ==
      'Du hast die erste Hürde gepackt. Um welchen Preis möchtest du spielen?'
    ) {
      document.getElementsByTagName('button')[5].click();
    } else {
      for (var i = 0; i < array.length; i++) {
        if (document.getElementsByTagName('h3')[1].innerText == array[i].name) {
          document.getElementById(array[i].answer).click();
          document.getElementById('next-question').click();
          console.log(true);
        } else {
          console.log(false);
        }
      }
    }
  }
}

getAnswer();
