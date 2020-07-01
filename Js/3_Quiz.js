var questions = [{
    question: "What is the official name of the virus as designated by the World Health Organization (WHO)?",
    choices: ["Sars-Cov-2", "Covid-19", "Wuhan flu"],
    correctAnswer: 0
}, {
    question: "About what percentage of infected people recover without needing hospital treatment according to the World Health Organisation website?",
    choices: ["60%", "70%", "80%", "90%"],
    correctAnswer: 2
}, {
    question: "Which of these is NOT listed by the WHO as a symptom of coronavirus?",
    choices: ["Fever", "Dry cough", "Blurred vision", "Nasal congestion"],
    correctAnswer: 2
}, {
    question: "Which organ in the body does this coronavirus primarily attack?",
    choices: ["Lungs", "Liver", "Heart"],
    correctAnswer: 0
}, {
    question: "How long can the virus survive on plastic and stainless steel surfaces, according to studies?",
    choices: ["72 hours or more", "24 to 60 hours", "4 to 12 hours"],
    correctAnswer: 0
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {


    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {
            value = $("input[type='radio']:checked").val();
            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                $(document).find(".quizMessage").hide();
                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Click to play again?");
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find(".nextButton").text("Next");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

function displayCurrentQuestion() {

    console.log("Display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    $(questionClass).text(question);

    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}
