const color0 = "#FF5D5B";
const color0a = "#FF5D5B66";
const color1 = "#FF7F00";
const color1a = "#FF7F0066";
const color2 = "#F6F243";
const color2a = "#F6F24366";
const color3 = "#51D347";
const color3a = "#51D34766";
const color4 = "#78A5E3";
const color4a = "#78A5E366";


let shellsList = shellsListP;
let qs = qsP;
let csList = csListP;
let wCultivation = wCultivationP;
let wProduction = wProductionP;
let wFunction = wFunctionP;
let wDirection = wDirectionP;
let wDreaming = wDreamingP;
let wBehaving = wBehavingP;
let wStriving = wStrivingP;
let wRisking = wRiskingP;
let wCohering = wCoheringP;
let wRecruiting = wRecruitingP;
let wPursuing = wPursuingP;
let wReviewing = wReviewingP;
let wMandate = wMandateP;
let wProgram = wProgramP;
let wTime = wTimeP;
let wSpace = wSpaceP;


let currQ = 0;
let cCultivation = 0;
let cProduction = 0;
let cFunction = 0;
let cDirection = 0;
let cDreaming = 0;
let cBehaving = 0;
let cStriving = 0;
let cRisking = 0;
let cCohering = 0;
let cRecruiting = 0;
let cPursing = 0;
let cReviewing = 0;
let cMandate = 0;
let cProgram = 0;
let cTime = 0;
let cSpace = 0;
let makeRand = 1;

let allAns = [];
let allPickedAns = [];

