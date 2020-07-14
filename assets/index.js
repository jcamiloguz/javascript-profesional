import MediaPlayer from './mediaplayer.js'
const video = document.querySelector('video')
const button = document.querySelector('button')

const player = new MediaPlayer({ el: video })
button.onclick = () => player.play()
