function randomRGB(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

// To change each letter independently
const letters = document.querySelectorAll('.letter');
const intervalId = setInterval(function(){
    for (let letter of letters){
        letter.style.color = randomRGB();
    }
}, 2000);
/*
const body = document.querySelector('body');
const interval = setInterval(function(){
    body.style.backgroundColor = randomRGB();
}, 3000);*/