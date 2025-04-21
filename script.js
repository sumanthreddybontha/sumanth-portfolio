const text = "Hi, I'm Sumanth Reddy Bontha";
let i = 0;
const speed = 70;
const element = document.getElementById("intro-text");

function typeWriter() {
  if (i < text.length) {
    element.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
    i++;
    setTimeout(typeWriter, speed);
  } else {
    element.innerHTML = text;
  }
}
window.onload = typeWriter;
