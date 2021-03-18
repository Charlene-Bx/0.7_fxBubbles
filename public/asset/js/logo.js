const oeil = document.querySelector('.nav__logo__background');

const width_oeil = oeil.scrollWidth;
const height_oeil = oeil.scrollHeight;

const width_window = window.innerWidth;
const height_window = window.innerHeight;

const deplacementX = 85/width_window; //deplacementX= maximum de deplacement de la pupille/la largeur de l'ecran
const deplacementY = 25/width_window; //deplacementX= maximum de deplacement de la pupille/la largeur de l'ecran


const width = deplacementX/ width_window;
const height = deplacementY/ height_window;

let bg_PositionX_init= 78.5;
let bg_PositionY_init= -22;

window.addEventListener('mousemove',(user)=>{
    let bg_PositionX= bg_PositionX_init;
    let bg_PositionY= bg_PositionY_init;

    let positionX = user.clientX - (width_window/2);
    let positionY = user.clientY - (height_window/2);

    bg_PositionX += positionX * deplacementX;
    bg_PositionY += positionY * deplacementY;

    oeil.style.backgroundPositionX= `${bg_PositionX}px`
    oeil.style.backgroundPositionY= `${bg_PositionY}px`
})

