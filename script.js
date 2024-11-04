const sliderScroll = document.querySelector(`.slider`);
const btleft = document.querySelector(`.imgbtleft`);
const btright = document.querySelector(`.imgbtright`);
const logobt = document.querySelector(`.logo`);

logobt.addEventListener(`click`, function() {
    
    logobt.style.animation = `rotate 2s alternate`
    

    // else if (style.animation !== `none`) {
    //     logobt.style.animation = `none`
    // }
});

btright.addEventListener(`click`, function() {

    sliderScroll.style.scrollBehavior = `smooth`;
    sliderScroll.scrollLeft += 1170.30
    btright.style.scale = `1.1`
});

btleft.addEventListener(`click`, function() {

    sliderScroll.style.scrollBehavior = `smooth`;
    sliderScroll.scrollLeft -= 1171.30
    btleft.style.scale =  `1.1`
});

            //    Popup

const popbg = document.querySelector(`.popbg`);
const closed = document.querySelector(`.closed`);
document.onclick = event => {
     console.log(event.target.classList)
    if (event.target.classList.contains('spanA')) {
        openPopup();
    }
};

const openPopup = () => {
    popbg.style.display = `flex`
};

closed.addEventListener(`click`, function() {

      popbg.style.display = `none`

});

                    //   Функционал анимаций

let callback = function(entries, observer) {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
      });
}

let observer = new IntersectionObserver(callback);

let targets = document.querySelectorAll(`.anim`)
targets.forEach(targe => {
   observer.observe(targe)

});

                //  Go-Top

const gotopbt = document.querySelector(`.gotop`);
gotopbt.addEventListener(`click`, goTop);
window.addEventListener(`scroll`, scrollUp);

function scrollUp() {
const offset = window.pageYOffset;
const coords = document.documentElement.clientHeight;
    if (offset > coords) {
        gotopbt.classList.add('showgoTop')
    }
    else {
        gotopbt.classList.remove('showgoTop')
    }
};

function goTop() {
    if (window.pageYOffset > 0) {
       window.scrollBy(0, -80)
       setTimeout(goTop, 0)
    }
};