function loadQues() {
	if (currQ == 0) {
		document.getElementById("backbtn").innerText = "Quit & Return to Home";
	} else {
		document.getElementById("backbtn").innerText = "Back";
	}

	var unclicked = true;

	const qNum = document.getElementById('qNum')
	const ques = document.getElementById("ques");
	const opt = document.getElementById("opt");
	const optshell = document.getElementById("optshell");
	qNum.innerText = "QUESTION " + (currQ + 1) + "/" + qs.length + ":";
	let currentQuestion = qs[currQ];
	ques.innerText = currentQuestion;
	
	opt.innerHTML = "";
	optshell.innerHTML = "";

	for (var i = 0; i < csList[currQ].length; i++) {
		let option = csList[currQ][i]
		const choicesdiv = document.createElement("div");
		choicesdiv.id = "choiceDivNum" + i;
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
        choice.id = "choiceNum" + i;
        choiceLabel.htmlFor = "choiceNum" + i;
        choiceLabel.textContent = option;

        // In order for a prettier outline, an inner div wrapper is used
        const wrapdiv = document.createElement("div");
        wrapdiv.type = "choiceWrapDiv";
        wrapdiv.id = "choiceWrapDiv" + i; 

        choicesdiv.appendChild(wrapdiv)
        wrapdiv.appendChild(choice);
        wrapdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
	}
	if (shellsList.includes(currQ+1)) {
		optshell.append(document.getElementById("choiceDivNum4"));
		document.getElementById("choiceWrapDiv4").classList.add("optWrap")
		for (var i = csList[currQ].length - 1; i > 0; i--) {
			document.getElementById("choiceWrapDiv" + i).prepend(document.getElementById("choiceDivNum" + (i - 1)));
			document.getElementById("choiceWrapDiv" + i).classList.add("optWrap")
		}
		document.getElementById("choiceWrapDiv0").classList.add("optWrap");

		document.getElementById("choiceNum0").onclick = function() {
			document.getElementById("choiceDivNum0").classList.add('active');
			document.getElementById("choiceDivNum0").classList.remove('inactive');
			document.getElementById("choiceWrapDiv0").classList.add('active');
			for (var i = 0; i < csList[currQ].length; i++) {
				if (i != 0) {
					document.getElementById("choiceDivNum" + i).classList.remove('active');
					document.getElementById("choiceWrapDiv" + i).classList.remove('active');
					document.getElementById("choiceDivNum" + i).classList.add('inactive');
				}
				document.querySelector('label[for="choiceNum'+i+'"]').style.opacity = "1";
				document.getElementById("choiceDivNum" + i).classList.remove('transparency');
			}
			unclicked = false;
		}
		document.getElementById("choiceNum1").onclick = function() {
    		document.getElementById("choiceDivNum1").classList.add('active');
			document.getElementById("choiceDivNum1").classList.remove('inactive');
			document.getElementById("choiceWrapDiv1").classList.add('active');
			for (var i = 0; i < csList[currQ].length; i++) {
				if (i != 1) {
					document.getElementById("choiceDivNum" + i).classList.remove('active');
					document.getElementById("choiceWrapDiv" + i).classList.remove('active');
					document.getElementById("choiceDivNum" + i).classList.add('inactive');
				}
				document.querySelector('label[for="choiceNum'+i+'"]').style.opacity = "1";
				document.getElementById("choiceDivNum" + i).classList.remove('transparency');
			}
			unclicked = false;
		}
		document.getElementById("choiceNum2").onclick = function() {
    		document.getElementById("choiceDivNum2").classList.add('active');
			document.getElementById("choiceDivNum2").classList.remove('inactive');
			document.getElementById("choiceWrapDiv2").classList.add('active');
			for (var i = 0; i < csList[currQ].length; i++) {
				if (i != 2) {
					document.getElementById("choiceDivNum" + i).classList.remove('active');
					document.getElementById("choiceWrapDiv" + i).classList.remove('active');
					document.getElementById("choiceDivNum" + i).classList.add('inactive');
				}
				document.querySelector('label[for="choiceNum'+i+'"]').style.opacity = "1";
				document.getElementById("choiceDivNum" + i).classList.remove('transparency');
			}
			unclicked = false;
		}
		document.getElementById("choiceNum3").onclick = function() {
    		document.getElementById("choiceDivNum3").classList.add('active');
			document.getElementById("choiceDivNum3").classList.remove('inactive');
			document.getElementById("choiceWrapDiv3").classList.add('active');
			for (var i = 0; i < csList[currQ].length; i++) {
				if (i != 3) {
					document.getElementById("choiceDivNum" + i).classList.remove('active');
					document.getElementById("choiceWrapDiv" + i).classList.remove('active');
					document.getElementById("choiceDivNum" + i).classList.add('inactive');
				}
				document.querySelector('label[for="choiceNum'+i+'"]').style.opacity = "1";
				document.getElementById("choiceDivNum" + i).classList.remove('transparency');
			}
			unclicked = false;
		}
		document.getElementById("choiceNum4").onclick = function() {
    		document.getElementById("choiceDivNum4").classList.add('active');
			document.getElementById("choiceDivNum4").classList.remove('inactive');
			document.getElementById("choiceWrapDiv4").classList.add('active');
			for (var i = 0; i < csList[currQ].length; i++) {
				if (i != 4) {
					document.getElementById("choiceDivNum" + i).classList.remove('active');
					document.getElementById("choiceWrapDiv" + i).classList.remove('active');
					document.getElementById("choiceDivNum" + i).classList.add('inactive');
				}
				document.querySelector('label[for="choiceNum'+i+'"]').style.opacity = "1";
				document.getElementById("choiceDivNum" + i).classList.remove('transparency');
			}
			unclicked = false;
		}

		document.querySelector('label[for="choiceNum0"]').onmouseenter = function() {
			if (unclicked) {
				document.getElementById("choiceDivNum1").classList.add('transparency');
				document.getElementById("choiceDivNum2").classList.add('transparency');
				document.getElementById("choiceDivNum3").classList.add('transparency');
				document.getElementById("choiceDivNum4").classList.add('transparency');
				document.querySelector('label[for="choiceNum1"]').style.opacity = "0.3";
				document.querySelector('label[for="choiceNum2"]').style.opacity = "0.3";
				document.querySelector('label[for="choiceNum3"]').style.opacity = "0.3";
				document.querySelector('label[for="choiceNum4"]').style.opacity = "0.3";
			} 
		}
		document.querySelector('label[for="choiceNum0"]').onmouseleave = function() {
			if (unclicked) {
				document.getElementById("choiceDivNum1").classList.remove('transparency');
				document.getElementById("choiceDivNum2").classList.remove('transparency');
				document.getElementById("choiceDivNum3").classList.remove('transparency');
				document.getElementById("choiceDivNum4").classList.remove('transparency');
				document.querySelector('label[for="choiceNum1"]').style.opacity = "1";
				document.querySelector('label[for="choiceNum2"]').style.opacity = "1";
				document.querySelector('label[for="choiceNum3"]').style.opacity = "1";
				document.querySelector('label[for="choiceNum4"]').style.opacity = "1";
			} 
		}
		document.querySelector('label[for="choiceNum1"]').onmouseenter = function() {
			if (unclicked) {
				document.getElementById("choiceDivNum0").classList.add('transparency');
				document.getElementById("choiceDivNum2").classList.add('transparency');
				document.getElementById("choiceDivNum3").classList.add('transparency');
				document.getElementById("choiceDivNum4").classList.add('transparency');
				document.querySelector('label[for="choiceNum0"]').style.opacity = "0.3";
				document.querySelector('label[for="choiceNum2"]').style.opacity = "0.3";
				document.querySelector('label[for="choiceNum3"]').style.opacity = "0.3";
				document.querySelector('label[for="choiceNum4"]').style.opacity = "0.3";
			} 
		}
		document.querySelector('label[for="choiceNum1"]').onmouseleave = function() {
			if (unclicked) {
				document.getElementById("choiceDivNum0").classList.remove('transparency');
				document.getElementById("choiceDivNum2").classList.remove('transparency');
				document.getElementById("choiceDivNum3").classList.remove('transparency');
				document.getElementById("choiceDivNum4").classList.remove('transparency');
				document.querySelector('label[for="choiceNum0"]').style.opacity = "1";
				document.querySelector('label[for="choiceNum2"]').style.opacity = "1";
				document.querySelector('label[for="choiceNum3"]').style.opacity = "1";
				document.querySelector('label[for="choiceNum4"]').style.opacity = "1";
			} 
		}
		document.querySelector('label[for="choiceNum2"]').onmouseenter = function() {
			if (unclicked) {
				document.getElementById("choiceDivNum0").classList.add('transparency');
				document.getElementById("choiceDivNum1").classList.add('transparency');
				document.getElementById("choiceDivNum3").classList.add('transparency');
				document.getElementById("choiceDivNum4").classList.add('transparency');
				document.querySelector('label[for="choiceNum0"]').style.opacity = "0.3";
				document.querySelector('label[for="choiceNum1"]').style.opacity = "0.3";
				document.querySelector('label[for="choiceNum3"]').style.opacity = "0.3";
				document.querySelector('label[for="choiceNum4"]').style.opacity = "0.3";
			} 
		}
		document.querySelector('label[for="choiceNum2"]').onmouseleave = function() {
			if (unclicked) {
				document.getElementById("choiceDivNum0").classList.remove('transparency');
				document.getElementById("choiceDivNum1").classList.remove('transparency');
				document.getElementById("choiceDivNum3").classList.remove('transparency');
				document.getElementById("choiceDivNum4").classList.remove('transparency');
				document.querySelector('label[for="choiceNum0"]').style.opacity = "1";
				document.querySelector('label[for="choiceNum1"]').style.opacity = "1";
				document.querySelector('label[for="choiceNum3"]').style.opacity = "1";
				document.querySelector('label[for="choiceNum4"]').style.opacity = "1";
			} 
		}
		document.querySelector('label[for="choiceNum3"]').onmouseenter = function() {
			if (unclicked) {
				document.getElementById("choiceDivNum0").classList.add('transparency');
				document.getElementById("choiceDivNum1").classList.add('transparency');
				document.getElementById("choiceDivNum2").classList.add('transparency');
				document.getElementById("choiceDivNum4").classList.add('transparency');
				document.querySelector('label[for="choiceNum0"]').style.opacity = "0.3";
				document.querySelector('label[for="choiceNum1"]').style.opacity = "0.3";
				document.querySelector('label[for="choiceNum2"]').style.opacity = "0.3";
				document.querySelector('label[for="choiceNum4"]').style.opacity = "0.3";
			} 
		}
		document.querySelector('label[for="choiceNum3"]').onmouseleave = function() {
			if (unclicked) {
				document.getElementById("choiceDivNum0").classList.remove('transparency');
				document.getElementById("choiceDivNum1").classList.remove('transparency');
				document.getElementById("choiceDivNum2").classList.remove('transparency');
				document.getElementById("choiceDivNum4").classList.remove('transparency');
				document.querySelector('label[for="choiceNum0"]').style.opacity = "1";
				document.querySelector('label[for="choiceNum1"]').style.opacity = "1";
				document.querySelector('label[for="choiceNum2"]').style.opacity = "1";
				document.querySelector('label[for="choiceNum4"]').style.opacity = "1";
			} 
		}
		document.querySelector('label[for="choiceNum4"]').onmouseenter = function() {
			if (unclicked) {
				document.getElementById("choiceDivNum0").classList.add('transparency');
				document.getElementById("choiceDivNum1").classList.add('transparency');
				document.getElementById("choiceDivNum2").classList.add('transparency');
				document.getElementById("choiceDivNum3").classList.add('transparency');
				document.querySelector('label[for="choiceNum0"]').style.opacity = "0.3";
				document.querySelector('label[for="choiceNum1"]').style.opacity = "0.3";
				document.querySelector('label[for="choiceNum2"]').style.opacity = "0.3";
				document.querySelector('label[for="choiceNum3"]').style.opacity = "0.3";
			} 
		}
		document.querySelector('label[for="choiceNum4"]').onmouseleave = function() {
			if (unclicked) {
				document.getElementById("choiceDivNum0").classList.remove('transparency');
				document.getElementById("choiceDivNum1").classList.remove('transparency');
				document.getElementById("choiceDivNum2").classList.remove('transparency');
				document.getElementById("choiceDivNum3").classList.remove('transparency');
				document.querySelector('label[for="choiceNum0"]').style.opacity = "1";
				document.querySelector('label[for="choiceNum1"]').style.opacity = "1";
				document.querySelector('label[for="choiceNum2"]').style.opacity = "1";
				document.querySelector('label[for="choiceNum3"]').style.opacity = "1";
			} 
		}

		opt.innerHTML = "";
	} else {
		document.getElementById("choiceNum0").onclick = function() {
			document.getElementById("choiceDivNum0").classList.add('active');
			document.getElementById("choiceDivNum0").classList.remove('inactive');
			document.getElementById("choiceWrapDiv0").classList.add('active');
			for (var i = 0; i < csList[currQ].length; i++) {
				if (i != 0) {
					document.getElementById("choiceDivNum" + i).classList.remove('active');
					document.getElementById("choiceWrapDiv" + i).classList.remove('active');
					document.getElementById("choiceDivNum" + i).classList.add('inactive');
				}
			}
			unclicked = false;
			for (var i = 0; i < csList[currQ].length; i++) {
				document.getElementById("choiceWrapDiv" + i).classList.remove('hoverable');
			}
		}
		document.getElementById("choiceNum1").onclick = function() {
			document.getElementById("choiceDivNum1").classList.add('active');
			document.getElementById("choiceDivNum1").classList.remove('inactive');
			document.getElementById("choiceWrapDiv1").classList.add('active');
			for (var i = 0; i < csList[currQ].length; i++) {
				if (i != 1) {
					document.getElementById("choiceDivNum" + i).classList.remove('active');
					document.getElementById("choiceWrapDiv" + i).classList.remove('active');
					document.getElementById("choiceDivNum" + i).classList.add('inactive');
				}
			}
			unclicked = false;
			for (var i = 0; i < csList[currQ].length; i++) {
				document.getElementById("choiceWrapDiv" + i).classList.remove('hoverable');
			}
		}
		document.getElementById("choiceNum2").onclick = function() {
			document.getElementById("choiceDivNum2").classList.add('active');
			document.getElementById("choiceDivNum2").classList.remove('inactive');
			document.getElementById("choiceWrapDiv2").classList.add('active');
			for (var i = 0; i < csList[currQ].length; i++) {
				if (i != 2) {
					document.getElementById("choiceDivNum" + i).classList.remove('active');
					document.getElementById("choiceWrapDiv" + i).classList.remove('active');
					document.getElementById("choiceDivNum" + i).classList.add('inactive');
				}
			}
			unclicked = false;
			for (var i = 0; i < csList[currQ].length; i++) {
				document.getElementById("choiceWrapDiv" + i).classList.remove('hoverable');
			}
		}
		document.getElementById("choiceNum3").onclick = function() {
			document.getElementById("choiceDivNum3").classList.add('active');
			document.getElementById("choiceDivNum3").classList.remove('inactive');
			document.getElementById("choiceWrapDiv3").classList.add('active');
			for (var i = 0; i < csList[currQ].length; i++) {
				if (i != 3) {
					document.getElementById("choiceDivNum" + i).classList.remove('active');
					document.getElementById("choiceWrapDiv" + i).classList.remove('active');
					document.getElementById("choiceDivNum" + i).classList.add('inactive');
				}
			}
			unclicked = false;
			for (var i = 0; i < csList[currQ].length; i++) {
				document.getElementById("choiceWrapDiv" + i).classList.remove('hoverable');
			}
		}
		document.getElementById("choiceNum4").onclick = function() {
			document.getElementById("choiceDivNum4").classList.add('active');
			document.getElementById("choiceDivNum4").classList.remove('inactive');
			document.getElementById("choiceWrapDiv4").classList.add('active');
			for (var i = 0; i < csList[currQ].length; i++) {
				if (i != 4) {
					document.getElementById("choiceDivNum" + i).classList.remove('active');
					document.getElementById("choiceWrapDiv" + i).classList.remove('active');
					document.getElementById("choiceDivNum" + i).classList.add('inactive');
				}
			}
			unclicked = false;
			for (var i = 0; i < csList[currQ].length; i++) {
				document.getElementById("choiceWrapDiv" + i).classList.remove('hoverable');
			}
		}
		if (unclicked) {
			for (var i = 0; i < csList[currQ].length; i++) {
				document.getElementById("choiceWrapDiv" + i).classList.add('hoverable');
			}
		} 
	}

	if (currQ >= 0 && currQ < allPickedAns.length) {
	    console.log("Index exists!");
	    document.querySelector('label[for="'+allPickedAns[currQ].id+'"]').click();
	}

}
function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

