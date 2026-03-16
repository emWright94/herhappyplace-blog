let topButton = document.querySelector(".topButton");

topButton.addEventListener("click", () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let bottomButton = document.querySelector(".bottomButton");

bottomButton.addEventListener("click", () => {
  document.documentElement.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});
