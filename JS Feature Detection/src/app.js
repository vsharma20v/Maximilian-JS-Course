import "core-js/stable";
import "regenerator-runtime/runtime";

const button = document.querySelector("button");
const textpara = document.querySelector("p");
button.addEventListener("click", () => {
  // do something...
  const text = textpara.textContent;
  if (navigator.clipboard) {
    const promise = new Promise();
    console.log(promise);
    navigator.clipboard
      .writeText(text)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    textpara.style.backgroundColor = "#ddd";
    alert("feature not available, please copy manually");
  }
});
