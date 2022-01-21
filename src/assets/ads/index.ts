import MediaPlayer from "../mediaPlayer";
import Ads from "./ads"

class AdsPlugin {
    private ads: Ads;
    private player: MediaPlayer;
    private media: HTMLMediaElement;

    constructor(){
        this.ads = Ads.getInstance();
        this.handleTime = this.handleTime.bind(this);
    }

    run(player: MediaPlayer){
        this.player = player;
        this.media = this.player.media;
        this.media.addEventListener('timeupdate', this.handleTime);
    }

    handleTime(){
        const currentTime = Math.floor(this.media.currentTime);
        if (currentTime % 30 == 0){
            const ad = this.ads.getAds();
            console.log(ad);
        }

    }
}

export default AdsPlugin;