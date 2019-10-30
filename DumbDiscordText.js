chiffres = {"0" : ":zero:", "1" : ":one:", "2" : ":two:", "3" : ":three:", "4" : ":four:", "5" : ":five:", "6" : ":six:", "7" : ":seven:", "8" : ":eight:", "9" : ":nine:"}

function dumbText(text) {
	text = text.toLowerCase()
	finalText = "";
	for(var i = 0; i<text.length; i++) {
		if(text[i] == " ") {
			finalText += "   ";
		}
		else if (text[i] == "?") {
			finalText += ":grey_question:";
		}
		else if (text[i] == "!") {
			finalText += ":grey_exclamation:";
		}
		else if (chiffres.hasOwnProperty(text[i])) {
			finalText += chiffres[text[i]];
		}
		else {
			finalText += ":regional_indicator_" + text[i] + ": ";
		}
	}
	document.getElementById('dummyText').innerHTML = finalText;
	console.log(finalText);
}