function startQuiz() {
	loadQues();
	document.getElementById("startbtn").remove();
	document.getElementById("startRandbtn").remove();
	document.getElementById("submitbtn").style.display="inline-block";
	document.getElementById("backbtn").style.display="inline-block";
	document.getElementById("backbtn").innerText = "Quit & Return to Home"
}
function startQuizRandver() {
	randQs();
	loadQues();
	document.getElementById("startbtn").remove();
	document.getElementById("startRandbtn").remove();
	document.getElementById("submitbtn").style.display="inline-block";
	document.getElementById("backbtn").style.display="inline-block";
}

function nextQuestion() {
	const errorAlert = document.getElementById('errorAlert')
	errorAlert.innerText = "";
    if (currQ < qs.length - 1) {
        currQ++;
        loadQues();
    } else {
        document.getElementById("opt").remove();
        document.getElementById("optshell").remove();
        document.getElementById("ques").remove();
        document.getElementById("submitbtn").remove();
        document.getElementById("backbtn").remove();
        document.getElementById("qNum").remove();
        const resPg = document.getElementById("resPg");
        resPg.innerHTML = "<h1>Results:</h1>";
    }
}
function goBack() {
	if (currQ == 0) {
		window.location.reload();
	} else {
		cCultivation -= allAns.at(-1)[0];
		cProduction -= allAns.at(-1)[1];
		cFunction -= allAns.at(-1)[2];
		cDirection -= allAns.at(-1)[3];
		cDreaming -= allAns.at(-1)[4];
		cBehaving -= allAns.at(-1)[5];
		cStriving -= allAns.at(-1)[6];
		cRisking -= allAns.at(-1)[7];
		cCohering -= allAns.at(-1)[8];
		cRecruiting -= allAns.at(-1)[9];
		cPursing -= allAns.at(-1)[10];
		cReviewing -= allAns.at(-1)[11];
		cMandate -= allAns.at(-1)[12];
		cProgram -= allAns.at(-1)[13];
		cTime -= allAns.at(-1)[14];
		cSpace -= allAns.at(-1)[15];
		currQ = currQ - 1;
		allAns.pop();
		printStats();
		loadQues();
	}
}

