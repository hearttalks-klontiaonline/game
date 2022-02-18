const cards = document.querySelectorAll(".memory-card");
const cardsCopy = document.querySelectorAll(".frame-img .memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

$(function (){
    cards.forEach((card) => card.addEventListener("click", flipCard));

})

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    console.log(firstCard);
    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    correctMusic.play()
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  lockBoard = true;


  setTimeout(() => {
    firstCard.classList.add("animated");
    secondCard.classList.add("animated");
  }, 1000);

  setTimeout(function () {
    firstCard.style.opacity = "0";
    secondCard.style.opacity = "0";
    resetBoard();
  }, 2000);
    increaseScore() ;
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach((card, index) => {
    let randomPos = Math.floor(Math.random() * 8);
    card.style.order = randomPos;
    // cardsCopy[index].style.order = randomPos;
    console.log(cardsCopy[index]);
  });
})();







