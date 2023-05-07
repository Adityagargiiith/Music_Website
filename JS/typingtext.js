var about = "About";
var us = "Us";
var aboutIndex = 0;
var usIndex = 0;
var aboutElement = document.getElementById("about");
var usElement = document.getElementById("us");
var isReversing = false;

function type() {
  if (!isReversing) {
    if (aboutIndex < about.length) {
      aboutElement.innerHTML += about.charAt(aboutIndex);
      aboutIndex++;
    } else if (usIndex < us.length) {
      usElement.innerHTML += us.charAt(usIndex);
      usIndex++;
    } else {
      isReversing = true;
    }
  } else {
    if (usIndex > 0) {
      usElement.innerHTML = usElement.innerHTML.slice(0, -1);
      usIndex--;
    } else if (aboutIndex > 0) {
      aboutElement.innerHTML = aboutElement.innerHTML.slice(0, -1);
      aboutIndex--;
    } else {
      isReversing = false;
    }
  }
}

setInterval(type, 200);
