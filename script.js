let slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 200,
    slideMargin = 30,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

makeClone();

function makeClone() {
    // slides li 뒤 쪽에 자식들을 추가해줌
    for (let i = 0; i < slideCount; i++) {
        // a.cloneNode(), a.cloneNode(true);
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        // a.appendchild(b);
        slides.appendChild(cloneSlide);
    }
    // slides li 앞 쪽에 자식들을 추가해줌
    for (let i = slideCount - 1; i >= 0; i--) {
        // a.cloneNode(), a.cloneNode(true);
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        // a.prepend(b);
        slides.prepend(cloneSlide);
    }
    updateWidth();
    setInitialPosition();
}

function updateWidth() {
    let currentSlides = document.querySelectorAll('.slides li');
    let newSlideCount = currentSlides.length;

    let newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
    slides.style.width = newWidth;
}

function setInitialPosition() {
    let initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
    // slides { transform:translateX(-1000px);}
    slides.style.transform = `translateX(${initialTranslateValue}px)`
}

