function AutoPlay(){
}
AutoPlay.prototype.run=function(player){
    if(!player.muted){
        player.muted =true
    }
    // player.toggleMute()
    player.play()
}
export default AutoPlay