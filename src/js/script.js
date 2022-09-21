
import "lightbox2";

//hamburger

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger__active');
    menu.classList.toggle('menu__active');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger__active');
      menu.classList.toggle('menu__active');
    })
  })
});

//slick-slider

$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../images/interface - arrow left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../images/interface - arrow right.svg"></button>',
        responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        dots: true,
                        arrows: false,
                    }
                }
        ]
  });
});


//owl-carousel

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 50,
  nav: true,
  navText: ["<img src='../images/interface - arrow left.svg'>", "<img src='../images/interface - arrow right.svg'>"],
  responsive: {
    0: {
      items: 1,
      margin: 5,
      nav: true,
    },
    600: {
      items: 2,
      nav: true,
      margin: 20,
    },
    1000: {
      items: 3,
      margin: 30,
      nav: true,
    }
  }
});

// smooth scroll

const getId = (link) => link.getAttribute('href').replace('#', '');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target.id);
      document.querySelectorAll('.menu__link').forEach((link) => {
        if (getId(link) === entry.target.id) {
          link.classList.add('link-active');
        } else {
          link.classList.remove('link-active')
        }
      });
    }
  });
}, {
  threshold: 0.3,
});

document.querySelectorAll('.section').forEach((section) => {
  observer.observe(section);
});

document.querySelector('.menu').addEventListener('click', (event) => {
  if (event.target.classList.contains('menu__link')) {
    event.preventDefault();
    const id = getId(event.target);
    console.log('click');
    window.scrollTo({
      top:document.getElementById(id).offsetTop,
      behavior: 'smooth',
    })
  }
});


//popup

// const popupLinks = document.querySelectorAll('.popup-link');
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll('.lock-padding');

// let unlock = true;

// const timeout = 800;

// if (popupLinks.length > 0) {
//   for (let index = 0; index < popupLinks.length; index++) {
//     const popupLink = popupLinks[index];
//     popupLink.addEventListener('click', function (e) {
//       const popupName = popupLink.getAttribute('href').replace('#', '');
//       const currentPopup = document.getElementById(popupName);
//       popupOpen(currentPopup);
//       e.preventDefault();
//     });
//   }
// }

// const popupCloseIcon = document.querySelectorAll('.close-popup');
// if (popupCloseIcon.length > 0) {
//   for (let index = 0; index < popupCloseIcon.length; index++) {
//     const el = popupCloseIcon[index];
//     el.addEventListener('click', function (e) {
//       popupClose(el.closest('.popup'));
//       e.preventDefault();
//     });
//   }
// }

// function popupOpen(currentPopup) {
//   if (currentPopup && unlock) {
//     const popupActive = document.querySelector('.popup.open');
//     if (popupActive) {
//       popupClose(popupActive, false);
//     } else {
//       bodyLock();
//     }
//     currentPopup.classList.add('.open');
//     currentPopup.addEventListener('click', function (e) {
//       if (!e.target.closest('.popup__content')) {
//         popupClose(e.target.closest('.popup'));
//       }
//     });
//   }
// }

// function popupClose(popupActive, doUnlock = true) {
//   if (unlock) {
//     popupActive.classList.remove('open');
//     if (doUnlock) {
//       bodyLock();
//     }
//   }
// }

// function bodyLock() {
//   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

//   for (let index = 0; index < lockPadding.length; index++) {
//     const el = lockPadding[index];
//     el.style.paddingRight = lockPaddingValue;
//   }
//   body.style.paddingRight = lockPaddingValue;
//   body.classList.add('lock');

//   unlock = false;
//   setTimeout(function () {
//     unlock = true;
//   }, timeout);
// }

// function bodyUnlock() {
//   setTimeout(function () {
//     for (let index = 0; index < lockPadding.length; index++) {
//       const el = lockPadding[index];
//       el.style.paddingRight = '0px';
//     }
//     body.style.paddingRight = '0px';
//     body.classList.remove('lock');
//   }, timeout);
// }

let btns = document.querySelectorAll("*[data-modal-btn]");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    let name = btns[i].getAttribute('data-modal-btn');
    let modal = document.querySelector("[data-modal-window='"+name+"']");
    modal.style.display = "block";
    let close = modal.querySelector(".close_modal_window");
    close.addEventListener('click', function () {
      modal.style.display = "none";
    })
  });
}

window.onclick = function (event) {
  if (event.target.hasAttribute('data-modal-window')) {
      event.target.style.display = "none";
    }
};



//toggle

Array.from(document.querySelectorAll('.toggle')).forEach(button => {
  button.addEventListener('click', event => {
    if (button.getAttribute('aria-pressed') === 'true') {
      button.removeAttribute('aria-pressed')
    } else {
      button.setAttribute('aria-pressed', 'true')
    }
  })
}) 

