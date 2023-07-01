const alphaMaleQuotes = [
  "I'm the master of my fate, I'm the captain of my soul.",
  "I don't follow the crowd; the crowd follows me.",
  "Success is not given, it's taken.",
  "Pain is temporary, pride is forever.",
  "I'm not here to be average, I'm here to be the best.",
  "I'm a lion, not a sheep.",
  "Don't wait for opportunities, create them.",
  "Failure is not an option.",
  "I don't make excuses, I make things happen.",
  "A true alpha leads by example.",
  "I embrace challenges and turn them into triumphs.",
  "I am the architect of my own destiny.",
  "I define my own worth.",
  "I am fearless in the face of adversity.",
  "I am unbreakable, unstoppable, and undeniably alpha.",
];

let quotes = document.querySelector(".qts");
let button = document.querySelector(".btn");
let currentIndex = 0;
function alpha() {
  if (currentIndex < alphaMaleQuotes.length) {
    quotes.innerText = alphaMaleQuotes[currentIndex];
    quotes.style.backgroundColor='blue'
    button.style.backgroundColor='black'
    button.innerText='click for next amazing Quote'
    currentIndex++;
  } else {
    quotes.innerText =
      "thanks for visiting stay connected for more amizing content";
      quotes.style.backgroundColor='red'
      button.style.backgroundColor='red'
      button.innerText='The End!'
    currentIndex = 0;
  }
}
button.addEventListener("click", alpha);
