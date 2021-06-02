const sentence = "hello there from lighthouse labs";
const speed = 50;
const i = 0;
const str =""

function typeWriter() {
    if (i < sentence.length) {
      str += sentence.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
}
typeWriter();