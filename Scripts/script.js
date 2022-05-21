
var slideShow;
var next_img = document.querySelector('.next_img');
var array = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
var i = 0;
function prevImage() {
  if (i <= 0) i = array.length;
  i--;
  return setImage();
}

function nextImage() {
  if (i >= array.length - 1) i = -1;
  i++;

  return setImage();
}

function setImage() {
  return next_img.setAttribute('src', "../Images/" + array[i]);
}
var img_interval;
function startSlideShow() {
  if (i < 5) {
    i++;
    setImage();
  }
  else {
    i = 0;
  }
  img_interval = setTimeout(startSlideShow, 500);
}

function stopSlideShow() {
  clearTimeout(img_interval);
}