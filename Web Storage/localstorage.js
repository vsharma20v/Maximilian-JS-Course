const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

const userId = "u123";
const user = {
  name: "max",
  age: 30,
  hobbies: ["sports", "cooking"],
};

storeBtn.addEventListener("click", () => {
  sessionStorage.setItem("uid", userId);
  localStorage.setItem("user", JSON.stringify(user));
});

retrBtn.addEventListener("click", () => {
  const extractedId = sessionStorage.getItem("uid");
  const extractedUser = JSON.parse(localStorage.getItem("user"));
  if (extractedId && extractedUser) {
    console.log("Got the id: " + extractedId);
    console.log(extractedUser);
  } else {
    console.log("could not find id");
  }
});
