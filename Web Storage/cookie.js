const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

// document.cookie="name2=sharma";

// console.log(document.cookie)

const userId = "u123";

const user = {
  name: "max",
  age: 30,
  hobbies: ["sports", "cooking"],
};

storeBtn.addEventListener("click", () => {
  document.cookie = `uid=${userId};max-age=360`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrBtn.addEventListener("click", () => {
  console.log(document.cookie);
  const cookieData = document.cookie.split(";").map((e) => e.trim());
  //   cookieData.forEach((data) => console.log(data));
  console.log(
    JSON.parse(cookieData.find((e) => e.startsWith("user")).split("=")[1])
  );
});
