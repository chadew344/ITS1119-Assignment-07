$(document).ready(function () {
    const boxArray = $("section .box").toArray();
    // console.log(boxArray);

    let boxIndex = 0;

    function kitsLights() {
      let opacity = 1;
      let bcColor = `rgb(255, 0, 0, ${opacity})`;

      for (let i = boxIndex; i >= 0; i--) {
        if (opacity > 0) {
          $(boxArray[i]).css("backgroundColor", bcColor);
          opacity -= 0.25;
          bcColor = `rgb(255, 0, 0, ${opacity})`;
        } else {
          $(boxArray[i]).css("backgroundColor", "White");
        }

      }

      if (boxIndex === boxArray.length - 1) {
        opacity = 0.75;

        while (opacity > 0) {
          console.log("Opacity after boxIndex last: " + opacity);
          let op = opacity;

          for (let i = boxIndex; i >= 0; i--) {
            if (op > 0) {
              bcColor = `rgb(255, 0, 0, ${op})`;
              $(boxArray[i]).css("backgroundColor", bcColor);
              op -= 0.25;
            } else {
              $(boxArray[i]).css("backgroundColor", "White");
            }
          }
          opacity -= 0.25;
        }
      }
    }

    function colorChanges() {
      kitsLights();

      if (boxIndex === boxArray.length - 1) {
        boxArray.reverse();
        console.log(boxArray);
      }

      boxIndex = (boxIndex + 1) % boxArray.length;

      console.log(boxIndex);
    }

    const audio = $("#backgroundAudio")[0];
    const playPauseBtn = $("#playPauseBtn");

    let isPlaying = false;
    let colorsBar;

    playPauseBtn.on("click", function () {
      if (isPlaying) {
        clearInterval(colorsBar);
        audio.pause();
        playPauseBtn.text("Play");
      } else {
        audio.play();
        colorsBar = setInterval(colorChanges, 150);
        playPauseBtn.text("Pause");
      }
      isPlaying = !isPlaying;
    });

  });