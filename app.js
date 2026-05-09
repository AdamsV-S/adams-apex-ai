function runAI() {
  const signals = [
    "BUY EUR/USD",
    "SELL GBP/USD",
    "BUY GOLD",
    "SELL BTC/USD",
    "BUY USD/JPY"
  ];

  const moods = [
    "Bullish",
    "Bearish",
    "Volatile",
    "Neutral"
  ];

  const randomSignal = signals[Math.floor(Math.random() * signals.length)];
  const randomMood = moods[Math.floor(Math.random() * moods.length)];

  document.getElementById("signal").innerText = randomSignal;

  const cards = document.querySelectorAll(".card");
  if(cards[2]){
    cards[2].querySelector("p").innerText = randomMood;
  }
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js");
  });
}
