class Autoplay{
    constructor(){
        
    }
    run(player){
        if(!player.muted){
            player.muted = true;
        }
        player.media.play();
    }
}

export default Autoplay