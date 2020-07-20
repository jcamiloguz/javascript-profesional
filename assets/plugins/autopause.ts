import MediaPlayer from '../mediaplayer'
class AutoPause {
    player: MediaPlayer
     i:number
    constructor() {
        this.handler = this.handler.bind(this)
        this.handlerVC = this.handlerVC.bind(this)
    }
    run(player){
        this.player=player
        this.i=1
        const observer = new IntersectionObserver(this.handler,{
            threshold:0.5
        })
        observer.observe(player.media)
        document.addEventListener("visibilitychange", this.handlerVC)
    }
     handler(entries:IntersectionObserverEntry[]){
        const entry = entries[0]
        console.log(entry)
        if(entry.isIntersecting===true){
            (this.i===1)
            ?this.i++
            :this.player.togglePlay()
        }
        if(entry.isIntersecting===false){
            this.player.togglePlay()
        }
    }
     handlerVC(){
        const isVisible= document.visibilityState==='visible'
        if (isVisible){
            this.player.media.play()
        }else{
            this.player.media.play()
            
        }
    }
}

export default AutoPause