function checkAns() {
    const selectedAns = document.querySelector('input[name="answer"]:checked');
    if (selectedAns) {
        const answerValue = selectedAns.value;
        ansIndex = selectedAns.value;

        cCultivation += Number(wCultivation[currQ][ansIndex]);
		cProduction += Number(wProduction[currQ][ansIndex]);
		cFunction += Number(wFunction[currQ][ansIndex]);
		cDirection += Number(wDirection[currQ][ansIndex]);
		cDreaming += Number(wDreaming[currQ][ansIndex]);
		cBehaving += Number(wBehaving[currQ][ansIndex]);
		cStriving += Number(wStriving[currQ][ansIndex]);
		cRisking += Number(wRisking[currQ][ansIndex]);
		cCohering += Number(wCohering[currQ][ansIndex]);
		cRecruiting += Number(wRecruiting[currQ][ansIndex]);
		cPursing += Number(wPursuing[currQ][ansIndex]);
		cReviewing += Number(wReviewing[currQ][ansIndex]);
		cMandate += Number(wMandate[currQ][ansIndex]);
		cProgram += Number(wProgram[currQ][ansIndex]);
		cTime += Number(wTime[currQ][ansIndex]);
		cSpace += Number(wSpace[currQ][ansIndex]);

		var tempAns = [Number(wCultivation[currQ][ansIndex]),
				Number(wProduction[currQ][ansIndex]),
				Number(wFunction[currQ][ansIndex]),
				Number(wDirection[currQ][ansIndex]),
				Number(wDreaming[currQ][ansIndex]),
				Number(wBehaving[currQ][ansIndex]),
				Number(wStriving[currQ][ansIndex]),
				Number(wRisking[currQ][ansIndex]),
				Number(wCohering[currQ][ansIndex]),
				Number(wRecruiting[currQ][ansIndex]),
				Number(wPursuing[currQ][ansIndex]),
				Number(wReviewing[currQ][ansIndex]),
				Number(wMandate[currQ][ansIndex]),
				Number(wProgram[currQ][ansIndex]),
				Number(wTime[currQ][ansIndex]),
				Number(wSpace[currQ][ansIndex])];
		allAns.push(tempAns);
		allPickedAns[currQ] = selectedAns;

		printStats();
        nextQuestion();
    } else {
        const errorAlert = document.getElementById('errorAlert')
		errorAlert.innerText = "Please select an answer.";
    }
}

