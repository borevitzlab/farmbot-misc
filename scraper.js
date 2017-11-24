// Farmbot image scraper
function getPhotos(i) {
  if (!i) return;
  loopLengthMs = 500;
  var theButton = document.querySelectorAll("button[class='image-flipper-left fb-button']")[0]
  var thisLink = document.querySelectorAll("img[class='image-flipper-image is-loaded-true']")[0].currentSrc;
  var nodeToAdd = document.querySelectorAll("div[class='widget-wrapper photos-widget']")[0]
  // human-readable time
  //var thisTime = document.querySelectorAll("div[class='image-created-at']")[0].children[1].innerHTML
  // the GET query is a unix timestamp
  var thisTime = thisLink.split("?")[1]
  // different output formats
  var addTextAsLink = '<a href="'+thisLink+'">'+thisLink+'</a><br />';
  var addTextAsUrlList = thisLink + '<br />';
  var addTextForCurl = 'url="' + thisLink + '"<br />' + 'output="'+ thisTime + '.jpg"<br />'
  if (typeof lastLink !== 'undefined'){ // check if lastLink is set
    if (lastLink == thisLink){
      // if the last URL is the same as current, try again later
      setTimeout(function() {getPhotos(i);}, loopLengthMs);
      return;
    }
  }
  if (thisLink==""){
    // if the image link hasn't loaded yet, try again later
    // TODO: quit after too many attempts
    setTimeout(function() {getPhotos(i);}, loopLengthMs);
    return;
  }
  theButton.click(); // advance to next image
  nodeToAdd.insertAdjacentHTML('beforeend', addText2);
  if (theButton.disabled && i>1){
    // if we clicked to the last image, do one last loop
    setTimeout(function() {getPhotos(1);}, loopLengthMs);
  } else {
    setTimeout(function() {getPhotos(i-1);}, loopLengthMs);
  }
}
getPhotos(100);
