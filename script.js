

// Defined initial color with black;
let pixelBlack = document.querySelector('.selected')
localStorage.setItem('bgPixelBlack', 'black');
let bgPixelBlack = localStorage.getItem('bgPixelBlack');
pixelBlack.style.backgroundColor = bgPixelBlack;

