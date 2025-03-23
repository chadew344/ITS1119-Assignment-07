$(document).ready(function () {
  const lettersArray = $(".lettersQue").toArray();
  console.log(lettersArray);

  const letters = ["A", "B", "C", "D", "E", "F"];

  const colors = ["Red", "Green", "Blue", "Yellow", "#EFB6C8", "#F5004F"];

  function letterChanging() {
    let letterIndex = 0;

    lettersArray.forEach(function (element) {
      $(element).text(letters[letterIndex]);
      $(element).css("color", colors[letterIndex]);
      ++letterIndex;
    });

    letters.unshift(letters[letters.length - 1]);
    letters.pop();
  }

  const playPauseBtn = $("#playPauseBtn");

  let isPlaying = false;
  let letterChange;

  playPauseBtn.on("click", function () {
    if (isPlaying) {
      clearInterval(letterChange);
      playPauseBtn.text("Play");
    } else {
      letterChange = setInterval(letterChanging, 1000);
      playPauseBtn.text("Pause");
    }
    isPlaying = !isPlaying;
  });
});
