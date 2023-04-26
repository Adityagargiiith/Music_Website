var myImage = document.getElementById("myImage");
var originalWidth = myImage.offsetWidth;
var intervalId;

myImage.addEventListener("mouseenter", function() {
  clearInterval(intervalId);
  intervalId = setInterval(function() {
    if (myImage.offsetWidth < originalWidth * 1.5 && myImage.offsetWidth < 500) {
      myImage.style.width = (myImage.offsetWidth + 1) + "px";
    } else {
      clearInterval(intervalId);
    }
  }, 10);
});

myImage.addEventListener("mouseleave", function() {
  clearInterval(intervalId);
  intervalId = setInterval(function() {
    if (myImage.offsetWidth > originalWidth) {
      myImage.style.width = (myImage.offsetWidth - 1) + "px";
    } else {
      clearInterval(intervalId);
    }
  }, 10);
});