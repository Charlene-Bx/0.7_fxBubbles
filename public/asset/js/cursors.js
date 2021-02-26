//retirer le cursor de tout le document
const doc = document.getElementsByTagName('html');
doc[0].style.cursor='none';

//créer une div contenant le cursor personalisé
const cursor= document.createElement('div');
cursor.id='cursor';
document.body.appendChild(cursor);

//definir les differents etat du cursor
const text= 'text';
const fat= 'fat';

//selectioner les elements declancheur du changement d'etat du cursor
const links= document.querySelectorAll('a');
const btns= document.querySelectorAll('.pointer');
const input= document.querySelectorAll('input.text');;

// recuperer les données du curseur original, et les retransmet a notre curseur
window.addEventListener('mousemove',(e)=>{
    x = e.clientX;
    y = e.clientY;
    cursor.style.transform=`translate(${x-20}px,${y-20}px)`
});

// créer les fonctions pour changer le curseur
const cursorFat=(e)=>{
    const hasFatClass = cursor.classList.contains('fat');
    if(!hasFatClass){
        cursor.className='fat';
    };
};
const cursorLight=(e)=>{
    const hasFatClass = cursor.classList.contains('fat');
    if(hasFatClass){
        cursor.className='';
    };
};

btns.forEach(btn=>{
    btn.addEventListener('mouseover',cursorFat);
    btn.addEventListener('mouseout',cursorLight);
})
links.forEach(link=>{
    link.addEventListener('mouseover',cursorFat);
    link.addEventListener('mouseout',cursorLight);
})




