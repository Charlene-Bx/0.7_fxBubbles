//Afficher les mois à partir de la date
const months = document.querySelectorAll('.event-month')
const days = document.querySelectorAll('.event-day') 

months.forEach(month=>{
    let monthName;
    switch(Number(month.textContent)){
        case 0: 
            monthName='Janvier';
            break;
        case 1:
            monthName='Fevrier';
            break;
        case 2:
            monthName='Mars';
            break; 
        case 3:
            monthName='Avril';
            break;   
        case 4: 
            monthName='Mai';
            break;
        case 5:
            monthName='Juin';
            break;
        case 6:
            monthName='Juillet';
            break; 
        case 7:
            monthName='Août';
            break;  
        case 8: 
            monthName='Septembre';
            break;
        case 9:
            monthName='Octobre';
            break;
        case 10:
            monthName='Novembre';
            break; 
        case 11:
            monthName='Décembre';
            break;        
    };
    month.innerHTML= monthName
})

days.forEach(day=>{
    if(Number(day.textContent)<10){
        day.innerHTML=`0${Number(day.textContent)}`
    };
})

//Afficher les  infos complementaires en dropdown
const dropdowns = document.querySelectorAll('.card__dropdown');
const card_body_height = document.querySelector('.card__body').scrollHeight;

dropdowns.forEach(card=>{
    let card_body= card.parentElement.parentElement.parentElement.parentElement;
    let card_subbody_height= card_body.children[2].scrollHeight;
    let isFolded=true;

    card.addEventListener('click',()=>{
        if(isFolded){
            isFolded=false;
            card_body.children[2].style.visibility='visible';
            card_body.style.height= `${card_body_height+card_subbody_height}px`;
            card.children[0].className="fas fa-chevron-up";
            
        }else{
            isFolded=true;
            card_body.style.height= '30vh';
            card.children[0].className="fas fa-chevron-down";

        }
    })
})

//Changer la couleurs du tag en fonction de la categorie

const color_festival = '#E0A66F';
const color_workshop = '#94463A';
const colors_conference = '#046666';
const colors_concours = '#3A946B';

