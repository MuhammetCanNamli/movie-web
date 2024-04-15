const arrows = document.querySelectorAll(".icon-arrow");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrows, i) => {
  let clickCounter = 0;
  const imgItem = movieList[i].querySelectorAll("img").length;

  arrows.addEventListener("click", () => {
    clickCounter++;
    const transformValue = movieList[i].style.transform || window.getComputedStyle(movieList[i]).transform;
    const currentTranslateX = transformValue ? parseFloat(transformValue.match(/-?\d+/)[0]) : 0;
    
    if (imgItem - (4 + clickCounter) >= 0) {
      movieList[i].style.transform = `translateX(${currentTranslateX - 300}px)`;
    } else {
      movieList[i].style.transform = "translateX(0)";
    }
  });
});

/* light mode*/

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container, .content-wrapper, .logo, .navbar, .sidebar, .sidebar i, .toggle, .toggle-ball, .movie-list-filter select, .movie-list-title"
);

ball.addEventListener("click", () => {
  items.forEach(item => item.classList.toggle("active"));
});
