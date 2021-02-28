const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

const doubleClickTime = 800;
let lastClickTime;
let doubleClickPossible = false;
let timesLoved = 0;

loveMe.addEventListener('click', handleClick);

function handleClick(e) {
    const clickTime = new Date().getTime();

    if (doubleClickPossible && clickTime - lastClickTime <= doubleClickTime) {
        handleDoubleClick(e);
        doubleClickPossible = false;
    } else {
        doubleClickPossible = true;
    }

    lastClickTime = clickTime;
}

function handleDoubleClick(e) {
    const heart = document.createElement('i');
    heart.classList = 'fas fa-heart';
    heart.style.left = e.clientX - loveMe.offsetLeft + 'px';
    heart.style.top = e.clientY - loveMe.offsetTop + 'px';

    loveMe.appendChild(heart);
    setTimeout(() => heart.remove(), 600);

    timesLoved++
    times.innerText = timesLoved;
}