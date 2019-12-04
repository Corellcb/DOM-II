// Your code goes here
let imgs = document.querySelectorAll('img');
imgs.forEach(el => {
    el.addEventListener('mouseenter', (event) =>
    {
        el.style.transform = 'scale(1.20)';
        el.style.transition = 'transform 0.3s';
    })
    el.addEventListener('mouseleave', (event) =>
    {
        el.style.transform = 'scale(1)';
    })
})

let nav = document.querySelectorAll('nav a');
nav.forEach(el => {
    el.addEventListener('mouseenter', (event) =>
    {
        el.style.backgroundColor = 'whitesmoke';
    })

    el.addEventListener('mouseleave', (event) =>
    {
        el.style.backgroundColor = 'white';
    })
})

let busImg = document.querySelector('header img');
let clickCount = 0;
busImg.addEventListener('click', (event) =>
{
    if(clickCount === 0){
        busImg.style.position = 'absolute';
        busImg.style.top = 0;
        busImg.style.left = 0;
        busImg.style.transform = 'scale(0.5)';
        clickCount++;
        event.stopPropagation();
    } else if (clickCount === 1) {
        busImg.style.position = 'absolute';
        busImg.style.top = '400px';
        busImg.style.left = '200px';
        busImg.style.transform = 'scale(0.2)';
        clickCount++;
    } else if (clickCount === 2) {
        busImg.style.position = 'absolute';
        busImg.style.top = '10px';
        busImg.style.left = '100px';
        busImg.style.transform = 'scale(0.2)';
        clickCount++;
    } else if (clickCount <= 3) {
        busImg.style.position = 'absolute';
        busImg.style.top = '0';
        busImg.style.left = '0';
        busImg.style.transform = 'scale(1)';
        clickCount = 0;
    }
})

let bottomBtns = document.querySelectorAll('.btn');
bottomBtns.forEach(el =>
    {
        el.addEventListener('dblclick', (event) => {
            if(el.style.color === 'black'){
                el.style.color = '#FFFFFF';
                el.style.backgroundColor = '#17A2B8';
            } else {
                el.style.color = 'black';
                el.style.backgroundColor = 'grey';
            }
        })
    }
);
