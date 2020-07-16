import MediaPlayer from './mediaplayer.js'
import Autoplay from './plugins/autoplay.js'
import Autopause from './plugins/autopause.js'


const video = document.querySelector('video')
const button = document.querySelector('button')
const bmute = document.getElementById('b_mute')

const player = new MediaPlayer({ el: video, plugins:[
   new Autoplay(),
   new Autopause()
]})
button.onclick = () => player.togglePlay()
bmute.onclick = () => player.toggleMute()
if ('serviceWorker'in navigator){
   navigator.serviceWorker.register('/sw.js').catch(error=>{
      console.log(error)})
}