function printOneStat(currfixedDec, currId, currArr, preText, suffText, o1,o2,o3,o4,o5, statName) {
	const scoreElement = document.getElementById(currId)
	var currS = currArr.toFixed(currfixedDec)
	switch (true) {
		case (currS <= 10 && currS >= 6):
			scoreElement.innerText = preText + o1 + suffText;
			break;
		case (currS < 6 && currS >= 2):
			scoreElement.innerText = preText + o2 + suffText;
			break;
		case (currS < 2 && currS > -2):
			scoreElement.innerText = preText + o3 + suffText;
			break;
		case (currS <= -2 && currS > -6):
			scoreElement.innerText = preText + o4 + suffText;
			break;
		case (currS <= -6 && currS >= -10):
			scoreElement.innerText = preText + o5 + suffText;
			break;
		default:
			scoreElement.innerText = "ERROR! " + statName + " SCORE IS... " + currS;
			break;
	}
	console.log(statName + "SCORE IS... " + currS);
}
function printStats() {
	const fixedDec = 2;

	printOneStat(fixedDec, 'score0', cCultivation, 'SOCIETY IS...\n', ' us',
		'AUTHORING', 'SHAPING','INTEGRATING','ACCOMPANYING','CONSTRAINING', 'CULTIVATION');
	printOneStat(fixedDec, 'score1', cProduction, 'Run by ', '',
		'SYSTEMS', 'INSTITUTING','ORGANIZATIONS','GROUPS','INDIVIDUALS', 'PRODUCTION');
	printOneStat(fixedDec, 'score2', cFunction, '', ' in function',
		'MECHANISTIC', 'CYBERNETIC','POLYCENTRIC','EMERGENT','INEXPLICABLE', 'FUNCTION');
	printOneStat(fixedDec, 'score3', cDirection, '', '',
		'ASCENDING', 'PROGRESSING','ENDURING','REGRESSING','DECLINING', 'DIRECTION');


	printOneStat(fixedDec, 'score4', cDreaming, 'WE SHOULD BE...\nAssuming the status quo is ', '',
		'CONSTRUCTED', 'CONTROLLED','CONTESTED','CONVENTIONAL','CONVERGENT', 'DREAMING');
	printOneStat(fixedDec, 'score5', cBehaving, '', ' in treating others',
		'FORMAL', 'POLITE','SENSIBLE','CASUAL','CAREFREE', 'BEHAVING');
	printOneStat(fixedDec, 'score6', cStriving, '', ' our efforts',
		'MAXIMIZING', 'ESCALATING','OPTIMIZING','DECOMPRESSING','MINIMIZING', 'STRIVING');
	printOneStat(fixedDec, 'score7', cRisking, '', ' unexpected change',
		'UNLEASHING', 'ENCOURAGING','MANAGING','RESTRICTING','SUPPRESSING', 'RISKING');

	printOneStat(fixedDec, 'score8', cCohering, 'MY MOVEMENT SHOULD BE...\nEmbracing ', '',
		'DIVERSITY', 'INTEGRATION','ASSIMILATION','UNIFORMITY','PURITY', 'COHERING');
	printOneStat(fixedDec, 'score9', cRecruiting, '', '  membership and values',
		'OFFERING', 'ENGAGING','CONVINCING','CONVERTING','INSTILLING', 'RECRUITING');
	printOneStat(fixedDec, 'score10', cPursing, 'Calling to change ', '',
		'EVERYTHING', 'MORE AND MORE','LOTS','SOME','LITTLE', 'PURSUING');
	printOneStat(fixedDec, 'score11', cReviewing, 'Treating its values as ', '',
		'GUIDANCES', 'LAWS','CONSTITUTIONAL','CENTRAL','SACRED', 'REVIEWING');

	printOneStat(fixedDec, 'score12', cMandate, 'LEADERS SHOULD BE...\n', ' the public',
		'SERVING', 'WORKING WITH','CONSULTING','TEACHING','RULING', 'MANDATE');
	printOneStat(fixedDec, 'score13', cProgram, '', ' good values',
		'PREACHING', 'PROMOTING','TEACHING','PUSHING','ENGINEERING', 'PROGRAM');
	printOneStat(fixedDec, 'score14', cTime, 'Focusing on the next ', '',
		'DAY', 'MONTH','YEAR','DECADE','CENTURY', 'TIME');
	printOneStat(fixedDec, 'score15', cSpace, 'Representing ', ' interests',
		'LOCAL', 'REGIONAL','NATIONAL','COLLECTIVE','UNIVERSAL', 'SPACE');
}

