(function () {
  var NS = {};
  window.NS = NS;

  NS.toggle = function toggle(element) {
    if (element.paused) {
      element.play();
    } else {
      element.pause();
    }
  };


  (function addBlankToLinks() {
    var links = document.links;

    for (var i = 0, linksLength = links.length; i < linksLength; i++) {
      if (links[i].hostname != window.location.hostname) {
         links[i].target = '_blank';
      }
    }
  }());
}());
