let isFolded=true;

const seeEvent = (target) => {
    const card = target.parentElement.parentElement.parentElement;
    const card_height = card.scrollHeight;

    const subbody = card.lastElementChild;
    const subbody_height = subbody.scrollHeight;
    if(isFolded){
        isFolded=false;
        subbody.style.visibility='visible';
        card.style.height= `${card_height+subbody_height}px`;
    }else{
        isFolded=true;
        subbody.style.visibility='hidden';
        card.style.height= `15rem`;
    }
}
