const deg = 6;
const hr = document.querySelector('#hour');
const min = document.querySelector('#minute');
const sec = document.querySelector('#second');

let date = new Date();
let hour = date.getHours() * 30;
let minute = date.getMinutes() * deg;
let second = date.getSeconds() * deg;

hr.style.transform = `rotate(${(hour)+(minute/12)}deg)`;
hr.style.transformOrigin = 'bottom';

min.style.transform = `rotate(${minute}deg)`;
min.style.transformOrigin = 'bottom';

sec.style.transform = `rotate(${second}deg)`;
sec.style.transformOrigin = 'bottom';

/*transform: rotate(60deg);
    transform-origin: bottom;*/