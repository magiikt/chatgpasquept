let timePerLetter = 80;
let newLineCharacter = "\n";

var out = $('#output')[0];

beginSentence =  [
  "Je ne peux pas répondre pour le moment",
  "Je ne dispose pas assez d'information pour répondre",
  "Il n'est pas possible de fournir une réponse exacte",
  "J'entends bien la question",
  "Je ne comprends pas",
  "Il doit y avoir une erreur",
  "Je ne peux pas prendre en compte votre question",
  "Désolé",
  "Veuillez m'excuser",
  "Ouais ouais c'est cool",
  "Ne me parle pas",
  "Attends je te laisse",
  "Ta gueule, ta gueule",
  "Une erreur est survenue",
  "Ouais OK"
]
midSentence = [
	", ",
	", en revanche ",
	", mais ",
	", mais là franchement ",
	", par contre ",
	", cependant ",
	", compte tenu du fait que ",
	", étant donné que ",
	", car ",
	", car là ",
	", parce que là ",
	", puisque ",
	", puisque là ",
	", vu que ",
	", vu que là ",
	", mais dans les grandes lignes : ",
	", en d’autres termes : ",
	", en résumé : ",
	", en effet, ",
	", en fait ",
	", en réalité : ",
	", d’un autre côté ",
	", néanmoins ",
	", toutefois ",
	", de toute façon ",
	", actuellement ",
	", entre-temps ",
	", pour le moment ",
	", pour l’instant ",
]
endSentence = [
  "je crois que je viens de chier.",
  "je viens de chier.",
  "je crois que je me suis chié dessus.",
  "je me suis chié dessus.",
  "j'ai fait caca.",
  "j'ai la méga chiasse.",
  "je viens de faire un gros caca.",
  "j'ai laché quelques petites crottes.",
  "je sens que ce n'était pas qu'un pet.",
  "j'ai chié ma race.",
  "j'ai repeint les murs de la piece avec ma chiasse.",
  "ça dégouline...",
  "j'ai la diahrée...",
  "j'ai détruit les chiottes.",
  "vous aimez la soupe ? j'ai préparé une diahrée bien chaude.",
  "il y a de la chiasse jusque dans mes chaussures...",
  "je crois que la merde coule sur mon molet...",
  "j'ai chié un truc énorme.",
  "je viens de chier une énorme merde.",
  "j'ai laché un gros colombin.",
  "j'ai laché un étron.",
  "je n'ai pas que pété."
]

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function printOut(str) {
  var i = 0;
  (function main() {
    var char = str[i++];        
    if (char === newLineCharacter) {
        out.appendChild(document.createElement("br"));
    } else {
        out.appendChild(document.createTextNode(char));
    }
    
    if(i < str.length)
      timer = setTimeout(main, Math.random() * timePerLetter);
  })();
}

$("#input").on("keyup", function(e) {
  if (event.keyCode === 13) {
   event.preventDefault();
    go();
  }
});

document.getElementById("svg").addEventListener("click", function(event) {
    go();              
});

var timer = "";

function go() {
   var in_text = $("#input").val();
   if (!$("body").is("loader")) {
       clearTimeout(timer);
       // $("body").addClass("loader");
       $("#ok").show();
       $("#input_echo").html(in_text);
       $("#input").val("");
       $("#output").html("");
       // $.ajax({
       //     "url":"gpt.php",
       //     "type":"POST",
       //     "data": {
       //         "text": in_text
       //     },
       //     "dataType": "json",
       //     "success": function(msg) {
       //        $("body").removeClass("loader");
       //        printOut(msg.body);
       //     }
       // });
	   console.log("ok")
	   let phraseComplete = beginSentence[randomIntFromInterval(0, beginSentence.length-1)] + midSentence[randomIntFromInterval(0, midSentence.length-1)] + endSentence[randomIntFromInterval(0, endSentence.length-1)];
	   console.log(phraseComplete)
       printOut(phraseComplete);
   }
}


function launch_countdown() {

	setTimeout(function() {
		$(window).scrollTop(0);
	}, 1000);
	var currentDate = new Date();
	var nextHour = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours()+1, 0, 0);
	var countDownDate = nextHour.getTime();

	var x = setInterval(function() {
	  var now = new Date().getTime();

	  var distance = countDownDate - now;

	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	  document.getElementById("countdown").innerHTML = "GRÈVE SURPRISE !<br> On arrête le boulot !<br>La grève prendra fin dans "+minutes + "m " + seconds + "s ";

	  if (distance < 0) {
			document.location.href = document.location.href;
	  }
	}, 1000);
}


jQuery("#printer").click(function() {
   window.print(); 
});