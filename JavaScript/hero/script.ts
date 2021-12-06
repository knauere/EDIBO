const hero = document.querySelector('.hero');

const heroPos = {
    x: 0,
    y: 0,
}

hero.addEventListener('keydown', event => {
    console.log('.hero', event);
    if (event.code === 'ArrowDown') {
        heroPos.y += 10;
    }
    moveHero();
});

const moveHero = () => {
    hero.style.top = heroPos.y + 'px';

}
