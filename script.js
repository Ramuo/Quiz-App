const quizData = [
    {
        question: "Quelle langue s'exécute dans un navigateur Web?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Que signifie CSS?",
        a: "Compilateur de Script et de Syntaxe",
        b: "Feuilles de style en cascade",
        c: "Cascade Style Feuille",
        d: "Centre Style Sheet",
        correct: "b",
    },
    {
        question: "Que signifie HTML?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicoptere Taxi Moto Langage",
        correct: "a",
    },
    {
        question: "En quelle année JavaScript a été lancé?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "Aucune de ces réponses",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();


// FUNCTIONS:

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    });
}
function getSelected(){
    let answer;
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })
    
    return answer;
}

// Event listener
submitBtn.addEventListener('click', ()=>{
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `
                <h2>vous avez répondu ${score}/${quizData.length} questions correctement</h2>
                <button onclick="location.reload()">Refaire</bfutton>
            
            `;
        }
    }
}, false)