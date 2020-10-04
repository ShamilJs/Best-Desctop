'use strict';

const slider = () => {
    const widthWindow = document.documentElement.clientWidth;
    if(widthWindow <= 425) {
        const slides = document.querySelectorAll('.about-item');
        let count = 0;
        const autoPlaySlide = () => { 
            if (count > 1) {
                count = 0;
            }
            slides.forEach((item, i) => {
                if (i === count) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
            count ++;
            };
        const startSlide = (time = 2000) => {
            setInterval(autoPlaySlide, time);   
        };
        startSlide();
    }
};
slider();



const paintTheDot = () => {
    const anchors = document.querySelectorAll('.anchor > a');
    const checkClass = (e) => {
        anchors.forEach(item => {
            if (item.getAttribute('href') !== e.target.getAttribute('href')) {
                item.classList.remove('anchor-active');
            }
        });
    };
    anchors.forEach(item => {
        item.addEventListener('click', (e) => {
            item.classList.add('anchor-active');
            checkClass(e);
        });
    });
};
paintTheDot();