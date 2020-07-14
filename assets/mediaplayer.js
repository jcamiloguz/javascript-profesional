function MediaPlayer(config){
    this.media = config.el
    this.plugins = config.plugins || []
    this.initPlugins() 
  }
  MediaPlayer.prototype.initPlugins=function(){
    this.plugins.forEach(plugin =>{
      plugin.run(this)
    })
  }
  
  MediaPlayer.prototype.togglePlay = function(){
    (this.media.paused)
    ?this.media.play()
    :this.media.pause()
  }
  MediaPlayer.prototype.toggleMute = function(){
    (!this.media.muted)
    ?this.media.muted=true
    :this.media.muted=false
  }
  export default MediaPlayer