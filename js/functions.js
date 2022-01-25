import {$video, $play, $pause, $backward, $forward, $progress} from "./index.js";

export function handlePlay() {
    $video.play()
    $play.hidden = true;
    $pause.hidden = false;
    console.log("Le diste click al boton de Play")
}

export function handlePause() {
    $video.pause()
    $play.hidden = false;
    $pause.hidden = true;
    console.log("Le diste click al boton de Pause")
}

export function handleBackward() {
    $video.currentTime-=10;
    console.log("Le diste click a retroceder 10 segundos", $video.currentTime)
}

export function handleForward() {
    $video.currentTime+=10;
    console.log("Le diste click a adelantar 10 segundos")
}

export function handleLoaded() {
    $progress.max = $video.duration
    console.log('Ha cargado mi video')
}

export function handleTimeUpdate() {
    $progress.value = $video.currentTime
}

export function handleInput() {
    $video.currentTime = $progress.value}