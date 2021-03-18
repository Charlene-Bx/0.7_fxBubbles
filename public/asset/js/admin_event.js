let isFolded=true;

const seeEvent = (target) => {
    

    const card = target.parentElement.parentElement.parentElement;
    const card_height = card.scrollHeight;

    const subbody = card.lastElementChild;

    let subbody_height;

    if(isFolded){
        isFolded=false;
        subbody.style.visibility='visible';
        subbody.children[1].style.display='none';
        subbody.children[0].style.display='initial';
        subbody_height = subbody.scrollHeight;
        card.style.height= `${card_height+subbody_height}px`;
    }else{
        isFolded=true;
        subbody.style.visibility='hidden';
        subbody.children[0].style.display='none';
        card.style.height= `15rem`;
    }
}

const editEvent = (target) => {

    const card = target.parentElement.parentElement.parentElement;
    const card_height = card.scrollHeight;

    const subbody = card.lastElementChild;

    let subbody_height;

    if(isFolded){
        isFolded=false;
        subbody.style.visibility='visible';
        subbody.children[0].style.display='none';
        subbody.children[1].style.display='initial';
        subbody_height = subbody.scrollHeight;
        card.style.height= `${card_height+subbody_height}px`;
    }else{
        isFolded=true;
        subbody.style.visibility='hidden';
        subbody.children[0].style.display='none';
        card.style.height= `15rem`;
    }
}

//Changer la couleur du tag en fonction de la categorie
const categories= document.querySelectorAll('.event-category');

const color_festival = '#E0A66F';
const color_workshop = '#94463A';
const colors_conference = '#046666';
const colors_concours = '#3A946B';

categories.forEach(category=>{

    switch(category.textContent){
        case 'festival':
            category.style.backgroundColor= color_festival;
            break;
        case 'workshop':
            category.style.backgroundColor= color_workshop;
            break;
        case 'conférence':
            category.style.backgroundColor= colors_conference;
            break;
        case 'concours':
            category.style.backgroundColor= colors_concours;
            break;
    }
})