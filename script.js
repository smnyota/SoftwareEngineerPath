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



/* Button for the key - Already done! 
button.addEventListener("click", (e) => {
  button.classList.add("hidden");
  clue2.classList.remove("hidden");
});

*/
//image.src = "img/images_1.jpg";