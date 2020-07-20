class MediaPlayer {
  media:HTMLMediaElement
  plugins:Array<any>
  constructor(config) {
    this.media = config.el
    this.plugins = config.plugins || []
    this.initPlugins()
  }
  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this)
    })
  }
  togglePlay() {
    (this.media.paused)
      ? this.media.play()
      : this.media.pause()
  }
  toggleMute() {
    (!this.media.muted)
      ? this.media.muted = true
      : this.media.muted = false
  }
}
  
  export default MediaPlayer