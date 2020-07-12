const timerDelay = 2000;

const intervalId = setInterval(() => {
  console.log("Sending analytics data...");
}, timerDelay);

document.getElementById("stop-analytics-btn").addEventListener("click", () => {
  clearInterval(intervalId);
});
