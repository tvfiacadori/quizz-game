var question = document.getElementById("question");
var reponse = document.getElementById("reponse");
var boutonValider = document.getElementById("boutonValider");
var n = 0;

var questRep = [
  
  {
    quest: "Are you ready to play ?",
    rep: "yes",
  },
  {
    quest: "What color is the sky ?",
    rep: "blue",
  },
  {
    quest: "What color is the sun?",
    rep: "yellow",
  },
  {
    quest: "What color is the cloud?",
    rep: "white",
  },

  {
    quest: "How old are you?",
    rep: "33",
  },

  {
    quest: "Qu'est-ce qui commence la nuit et termine le matin ?",
    rep: "la lettre n",
  },

  {
    quest: "What is the capital of Australia?",
    rep: "canberra",
  },

  {
    quest: "How old were you when you met me?",
    rep: "24",
  },

  {
      quest: "If I was born in Rio de Janeiro, am I...?",
      rep: "carioca",
  },

  {
      quest: "Where is the best caipirinha in Lyon?",
      rep: "livestation",
  },

];

function resetGame() {
  n = 0;

  question.textContent = questRep[n].quest;

  reponse.value = "";
  resetReponse();
}
resetGame();

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
    reponse.value =  "<énigme> lemon, banana...";
    reponse.setAttribute("readonly", true);
    setTimeout(resetGame, 3000);
    question.textContent = "";
  }
}

function valider() {
  if (reponse.value.toLowerCase() === questRep[n].rep) {
    reponse.value = "BRAVO !!! 👌";
    setTimeout(questionSuivante, 2100);
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
