let topButton = document.querySelector(".toTopButton");

topButton.addEventListener("click", () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let bottomButton = document.querySelector(".toBottomButton");

bottomButton.addEventListener("click", () => {
  document.documentElement.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});
