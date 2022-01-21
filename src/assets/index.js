import MediaPlayer from "./mediaPlayer.js";
import Autoplay from "./plugins/autoplay.js";
import Autopause from "./plugins/autopause.js";
import AdsPlugin from "./ads/index.js";

const video = document.querySelector('video');
const button = document.getElementById('one');
const buttonTwo = document.getElementById('two')

const player = new MediaPlayer({
    el: video,
    plugins: [new Autoplay(), new Autopause(), new AdsPlugin()]
});

button.onclick = () => player.tooglePlay();
buttonTwo.onclick = () => player.toogleSound();

