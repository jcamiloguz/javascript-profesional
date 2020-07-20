import MediaPlayer from '../mediaplayer'
class AutoPlay {
    constructor() {
    }
    run(player:MediaPlayer) {
        if (!player.media.muted) {
            player.media.muted = true
        }
        // player.toggleMute()
        player.media.play()
    }
}
export default AutoPlay