const calculateBtn = document.getElementById("calculate-btn");
const originalGravityInput = document.getElementById("original-gravity");
const finalGravityInput = document.getElementById("final-gravity");
const resultElement = document.getElementById("result");
        
calculateBtn.addEventListener("click", function() {
  const originalGravity = parseFloat(originalGravityInput.value);
  const finalGravity = parseFloat(finalGravityInput.value);
            
  if (!isNaN(originalGravity) && !isNaN(finalGravity)) {
    const abv = (originalGravity - finalGravity) * 131.25;
    resultElement.textContent = "ABV: " + abv.toFixed(2) + "%";
  } else {
    resultElement.textContent = "Invalid input. Please enter numeric values.";
  }
});


  //YouTube iFrame

  var tag = document.createElement("script");
  
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName ("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      height: "390",
      width: "640",
      start: 6000,
      videoId: "jNVePBvI2ps",
      playerVars: {
        'playsinline': 1
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange,
      }
    });
  }

function onPlayerReady(event) {
  event.target.loadVideoById("jNVePBvI2ps", 16, "large")
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(startVideo, 6000);
    done = true;
  }
}

function stopVideo() {
  player.stopVideo();
}