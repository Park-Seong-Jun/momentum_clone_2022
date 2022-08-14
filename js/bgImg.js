
const images = ["https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg","https://cdn.pixabay.com/photo/2018/03/30/21/01/panorama-3276543_1280.jpg","https://cdn.pixabay.com/photo/2017/02/14/09/49/texture-2065459_1280.jpg","https://cdn.pixabay.com/photo/2018/03/01/16/38/nature-3191092_1280.jpg","https://cdn.pixabay.com/photo/2018/02/13/13/59/nature-3150812_1280.jpg","https://cdn.pixabay.com/photo/2017/07/08/14/53/nature-2484584_1280.jpg","https://cdn.pixabay.com/photo/2013/09/19/16/44/sky-183870_1280.jpg",]

const imgSrc = images[(Math.floor(Math.random()*images.length))]

const bgImgSrc = `url("${imgSrc}")`;

document.body.style.backgroundImage = bgImgSrc ;
