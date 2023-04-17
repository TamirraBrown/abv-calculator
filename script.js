function calculateABV() {
    // Get OG and FG values from input fields
    var og = document.getElementById("og").value;
    var fg = document.getElementById("fg").value;

    // Calculate ABV using the following formula:
    // (OG - FG) * 131.25
    var abv = (og - fg) * 131.25;

    // Display the result
    document.getElementById("abv").innerHTML = abv;
  }

  function searchByKeyword() {
    var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});
  
    for(var i in results.items) {
      var item = results.items[i];
      Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
    }
  }


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