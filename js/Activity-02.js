const boxArray = document.querySelectorAll("section .box");
console.log(boxArray);

const colors = ["Red", "Green", "Blue", "Yellow", "#EFB6C8", "#F5004F"];

function colorChanges() {
  let colorIndex = 0;

  boxArray.forEach((box) => {
    box.style.backgroundColor = colors[colorIndex];
    ++colorIndex;
  });

  colors.unshift(colors[colors.length - 1]);

  colors.pop();
}

const playPauseBtn = $("#playPauseBtn");

let isPlaying = false;
let colorsBar;

playPauseBtn.on("click", function () {
  if (isPlaying) {
    clearInterval(colorsBar);
    playPauseBtn.text("Play");
  } else {
    colorsBar = setInterval(colorChanges, 500);
    playPauseBtn.text("Pause");
  }
  isPlaying = !isPlaying;
});