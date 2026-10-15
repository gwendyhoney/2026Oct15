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
		optshell.appendChild(document.getElementById("choiceDivNum0"));
		document.getElementById("choiceDivNum0").appendChild(document.getElementById("choiceDivNum1"));
		document.getElementById("choiceDivNum1").appendChild(document.getElementById("choiceDivNum2"));
		document.getElementById("choiceDivNum2").appendChild(document.getElementById("choiceDivNum3"));
		document.getElementById("choiceDivNum3").appendChild(document.getElementById("choiceDivNum4"));
		opt.innerHTML = "";
	}
}

function startQuiz() {
	loadQues()
	document.getElementById("startbtn").remove();
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
	const score0 = document.getElementById('score0')
	score0.innerText = "CULTIVATION: " + cCultivation;
	const score1 = document.getElementById('score1')
	score1.innerText = "PRODUCTION: " + cProduction;
	const score2 = document.getElementById('score2')
	score2.innerText = "FUNCTION: " + cFunction;
	const score3 = document.getElementById('score3')
	score3.innerText = "DIRECTION: " + cDirection;

	const score4 = document.getElementById('score4')
	score4.innerText = "DREAMING: " + cDreaming;
	const score5 = document.getElementById('score5')
	score5.innerText = "BEHAVING: " + cBehaving;
	const score6 = document.getElementById('score6')
	score6.innerText = "STRIVING: " + cStriving;
	const score7 = document.getElementById('score7')
	score7.innerText = "RISKING: " + cRisking;

	const score8 = document.getElementById('score8')
	score8.innerText = "COHERING: " + cCohering;
	const score9 = document.getElementById('score9')
	score9.innerText = "RECRUITING: " + cRecruiting;
	const score10 = document.getElementById('score10')
	score10.innerText = "PURSUING: " + cPursing;
	const score11 = document.getElementById('score11')
	score11.innerText = "REVIEWING: " + cReviewing;

	const score12 = document.getElementById('score12')
	score12.innerText = "MANDATE: " + cMandate;
	const score13 = document.getElementById('score13')
	score13.innerText = "PROGRAM: " + cProgram;
	const score14 = document.getElementById('score14')
	score14.innerText = "TIME: " + cTime;
	const score15 = document.getElementById('score15')
	score15.innerText = "SPACE: " + cSpace;
}