let image = document.getElementById("imagec");
image.src = 'img/images_0.jpg';
//let slidehsow = true;
/*
async function test() {
  if(imgnum === 0)
  {
    ts = imgnum.toString();
    image.src = 'img/images_' + sts + '.jpg';
    await sleep(5000);///this waits 5 seconds
  }
   if(imgnum === 1)
  {
    sts = imgnum.toString();
    image.src = 'img/images_' + sts + '.jpg';
  }
}

test();
*/

setTimeout(() => image.src = 'img/images_0.jpg', 5000);
setTimeout(() => image.src = 'img/images_1.jpg', 5000);
/////////I should probably explain what is occuring in the code above, it is the front image slide show. I'm taking the lazy approach and just making the images the same size so the webpage doesnt shift around...


/* Button for the key - Already done! 
button.addEventListener("click", (e) => {
  button.classList.add("hidden");
  clue2.classList.remove("hidden");
});

*/
//image.src = "img/images_1.jpg";