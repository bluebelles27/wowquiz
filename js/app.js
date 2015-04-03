$(document).ready(function() {
	var questions = [{
		question: "There are two factions in the World of Warcraft, the Alliance and the Horde. Which of the following races is NOT a member of the Horde?",
		answers: ["Tauren -  a nomadic, peaceful, cow-like race", "Trolls - a tribal, mystical, and adaptive race that can be found all over Azeroth", "Worgen - a cursed race of humans who transform into nightmarish beasts", "Blood Eleves - a faction of High Elves that are so dependent on magic, they suffer withdrawal if it is taken away"],
		questionNumber:0,
		correctAnswer: 2
	},
	{
		question: "Which event led to the separation of Azeroth into two distinct continents?",
		answers: ["The Sundering", "The Shattering", "Pandemonium", "Opening of the Dark Portal"],
		questionNumber: 1,
		correctAnswer: 0
	},
	{
		question: "The Wandering Isle, the current homeland of the Pandaren,  can be found where?",
		answers: ["Through the Dark Portal", "Floating on the back of a giant turtle", "Shrouded in the Mists", "Right next to Northrend"],
		questionNumber: 2,
		correctAnswer: 1
	},
	{
		question: "Who is the current Warchief of the Horde?",
		answers: ["Thrall", "Garrosh Hellscream", "Vol'jin", "Blackhand"],
		questionNumber: 3,
		correctAnswer: 2
	},
	{
		question: "How many expansions, not including the original game, have been released in the World of Warcraft?",
		answers: ["3", "6", "4", "5"],
		questionNumber: 4,
		correctAnswer: 3
	}]
}

//Time for some global variables
var numberCorrect = 0;		//initialize counter for corect answers to 0
var currentQuestion = 0;	//initialize counter for question # to 0
var newQuestion = '<span class="question">' + questions[currentQuestion].question + '</span><br><div id="answer-wrapper"><input type="radio" name="option" class="option" value="0"><span class="answer">' + questions[currentQuestion].answers[0] + '</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">' + questions[currentQuestion].answers[1] + '</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">' + questions[currentQuestion].answers[2] + '</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">' + questions[currentQuestion].answers[3] + '</span><br></div><div id="button-wrapper"><input type="button" id="submit" value="Submit"><input type="button" id="retry" value="Try Again?></div>';

//click function for submit button
$("#question-wrapper").on("click", "#submit", function() {
	currentQuestion++; 	//advance counter by 1
	nextQuestion(); 	//fire function to present the next question
});

//click function for retry button, reset variable and populate new question
$("#question-wrapper").on("click", "#retry", function() {
	numberCorrect = 0;
	currentQuestion = 0;
	$("#question-wrapper").html(newQuestion);
});

//function to update score
function score() {
	var answer = $("input[type='radio']:checked").val();
	if(answer == questions[currentQuestion].correctAnswer) {
		numberCorrect++;
	}
}

//function to present next question OR end the quiz and present score
function nextQuestion() {
	if(currentQuestion < 5) {
		$(".question").remove();
		$("#answer-wrapper input").remove();
		$("#answer-wrapper span").remove();
		$("#question-wrapper").html(newQuestion);
	}
	else {
		$(".question").remove();
		$("#answer-wrapper input").remove();
		$("#answer-wrapper span").remove();
		$("#submit").css("display", "none");
		$("#retry").css("display", "none");
		if(numberCorrect == 1) {
			var total = '<span id="final"> Congratulations on finishing the quiz! You correctly answered' + numberCorrect + 'question.'
			$("#answer-wrapper").html(total);
		}
		else {
			var total = '<span id="final"> Congratulations on finishing the quiz! You correctly answered' + numberCorrect + 'questions.'
			$("#answer-wrapper").html(total);
		}
	}
}




