const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

//creiamo delle costanti che implementino con JS le foto ed i circles

const listDom = document.querySelector('.list');

const allCircleDom = document.querySelector('.allCircle');

//grazie al ciclo for e all'implementazione tramite backtick
// creiamo i contenitori oscurati nell HTML

for (let i = 0; i < images.length; i++){
    listDom.innerHTML +=    `<div class="imgContainer">
                                <img class="image" src="${images[i].url}">
                                <span id='text-image'>
                                    <h2>${images[i].title}</h2>
                                    <p>${images[i].description}</p>
                                </span>
                            </div>`;
    allCircleDom.innerHTML += ` <div class="circle">
                                    <img class="image2" src="${images[i].url}">
                                </div>`;
}

let imageActive = 0;
const imgContainer = document.querySelectorAll('.imgContainer');
const circle = document.querySelectorAll('.circle');

imgContainer[imageActive].classList.add('show');
circle[imageActive].classList.add('active');

const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');

arrowRight.addEventListener('click', function(){
    right();
});

arrowLeft.addEventListener('click', function(){
    left();
});

/*
//prova bonus 2

function slide(){
    imgContainer.src = images[imageActive.url];
    imageActive++;
    if(imageActive >= images.length){
        imageActive = 0;
    }
}

setInterval(slide, 1000);


*/




function right(){
    imgContainer[imageActive].classList.remove('show');
    circle[imageActive].classList.remove('active');

    if(imageActive < images.length - 1){
        imageActive++;
    }else{
        imageActive = 0;  
    }
    
    imgContainer[imageActive].classList.add('show');
    circle[imageActive].classList.add('active');

    // arrowLeft.classList.remove('none');
}

function left(){
    imgContainer[imageActive].classList.remove('show');
    circle[imageActive].classList.remove('active');

    if(imageActive > 0){
        imageActive--;
    }else{
        imageActive = images.length - 1;     
    }

    imgContainer[imageActive].classList.add('show');
    circle[imageActive].classList.add('active');

    // arrowRight.classList.remove('none');
}




const animationImage = setInterval(right, 1000);
console.log(animationImage);