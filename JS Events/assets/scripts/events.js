const button = document.querySelector("button");

// const buttonClickHandler = (event) => {
// //   event.target.disabled = true;
//   console.log(event);
// };

// const anotherButtonClickHandler = () => {
//   console.log("This was clicked");
// };

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

// const bindFn = buttonClickHandler.bind(this);

// button.addEventListener("click",buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener("click",buttonClickHandler);
// }, 2000);

// buttons.forEach((button) => {
//   button.addEventListener("click", buttonClickHandler,true);
// });

// window.addEventListener("scroll",(event)=>{
//     console.log(event);
// })

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.defaultPrevented);
  console.log(event);
});

const div = document.querySelector("div");

div.addEventListener("click", (event) => {
  console.log("DIV clicked");
  console.log(event);
});

button.addEventListener("cli  ck", function (event){
  console.log("BUTTON clicked");
  console.log(this === event.currentTarget);
  // event.stopPropagation();
});

const list = document.querySelector("ul");

// listItems.forEach((listItem)=>{
//   listItem.addEventListener("click",(event)=>{
//     event.target.classList.toggle("highlight");
//   });
// });

list.addEventListener("click", (event) => {
  event.target.closest("li").classList.toggle("highlight");
  // form.querySelector("button").click();
});
