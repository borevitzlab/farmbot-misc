// Farmbot image scraper
function getPhotos(i) {
  if (!i) return;
  loopLengthMs = 500;
  var theButton = document.querySelectorAll("button[class='image-flipper-left fb-button']")[0]
  var thisLink = document.querySelectorAll("img[class='image-flipper-image is-loaded-true']")[0].currentSrc;
  //var thisTime = document.querySelectorAll("div[class='image-created-at']")[0].children[1].innerHTML
  var thisTime = thisLink.split("?")[1]
  var addLink = '<a href="'+thisLink+'">'+thisLink+'</a><br />';
  var addText = '"' + thisTime + '" ' + thisLink + '<br />';
  var addText2 = 'url="' + thisLink + '"<br />' + 'output="'+ thisTime + '.jpg"<br />'
  var nodeToAdd = document.querySelectorAll("div[class='widget-wrapper photos-widget']")[0]
  if (typeof lastLink !== 'undefined'){
    if (lastLink == thisLink){
      setTimeout(function() {getPhotos(i);}, loopLengthMs);
      return;
    }
  }
  if (thisLink==""){
    setTimeout(function() {getPhotos(i);}, loopLengthMs);
    return;
  }
  theButton.click();
  nodeToAdd.insertAdjacentHTML('beforeend', addText2);
  if (theButton.disabled && i>1){
    setTimeout(function() {getPhotos(1);}, loopLengthMs);
  } else {
    setTimeout(function() {getPhotos(i-1);}, loopLengthMs);
  }
}
getPhotos(100)
