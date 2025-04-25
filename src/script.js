let topButton = document.querySelector(".topButton");

topButton.addEventListener("click", () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
