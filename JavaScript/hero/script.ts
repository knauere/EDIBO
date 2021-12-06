const hero = document.querySelector('.hero');

const heroPos = {
    y: 0,
    x: 0,
}

hero.addEventListener('keydown', event => {
    console.log('.hero', event);
    if (event.code === 'ArrowRight') {
        heroPos.x += 20;
        hero.style.animation = 'AniRight 1s steps(3) infinite'
    }
    moveHero();
});

hero.addEventListener('keydown', event => {
    console.log('.hero', event);
    if (event.code === 'ArrowLeft') {
        heroPos.x += -20;
        hero.style.animation = 'AniLeft 1s steps(3) infinite'
    }
    moveHero();
});

hero.addEventListener('keydown', event => {
    console.log('.hero', event);
    if (event.code === 'ArrowDown') {
        heroPos.y += 20;
        hero.style.animation = 'AniBack 1s steps(3) infinite'
    }
    moveHero();
});

hero.addEventListener('keydown', event => {
    console.log('.hero', event);
    if (event.code === 'ArrowUp') {
        heroPos.y += -20;
        hero.style.animation = 'AniFront 1s steps(3) infinite'
    }
    moveHero();
});

const moveHero = () => {
    hero.style.left = heroPos.x + 'px';
    hero.style.top = heroPos.y + 'px';
}


const coin = document.querySelector('.coin');
