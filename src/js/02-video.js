import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const livetime = 
    {
    duration: 0,
    percent: 0,
    seconds: 0
}
const upadteTime = "videoplayer-current-time";
const local = localStorage.getItem(upadteTime);
player.on('timeupdate', throttle((onplay), 1000)); 
function onplay(data) {
    livetime.duration = data.duration;
    livetime.percent = data.percent;
    livetime.seconds = data.seconds;
    localStorage.setItem(upadteTime, JSON.stringify(livetime));
}
if (local) {
    const time = JSON.parse(local);
    player.setCurrentTime(time.seconds);
}

