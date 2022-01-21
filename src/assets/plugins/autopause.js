class Autopause {
    constructor(){
        this.threshold = 0.7;
        this.handelIntersection = this.handelIntersection.bind(this);//it was pointing interObs
        this.handleVisibilitychange = this.handleVisibilitychange.bind(this);//pointing Event

    }
    run(player){
        this.player = player;
        

        const observer = new IntersectionObserver(this.handelIntersection, {
            threshold: this.threshold,
        });
        
        observer.observe(this.player.media);

        document.addEventListener('visibilitychange', this.handleVisibilitychange)
    }
    //useful when we are not focusing the target (video)
    handelIntersection(entries){
        const entry = entries[0];

        const isVisible = entry.intersectionRatio > this.threshold;

        if(isVisible){
            this.player.media.play();
           
        }else{
            this.player.media.pause();
            
        }

        console.log(entry);
    }

    //useful when we are not in the tab
    handleVisibilitychange(){
        const isVisible = document.visibilityState == 'hidden';

        if(isVisible){
            this.player.media.pause();
        }else{
            this.player.media.play();
        }
    }
}

export default Autopause;