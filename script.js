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

function loadQues() {
	const qNum = document.getElementById('qNum')
	const ques = document.getElementById("ques");
	const opt = document.getElementById("opt");
	const optshell = document.getElementById("optshell");
	qNum.innerText = currQ + 1;
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
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
	}
	if (shellsList.includes(currQ+1)) {
		optshell.append(document.getElementById("choiceDivNum4"));
		document.getElementById("choiceDivNum4").prepend(document.getElementById("choiceDivNum3"));
		document.getElementById("choiceDivNum3").prepend(document.getElementById("choiceDivNum2"));
		document.getElementById("choiceDivNum2").prepend(document.getElementById("choiceDivNum1"));
		document.getElementById("choiceDivNum1").prepend(document.getElementById("choiceDivNum0"));
		

		document.getElementById("choiceNum0").onclick = function() {
    		document.getElementById("choiceDivNum0").classList.add('active');
    		document.getElementById("choiceDivNum1").classList.add('active');
    		document.getElementById("choiceDivNum2").classList.add('active');
    		document.getElementById("choiceDivNum3").classList.add('active');
    		document.getElementById("choiceDivNum4").classList.add('active');
		}
		document.getElementById("choiceNum1").onclick = function() {
    		document.getElementById("choiceDivNum0").classList.remove('active');
    		document.getElementById("choiceDivNum1").classList.add('active');
    		document.getElementById("choiceDivNum2").classList.add('active');
    		document.getElementById("choiceDivNum3").classList.add('active');
    		document.getElementById("choiceDivNum4").classList.add('active');
		}
		document.getElementById("choiceNum2").onclick = function() {
    		document.getElementById("choiceDivNum0").classList.remove('active');
    		document.getElementById("choiceDivNum1").classList.remove('active');
    		document.getElementById("choiceDivNum2").classList.add('active');
    		document.getElementById("choiceDivNum3").classList.add('active');
    		document.getElementById("choiceDivNum4").classList.add('active');
		}
		document.getElementById("choiceNum3").onclick = function() {
    		document.getElementById("choiceDivNum0").classList.remove('active');
    		document.getElementById("choiceDivNum1").classList.remove('active');
    		document.getElementById("choiceDivNum2").classList.remove('active');
    		document.getElementById("choiceDivNum3").classList.add('active');
    		document.getElementById("choiceDivNum4").classList.add('active');
		}
		document.getElementById("choiceNum4").onclick = function() {
    		document.getElementById("choiceDivNum0").classList.remove('active');
    		document.getElementById("choiceDivNum1").classList.remove('active');
    		document.getElementById("choiceDivNum2").classList.remove('active');
    		document.getElementById("choiceDivNum3").classList.remove('active');
    		document.getElementById("choiceDivNum4").classList.add('active');
		}

		opt.innerHTML = "";
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
	//randQs();
	loadQues();
	document.getElementById("startbtn").remove();
	document.getElementById("startRandbtn").remove();
	document.getElementById("submitbtn").style.display="inline-block";
}
function startQuizRandver() {
	randQs();
	loadQues();
	document.getElementById("startbtn").remove();
	document.getElementById("startRandbtn").remove();
	document.getElementById("submitbtn").style.display="inline-block";
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
        document.getElementById("qNum").remove();
        const resPg = document.getElementById("resPg");
        resPg.innerHTML = "<h1>Results:</h1>";
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
		printStats();
        nextQuestion();
    } else {
        const errorAlert = document.getElementById('errorAlert')
		errorAlert.innerText = "Please select an answer.";
    }
}

function printStats() {
	const fixedDec = 2;
	const score0 = document.getElementById('score0')
	score0.innerText = "CULTIVATION: " + cCultivation.toFixed(fixedDec);
	const score1 = document.getElementById('score1')
	score1.innerText = "PRODUCTION: " + cProduction.toFixed(fixedDec);
	const score2 = document.getElementById('score2')
	score2.innerText = "FUNCTION: " + cFunction.toFixed(fixedDec);
	const score3 = document.getElementById('score3')
	score3.innerText = "DIRECTION: " + cDirection.toFixed(fixedDec);

	const score4 = document.getElementById('score4')
	score4.innerText = "DREAMING: " + cDreaming.toFixed(fixedDec);
	const score5 = document.getElementById('score5')
	score5.innerText = "BEHAVING: " + cBehaving.toFixed(fixedDec);
	const score6 = document.getElementById('score6')
	score6.innerText = "STRIVING: " + cStriving.toFixed(fixedDec);
	const score7 = document.getElementById('score7')
	score7.innerText = "RISKING: " + cRisking.toFixed(fixedDec);

	const score8 = document.getElementById('score8')
	score8.innerText = "COHERING: " + cCohering.toFixed(fixedDec);
	const score9 = document.getElementById('score9')
	score9.innerText = "RECRUITING: " + cRecruiting.toFixed(fixedDec);
	const score10 = document.getElementById('score10')
	score10.innerText = "PURSUING: " + cPursing.toFixed(fixedDec);
	const score11 = document.getElementById('score11')
	score11.innerText = "REVIEWING: " + cReviewing.toFixed(fixedDec);

	const score12 = document.getElementById('score12')
	score12.innerText = "MANDATE: " + cMandate.toFixed(fixedDec);
	const score13 = document.getElementById('score13')
	score13.innerText = "PROGRAM: " + cProgram.toFixed(fixedDec);
	const score14 = document.getElementById('score14')
	score14.innerText = "TIME: " + cTime.toFixed(fixedDec);
	const score15 = document.getElementById('score15')
	score15.innerText = "SPACE: " + cSpace.toFixed(fixedDec);
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
