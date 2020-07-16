class AutoPause {
    constructor() {
        this.handler = this.handler.bind(this)
        this.handlerVC = this.handlerVC.bind(this)
    }
    run(player){
        this.player=player
        const observer = new IntersectionObserver(this.handler,{
            threshold:0.5
        })
        observer.observe(player.media)
        document.addEventListener("visibilitychange", this.handlerVC)
    }
    handler(entries){
        const entry = entries[0]
        console.log(entry)
        if(entry.isIntersecting===true){
            entry.target.play()
        }
        if(entry.isIntersecting===false){
            entry.target.pause()
        }
    }
    handlerVC(){
        const isVisible= document.visibilityState==='visible'
        if (isVisible){
            this.player.play()
        }else{
            this.player.play()
            
        }
    }
}

export default AutoPause