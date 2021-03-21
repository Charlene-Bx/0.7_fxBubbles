// TRANSITIONS ///////////////////////////////////////////////////////////////////
// • slide opacity transition
let urlcourante = document.location.href;
let nbSlide;

const opacityTransition = (array) => {
    //toutes les 5s...
    let activeSlide;
    let nextSlide;
    let newNextSlide;
    //definir la slide active et les deux slides qui la précéde
    array.forEach((slide,index,all) => {
        if(slide.classList.contains("--activeSlide")){
            activeSlide= slide
        }
        if(slide.classList.contains("--nextSlide")){
            nextSlide= slide
            newNextSlide= index < nbSlide ? all[index+1] : all[0]

        }
    })
    //la slide active donne sa classe à la prochain, et ainsi de suite
    activeSlide.classList.remove("--activeSlide")
    nextSlide.classList.remove("--nextSlide")

    nextSlide.classList.add("--activeSlide")
    newNextSlide.classList.add("--nextSlide")
}

///////////////////////////////////////////////////////////////////////////////////


// SLIDES ////////////////////////////////////////////////////////////////////////

switch(urlcourante){
    case 'http://localhost:3000/infos':
        // • info slide
        const info_img={
            chucky:'./images/injuries1.jpg',
            frankenstein:'./images/injuries2.jpg',
            moule: './images/moule.jpeg',
            protheses: './images/protheses.jpg'
        };

        const info_slide= document.querySelector("#info_slide");
        const info_slideShow= info_slide.querySelector(".slide__show");
        const info_navigation= info_slide.querySelector(".slide__nav");

        for (image in info_img){
            //creer les slides et les inserer dans le DOM
            let newSlide= document.createElement('div');
            newSlide.className= "slide__items";
            newSlide.setAttribute('alt', image);
            newSlide.style.backgroundImage= `url(${info_img[image]})`;
            info_slideShow.appendChild(newSlide);

            //creer les icônes de navigation et les inserer dans le DOM
            // let newIco= document.createElement('span');
            // newIco.className= "slide__nav__ico --pointer";
            // header_navigation.appendChild(newIco);
        };

        const info_slideImages= document.querySelectorAll('.slide__items');
        const info_navIco= document.querySelectorAll('.slide__nav__ico');
        nbSlide= info_slideImages.length-1
        //initialiser la premiére slide et la suivante
        info_slideImages[0].classList.add("--activeSlide")
        info_slideImages[1].classList.add("--nextSlide")

        //lancer l'animation; tout les 5sc
        const transitionSlideInfo = setInterval(()=>{opacityTransition(info_slideImages)},10000);
        break;

    default:
        // • header slide
        const header_img={
            chucky:'./images/Chucky.jpg',
            frankenstein:'./images/Frankenstein.jpg',
            moule: './images/moule.jpeg',
            protheses: './images/protheses.jpg'
        };

        const header_slide= document.querySelector("#header_slide");
        const header_slideShow= header_slide.querySelector(".slide__show");
        const header_navigation= header_slide.querySelector(".slide__nav");

        for (image in header_img){
            //creer les slides et les inserer dans le DOM
            let newSlide= document.createElement('div');
            newSlide.className= "slide__items";
            newSlide.setAttribute('alt', image);
            newSlide.style.backgroundImage= `url(${header_img[image]})`;
            header_slideShow.appendChild(newSlide);

            //creer les icônes de navigation et les inserer dans le DOM
            // let newIco= document.createElement('span');
            // newIco.className= "slide__nav__ico --pointer";
            // header_navigation.appendChild(newIco);
        };

        const header_slideImages= document.querySelectorAll('.slide__items');
        const header_navIco= document.querySelectorAll('.slide__nav__ico');
        nbSlide= header_slideImages.length-1

        //initialiser la premiére slide et la suivante
        header_slideImages[0].classList.add("--activeSlide")
        header_slideImages[1].classList.add("--nextSlide")

        //lancer l'animation; tout les 5sc
        const transitionSlide = setInterval(()=>{opacityTransition(header_slideImages)},10000);
        break;

}

///////////////////////////////////////////////////////////////////////////////////

