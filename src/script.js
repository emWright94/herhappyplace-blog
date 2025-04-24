let topButton = document.querySelector("#topButton");
let rootElement = document.documentElement;

function topFunction() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

topButton.addEventListener("click", topFunction);
