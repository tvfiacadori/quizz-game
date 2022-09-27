var question = document.getElementById("question");
var reponse = document.getElementById("reponse");
var boutonValider = document.getElementById("boutonValider");
var n = 0;
var background = [
  '/IMG_20220122_104957.jpg',
  '/IMG_20220416_132323(1).jpg',
  '/austria.jpg',
  '/lyon.jpg',
  '/guada.jpg',
  '/lyon2.jpg',
  '/lyon3.jpg',
  '/mont.jpg',
  '/savoie.jpg'
]
var questRep = [
  {
    quest: "Are you ready to play ?",
    rep: "yes",
  },
  {
    quest: "2 + 2 =  ?",
    rep: "4",
  },

  {
    quest: "What is the name of our first car ?",
    rep: "madame kinder",
  },

  {
    quest: "Where is Fuegen ?",
    rep: "austria",
  },

  {
    quest: "What is the minimum number of players in a football match ?",
    rep: "7",
  },

  {
    quest: "What’s the shortcut for the “copy” function on most computers ?",
    rep: "ctrl c",
  },

  {
    quest: "Quand je suis frais je suis chaud. Qui suis-je ?",
    rep: "le pain",
  },

  {
    quest: "Which email service is owned by Microsoft ?",
    rep: "hotmail",
  },

  {
    quest: "À une course cycliste, tu doubles le premier. Quelle est ta place dans la course ?",
    rep: "premier",
  },

  {
    quest: "How many Lord of the Rings films are there ?",
    rep: "3",
  },

  {
    quest: "Qu'est-ce qui doit être cassé pour être utilisé ?",
    rep: "l'oeuf",
  },

  {
    quest: "0,1,1,2,3,5,8,13,21,34,__?",
    rep: "55",
  },

  {
    quest: "Which continent is the largest ?",
    rep: "asia",
  },

  {
    quest: "What is my younger cousin's name ?",
    rep: "leticia",
  },

  {
    quest: "Which animal symbolizes good luck in Europe ?",
    rep: "ladybug",
  },

  {
    quest: "Which animal can be seen on the Porsche logo ?",
    rep: "horse",
  },

  {
    quest: "What is your goddaughter's birthday ? (only the day)",
    rep: "15",
  },

  {
    quest: "Qu'est-ce qui fait le tour de la maison sans bouger ?",
    rep: "le mur",
  },

  {
    quest: "Which country produces the most coffee in the world ?",
    rep: "brazil",
  },

  {
    quest: "Where are we going to eat tonight ?",
    rep: "trattino",
  },

  {
    quest: "What is the name of the home of the Greek Gods ?",
    rep: "olympus",
  },

  {
    quest: "Who scored the first goal in Sunday's game ? (FC Gerland)",
    rep: "margot",
  },

  {
    quest: "How many eyes does a bee have ?",
    rep: "5",
  },

  {
    quest: "What sport is featured in the video game “FIFA” ?",
    rep: "football",
  },

  {
    quest: "Do you miss me ?",
    rep: "yes",
  },

  {
    quest: "What metal has the chemical symbol Au ?",
    rep: "ouro",
  },

  {
    quest: "Vai cair ou não vai ?",
    rep: "vai",
  },

  {
    quest: "What is the name of the last series we watched ?",
    rep: "the fall",
  },

  {
    quest: "When Frida was 18 years old, she had a serious accident involving what ?",
    rep: "bus",
  },

  {
    quest: "What is my mother's second name ?",
    rep: "maira",
  },

  {
    quest: "Who is getting older today ?",
    rep: "cloe",
  },

  {
    quest: "I'm blonde with blue eyes and I play football like my aunt. Who am I?",
    rep: "valou",
  },

  {
    quest: "How many questions did you answer ?",
    rep: "33",
  },
];

function resetGame() {
  n = 0;

  question.textContent = questRep[n].quest;

  reponse.value = "";
  resetReponse();
}
resetGame();

function changeBackground () {
  let bodyContainer = document.querySelector("#container")
bodyContainer.style.backgroundImage = `url("${background[Math.floor(Math.random() * background.length)]}")`
bodyContainer.style.backgroundSize = "cover";
}

function resetReponse() {
  boutonValider.addEventListener("click", valider);
  reponse.addEventListener("keydown", validationEnter);
  reponse.removeAttribute("readonly");
  reponse.value = "";
}

function questionSuivante() {
  if (n < questRep.length - 1) {
    n += 1;
    question.textContent = questRep[n].quest;
  } else {
    reponse.value = "Between msg of love encouragement...";
    reponse.setAttribute("readonly", true);
    setTimeout(resetGame, 4500);
    question.textContent = "";
  }
}


function valider() {
  if (reponse.value.toLowerCase() === questRep[n].rep) {
    reponse.value = "BRAVO !!! 👌";
    setTimeout(questionSuivante, 2100);
    changeBackground()
  } else if (reponse.value.toLowerCase() === "<énigme> lemon, banana...") {
    setTimeout(resetGame, 1000);
  } else {
    reponse.value = "Think and try again";
  }

  boutonValider.removeEventListener("click", valider);
  reponse.removeEventListener("keydown", validationEnter);
  reponse.setAttribute("readonly", true);
  setTimeout(resetReponse, 2000);
}

function validationEnter(e) {
  if (e.key === "Enter") {
    valider();
  }
}
