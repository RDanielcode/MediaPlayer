class MediaPlayer {
    constructor(config){
        this.media = config.el;
        this.media.controls = true;
        this.plugins = config.plugins || [];

        this.initPlayer();
        this._initPlugins();
    }

    initPlayer(){
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media); 
    }

    _initPlugins(){
        const player = {
            media: this.media,
            container: this.container,
            play: () => media.play(),
            pause: () => media.pause(),
        
            get muted(){
                return this.media.muted
            },
            
            set muted(value) {
                this.media.muted = true
            }
        }       
        this.plugins.forEach(plugin => {
        plugin.run(player)});        
    }

    tooglePlay(){
        if(this.media.paused){
            this.media.play();

        } else {
            this.media.pause();
        }
    }

    toogleSound(){
        if(this.media.muted){
            this.media.muted = false;
        } else {
            this.media.muted = true;
        }
    }
}

export default MediaPlayer