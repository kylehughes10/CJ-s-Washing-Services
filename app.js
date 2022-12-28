// Hamburger animation
const burger = document.querySelector('nav svg');

burger.addEventListener('click', () =>{
    if(burger.classList.contains('active')){
        gsap.to('.links', {x: '100%'});
        gsap.to('.line', {stroke: 'white'});
        gsap.to('body', {overflow: 'auto'});
    } else{
        gsap.to('.links', {x: '0%'});
        gsap.to('.line', {stroke: 'black'});
        gsap.from('.links a', {opactiy: 0, y:0}, {opactiy: 1, delay: 0.25, stagger: 0.25, y: 20});
        gsap.to('body', {overflow: 'hidden'});
    }

    burger.classList.toggle('active');
})

// Get a Quote

const getQuote = document.querySelector('.cta-main');
const exit = document.querySelector('.exit');
const quoteContainer = document.querySelector('.quote-container');

getQuote.addEventListener('click', () =>{
    if(getQuote.classList.contains('active')){
        gsap.to('.quote-container', {x: '100%'});
        gsap.to('body', {overflow: 'auto'});
    } else{
        gsap.to('.quote-container', {x: '0%'});
        gsap.to('body', {overflow: 'hidden'});
    }
exit.addEventListener('click', () =>{
        if(getQuote.classList.contains('active')){
        gsap.to('.quote-container', {x: '100%'});
        gsap.to('body', {overflow: 'auto'});
    } else{
        gsap.to('.quote-container', {x: '0%'});
        gsap.to('body', {overflow: 'hidden'});
    }
})
    getQuote.classList.toggle('active');
    exit.classList.remove('active');
})

//play videos on scroll
const videos = gsap.utils.toArray('.video');
gsap.set(videos, {opacity: 0});

videos.forEach((video) =>{
    ScrollTrigger.create({
        trigger: video,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
            gsap.to(video, {opacity: 1});
            video.play();
        },
        onEnterBack: () => video.play,
        onLeave: () => video.pause(),
        onLeaveBack: () => video.pause(),
    });
});


//Loop through Intro Text
const introArr = ['Power Washing','Soft Washing'];
const secArr = ['Parking Lots', 'Driveways', 'Boat Docks', 'Buildings', 'Houses', 'Roofs'];
var counter = 0;
var introText = document.getElementById('intro-text');
var secText = document.getElementById('intro-text2')

window.setInterval(function() {
    introText.innerHTML=introArr[counter];
    counter++
    if (counter >= introArr.length) {
        counter = 0;
    }
}, 1000);


// Get a Quote 2
const getQuoteTwo = document.querySelector('.cta-main2');
const exitTwo = document.querySelector('.exit2');
const quoteContainerTwo = document.querySelector('.quote-container2');

getQuoteTwo.addEventListener('click', () =>{
    if(getQuoteTwo.classList.contains('active')){
        gsap.to('.quote-container2', {x: '100%'});
        gsap.to('body', {overflow: 'auto'});
    } else{
        gsap.to('.quote-container2', {x: '0%'});
        gsap.to('body', {overflow: 'hidden'});
    }
exitTwo.addEventListener('click', () =>{
        if(getQuoteTwo.classList.contains('active')){
        gsap.to('.quote-container2', {x: '100%'});
        gsap.to('body', {overflow: 'auto'});
    } else{
        gsap.to('.quote-container2', {x: '0%'});
        gsap.to('body', {overflow: 'hidden'});
    }
})
    getQuoteTwo.classList.toggle('active');
    exitTwo.classList.remove('active');
})
