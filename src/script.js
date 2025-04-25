let rootElement = document.documentElement;
function topFunction() {
  console.log("test");

  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
let topButton = document.querySelector("#topButton");
topButton.addEventListener("click", topFunction);

console.log("testing testing");
