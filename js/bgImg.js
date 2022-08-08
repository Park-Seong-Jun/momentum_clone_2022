
const images = ["0.JPEG","1.JPEG","2.JPEG","3.JPEG","4.JPEG","5.JPEG","6.JPEG",]

const imgSrc = images[(Math.floor(Math.random()*7))]

const bgImg = document.createElement("img");

bgImg.src = `img/${imgSrc}`;

document.body.appendChild(bgImg)
