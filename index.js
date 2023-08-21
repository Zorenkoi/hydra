const burger = document.querySelector('.burger')
const headerBody = document.querySelector('.header-body')

let headerOpen

if (window.innerWidth > 1030) {
  headerOpen = true
  updateHeader(headerOpen)
} else {
  headerOpen = false
  updateHeader(headerOpen)
}

burger.addEventListener('click', () => {
  headerOpen = !headerOpen
  updateHeader(headerOpen)
})

function updateHeader(headerOpen) {
  if (headerOpen) {
    headerBody.style.transform = 'translateY(0%)'
  } else {
    headerBody.style.transform = 'translateY(-100%)'
  }
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 1030 && !headerOpen) {
    headerOpen = true
    updateHeader(headerOpen)
  }

  if (window.innerWidth < 1030 && headerOpen) {
    headerOpen = false
    updateHeader(headerOpen)
  }
})

///////////////////////////////////////////////////////////////////////////////

const homeImg = document.querySelector('.home-main-img-wrapper')
const aboutImg = document.querySelector('.about-img-wrapper')

updateHomeHeight(aboutImg)
updateHomeHeight(homeImg)

window.addEventListener('resize', () => {
  updateHomeHeight(aboutImg)
  updateHomeHeight(homeImg)
})
function updateHomeHeight(homeImg) {
  const homeImgWidth = parseInt(window.getComputedStyle(homeImg).width)
  const homeImgHeight = (homeImgWidth * 426) / 490

  homeImg.style.height = homeImgHeight + 'px'
}

////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////

new Swiper('.services-card-container', {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    prevEl: '.services-prev',
    nextEl: '.services-next',
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    630: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    945: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1240: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
})

//////////////////////////////////////////////////////////////////////////////////////

new Swiper('.companies-container', {
  slidesPerView: 4,
  spaceBetween: 0,
  navigation: {
    prevEl: '.companies-prev',
    nextEl: '.companies-next',
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    740: {
      slidesPerView: 3,
    },
    850: {
      slidesPerView: 4,
    },
  },
})

/////////////////////////////////////////////////////////////////////////////////////////////
const prevCircle = document.querySelector('.circles-prev')
const nextCircle = document.querySelector('.circles-next')
const arrCircleCard = document.querySelectorAll('.circles-card')
let nowIdexCircleCard = 0

hideCircleCard()
showCircleCard(nowIdexCircleCard)

prevCircle.addEventListener('click', () => {
  if (nowIdexCircleCard >= 1) {
    nowIdexCircleCard--
    hideCircleCard()
    showCircleCard(nowIdexCircleCard)
  }
})
nextCircle.addEventListener('click', () => {
  if (nowIdexCircleCard <= 2) {
    nowIdexCircleCard++
    hideCircleCard()
    showCircleCard(nowIdexCircleCard)
  }
})

function hideCircleCard() {
  arrCircleCard.forEach((card) => {
    card.classList.remove('active')
  })
}
function showCircleCard(index) {
  arrCircleCard.forEach((card, i) => {
    if (i === index) {
      card.classList.add('active')
    }
  })
}
