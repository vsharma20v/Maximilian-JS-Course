const startAddMovieBtn = document.querySelector("header button");
const addMovieModal = document.getElementById("add-modal");
const backdrop = document.getElementById("backdrop");
const cancelAddMovieModalBtn = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieModalBtn = cancelAddMovieModalBtn.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const movieList = document.getElementById("movie-list");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];


const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const cancelMovieDeletion = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
};

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  movieList.children[movieIndex].remove();
  cancelMovieDeletion();
  updateUI();
};


const startdeleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add("visible");
  toggleBackdrop();

  let confirmDeletionAction = deleteMovieModal.querySelector(".btn--danger");
  const cancelDeletionAction = deleteMovieModal.querySelector(".btn--passive");

  confirmDeletionAction.replaceWith(confirmDeletionAction.cloneNode(true));
  confirmDeletionAction = deleteMovieModal.querySelector(".btn--danger");

  cancelDeletionAction.removeEventListener("click",cancelMovieDeletion);
  
  confirmDeletionAction.addEventListener("click",deleteMovieHandler.bind(null,movieId));
  cancelDeletionAction.addEventListener("click", cancelMovieDeletion);

};

const renderNewMovieElement = (id, title, imageURL, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageURL}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener(
    "click",
    startdeleteMovieHandler.bind(null, id)
  );
  movieList.append(newMovieElement);
};


const cancelMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

const showMovieModal = () => {
  addMovieModal.classList.add("visible");
  toggleBackdrop();
};

const backdropClickHandler = () => {
  cancelMovieModal();
  cancelMovieDeletion();
  clearUserInputs();
};

const cancelMovieModalHandler = () => {
  cancelMovieModal();
  toggleBackdrop();
  clearUserInputs();
};

const clearUserInputs = () => {
  for (const input of userInputs) {
    input.value = "";
  }
};

const addMovieModalHandler = () => {
  const titleValue = userInputs[0].value;
  const imageURLValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  if (
    titleValue.trim() === "" ||
    imageURLValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid values (rating between 1 and 5).");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageURLValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  cancelMovieModal();
  toggleBackdrop();
  clearUserInputs();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

startAddMovieBtn.addEventListener("click", showMovieModal);

backdrop.addEventListener("click", backdropClickHandler);

cancelAddMovieModalBtn.addEventListener("click", cancelMovieModalHandler);

confirmAddMovieModalBtn.addEventListener("click", addMovieModalHandler);
