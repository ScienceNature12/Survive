let questions = [{
        id: 1,
        question: "How do you want to get back to land? Explore or Swim?",
        answer: "Explore",
        options: [
            "Explore",
            "Swim"
        ]
    },
    {
        id: 2,
        question: "You have found a boat. There seems to be a way off the island. Do you wait for a captain or do you drive the boat?",
        answer: "Drive",
        options: [
            "Wait",
            "Drive"
        ]
    },
    {
        id: 3,
        question: "You arrive at the mainland to find a fork in thr road. Do you go left or right?",
        answer: "Left",
        options: [
            "Right",
            "Left"
        ]
    },
    {
        id: 4,
        question: "You arrive at another fork in the road. Do you go left or right?",
        answer: "Right",
        options: [
            "Right",
            "Left"
        ]
    },
];

let question_count = 0;
let points = 0;

window.onload = function() {
    show(question_count);
};

function show(count) {
    let question = document.getElementById("questions");
    let [first, second] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2> 
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    </ul>`;
    toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function() {
            for (let i = 0; i < option.length; i++) {
                if (option[i].classList.contains("active")) {
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }

}

function next() {

    if (question_count == questions.length - 1) {
        location.href = "final.html";
    }
    console.log(question_count);


    let user_answer = document.querySelector("li.option.active").innerHTML;

    if (user_answer == questions[question_count].answer) {
        points += 10;
        sessionStorage.setItem("points", points);
    } else if (question_count == 0) {
        points += 0;
        sessionStorage.setItem("points", points);
        window.alert('You were eaten by a shark. Game over');
        location.href = "gameover.html";
    } else if (question_count == 1) {
        points += 0;
        sessionStorage.setItem("points", points);
        window.alert('The captain has pulled a machete on you and you died. Game over');
        location.href = "gameover.html";
    } else if (question_count == 2) {
        points += 0;
        sessionStorage.setItem("points", points);
        window.alert('You were attacked by a pack of angry Trash Pandas and died. Game Over');
        location.href = "gameover.html";
    } else {
        points += 0;
        sessionStorage.setItem("points", points);
        window.alert('You were attacked be a swarm of angry bees and had an allergic reaction. You died. Game over');
        location.href = "gameover.html";
    }


    console.log(points);
    question_count++;


    show(question_count);
}