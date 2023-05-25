const arrows = document.querySelectorAll(".icon-arrow");
const movieList = document.querySelectorAll(".movie-list");
arrows.forEach((arrows, i) => {
  let clickCounter = 0;
  const imgItem = movieList[i].querySelectorAll("img").length;
  arrows.addEventListener("click", function () {
    clickCounter++;
    if (imgItem - (4 + clickCounter) >= 0) {
      movieList[i].style.transform = `translateX(${
        movieList[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieList[i].style.transform = "translateX(0)";
    }
  });
});

/* light mode*/

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.content-wrapper,.logo,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title"
);
ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});
