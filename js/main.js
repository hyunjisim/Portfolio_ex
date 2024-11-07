//페이지 아래로 스크롤시 header 스타일링 적용
const header = document.querySelector('.header')
// 요소의 총 높이
const headerHeight = header.offsetHeight
// console.log(headerHeight)
document.addEventListener('scroll',()=>{
    if(window.scrollY > headerHeight){
        header.classList.add('header--dark')
    }else{
        header.classList.remove('header--dark')
    }
})

// Home 섹셔을 아래로 스크롤시 투명하게 처리
const home = document.querySelector('.home__container')
const homeHeight = home.offsetHeight
document.addEventListener('scroll',()=>{
    home.style.opacity = 1 - window.scrollY / homeHeight
})

// Top UP버튼을 아래로 스크롤시 투명하게 처리함
const ArrowUp = document.querySelector('.top-up')
document.addEventListener('scroll',()=>{
    if(window.scrollY > homeHeight / 2){
        ArrowUp.style.opacity = 1
    }else{
        ArrowUp.style.opacity = 0
    }
})

//nav바 토글버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu')
const navbarToggle = document.querySelectorAll('.header__menu__item')
navbarToggle.addEventListener('click',()=>{
    navbarMenu.classList.toggle('open')
})

//navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click',()=>{
    navbarMenu.classList.toggle('close')
})