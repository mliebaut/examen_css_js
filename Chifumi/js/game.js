// Variables globales
var choice = document.querySelector(".choice");
var versus = document.querySelector(".versus");
var reset = document.querySelector("#reset");
var userChoiceDisplay = document.querySelector("#user-choice");
var computerChoiceDisplay = document.querySelector("#computer-choice");
var userScore = 0;
var computerScore = 0;

// Fonction pour start le jeu
function startGame(event) {
    var userChoice = event.target.id; // Pierre, Feuille ou Ciseaux
    if (!["rock", "scissors", "paper"].includes(userChoice)) return;

    // Choix aléatoire de l'ordinateur
    var choices = ["rock", "paper", "scissors"];
    var computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log(`choix ordinateur: ${computerChoice}`);
    
    // Afficher les choix dans la zone "versus"
    versus.style.display = "flex";
    userChoiceDisplay.innerHTML = `<img src="./assets/chifoumi_${userChoice}1.png" alt="${userChoice}">`;
    computerChoiceDisplay.innerHTML = `<img src="./assets/chifoumi_${computerChoice}1.png" alt="${computerChoice}">`;

    // Calcul du score
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        userScore++;
    } else if (userChoice !== computerChoice) {
        computerScore++;
    }

    // Mettre à jour le score
    updateScore();
}

// Fonction pour mettre à jour le score
function updateScore() {
    document.querySelector(".score").innerHTML = `
        <h3>Score joueur: ${userScore}</h3>
        <h3>Score ordinateur: ${computerScore}</h3>
    `;
}

// Fonction pour réinitialiser la partie
function resetGame() {
    userScore = 0;
    computerScore = 0;
    versus.style.display = "none";
    userChoiceDisplay.innerHTML = "";
    computerChoiceDisplay.innerHTML = "";
    updateScore();
}

// Écouteurs d'événements
choice.addEventListener("click", startGame);
reset.addEventListener("click", resetGame);