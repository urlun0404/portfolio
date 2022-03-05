const text = document.querySelectorAll(".theLogos");

for (let i = 0; i < text.length; i++) {
  console.log(`#${i + 1} length is ${text[i].getTotalLength()}`);
}

// remove the opening animation
const lastWord = document.querySelector("#twentyeighth");
const animation = document.querySelector("div.animation");
lastWord.addEventListener("animationend", () => {
  animation.style =
    "transition: all 1s ease; opacity: 0; pointer-events: none;";
});
