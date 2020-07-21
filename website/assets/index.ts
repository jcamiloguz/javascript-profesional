import MediaPlayer from '@jcamiloguz/mediaplayer'
import Autoplay from '@jcamiloguz/mediaplayer/lib/plugins/autoplay'
import Autopause from '@jcamiloguz/mediaplayer/lib/plugins/autopause'
import Ads from '@jcamiloguz/mediaplayer/lib/plugins/Ads'


const video = document.querySelector('video')
const button:HTMLElement = document.querySelector('button')
const bmute:HTMLElement = document.getElementById('b_mute')

const player = new MediaPlayer({ el: video, plugins:[
   new Autoplay(),
   new Autopause(),
   new Ads()
]})
button.onclick = () => player.togglePlay()
bmute.onclick = () => player.toggleMute()
if ('serviceWorker'in navigator){
   navigator.serviceWorker.register('/sw.js').catch(error=>{
      console.log(error)})
}
