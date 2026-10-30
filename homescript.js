// h1 needs to change colors at random intervals between 1 and 5 seconds
const h1 = document.querySelector('h1');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    h1.style.color = getRandomColor();
    const randomInterval = Math.floor(Math.random() * 5000) + 1000; // Random interval between 1 and 5 seconds
    setTimeout(changeColor, randomInterval);
}

changeColor();

// I need li elements to change colors at random intervals between 1 and 5 seconds
const liElements = document.querySelectorAll('li');

function changeLiColor() {
    liElements.forEach(li => {
        li.style.color = getRandomColor();
    });
    const randomInterval = Math.floor(Math.random() * 5000) + 1000; // Random interval between 1 and 5 seconds
    setTimeout(changeLiColor, randomInterval);
}

changeLiColor();

// I need the background color of the body to change gradient colors at random intervals between 1 and 5 seconds
const body = document.querySelector('body');

function changeBodyGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
    const randomInterval = Math.floor(Math.random() * 5000) + 1000; // Random interval between 1 and 5 seconds
    setTimeout(changeBodyGradient, randomInterval);
}

changeBodyGradient();