function randQs() {
	// qs, csList, 
	// wCultivation/wProduction/wFunction/wDirection
	// wDreaming/wBehaving/wStriving/wRisking
	// wCohering/wRecruiting/wPursuing/wReviewing
	// wMandate/wProgram/wTime/wSpace
	// shellsList

	let newOrder = Array.from({length: qs.length}, (e, i)=> i);
	newOrder = shuffle(newOrder);
	console.log("New question order: ");
	console.log(newOrder);

	var tempShell = []
	for (var i = 0; i < shellsList.length; i++) {
		tempShell.push(newOrder.indexOf(shellsList[i] - 1) + 1);
	}
	shellsList = tempShell;
	qs = reorderArrayByIndexes(qs, newOrder);
	csList = reorderArrayByIndexes(csList, newOrder);
	wCultivation = reorderArrayByIndexes(wCultivation, newOrder);
	wProduction = reorderArrayByIndexes(wProduction, newOrder);
	wFunction = reorderArrayByIndexes(wFunction, newOrder);
	wDirection = reorderArrayByIndexes(wDirection, newOrder);
	wDreaming = reorderArrayByIndexes(wDreaming, newOrder);
	wBehaving = reorderArrayByIndexes(wBehaving, newOrder);
	wStriving = reorderArrayByIndexes(wStriving, newOrder);
	wRisking = reorderArrayByIndexes(wRisking, newOrder);
	wCohering = reorderArrayByIndexes(wCohering, newOrder);
	wRecruiting = reorderArrayByIndexes(wRecruiting, newOrder);
	wPursuing = reorderArrayByIndexes(wPursuing, newOrder);
	wReviewing = reorderArrayByIndexes(wReviewing, newOrder);
	wMandate = reorderArrayByIndexes(wMandate, newOrder);
	wProgram = reorderArrayByIndexes(wProgram, newOrder);
	wTime = reorderArrayByIndexes(wTime, newOrder);
	wSpace = reorderArrayByIndexes(wSpace, newOrder);

}
function reorderArrayByIndexes(originalArray, indexesArray) {
    var tempArr = [];
    for (var i = 0; i < indexesArray.length; i++) {
    	tempArr.push(originalArray[indexesArray[i]])
    }
    return tempArr;
}
