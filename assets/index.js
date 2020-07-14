import MediaPlayer from './mediaplayer.js'
import Autoplay from './plugins/autoplay.js'


const video = document.querySelector('video')
const button = document.querySelector('button')
const bmute = document.getElementById('b_mute')

const player = new MediaPlayer({ el: video, plugins:[new Autoplay()]})
button.onclick = () => player.togglePlay()
bmute.onclick = () => player.toggleMute()
