import MediaPlayer from './mediaplayer'
import Autoplay from './plugins/autoplay'
import Autopause from './plugins/autopause'


const video = document.querySelector('video')
const button:HTMLElement = document.querySelector('button')
const bmute:HTMLElement = document.getElementById('b_mute')

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
