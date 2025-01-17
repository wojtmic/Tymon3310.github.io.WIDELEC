window.onload = (event) => {
  const resizeOps = () => {
document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
};

resizeOps();
window.addEventListener("resize", resizeOps);
};

var siteWidth = 1280;
var scale = screen.width /siteWidth;

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');

const mobile = document.querySelector(".mobile"),
pc = document.querySelector(".computer"),
media = window.matchMedia("(max-width: 1000px)")

  if (media.matches) {
mobile.style.display = "none"
pc.style.display = "block"
 } else {
pc.style.display = "none"
mobile.style.display = "block" 
}

//theme switch


function dark() {
  var element = content
  element.classList.toggle("dark-mode");
}

function dark2() {
  var element = content
  element.classList.toggle("darker-mode");
}

//langugage

function en(){
  window.open('EN.html', '_self');
}

function pl(){
  window.open('index.html', '_self');
}