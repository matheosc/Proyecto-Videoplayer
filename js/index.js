import { handlePlay, handlePause, handleBackward, handleForward, handleLoaded, handleTimeUpdate, handleInput} from "./functions.js";

export const $video = document.querySelector('#video-lofi')
export const $play = document.querySelector('#play')
export const $pause = document.querySelector('#pause')
export const $backward = document.querySelector('#backward')
export const $forward = document.querySelector('#forward')
export const $progress = document.querySelector('#progress-bar')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)
$progress.addEventListener('input', handleInput)