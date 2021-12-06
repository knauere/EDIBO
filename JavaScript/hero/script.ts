const hero = document.querySelector('.hero');

const heroPos = {
    y: 0,
    x: 0,
}

hero.addEventListener('keydown', event => {
    console.log('.hero', event);
    if (event.code === 'ArrowRight') {
        heroPos.x += 20;
    }
    moveHero();
});

hero.addEventListener('keydown', event => {
    console.log('.hero', event);
    if (event.code === 'ArrowLeft') {
        heroPos.x += -20;
    }
    moveHero();
});

hero.addEventListener('keydown', event => {
    console.log('.hero', event);
    if (event.code === 'ArrowDown') {
        heroPos.y += 20;
    }
    moveHero();
});

hero.addEventListener('keydown', event => {
    console.log('.hero', event);
    if (event.code === 'ArrowUp') {
        heroPos.y += -20;
    }
    moveHero();
});

const moveHero = () => {
    hero.style.left = heroPos.x + 'px';
    hero.style.top = heroPos.y + 'px';
}


