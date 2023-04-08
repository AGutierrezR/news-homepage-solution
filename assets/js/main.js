const menuOpen = document.getElementById('menuOpen')
const menuClose = document.getElementById('menuClose')
const pageNav = document.getElementById('pageNav')
const navOverlay = document.getElementById('navOverlay')

menuOpen.addEventListener('click', () => {
  pageNav.classList.remove('hidden')
  pageNav.classList.add('flex')
  navOverlay.classList.remove('hidden')
})

menuClose.addEventListener('click', () => {
  pageNav.classList.add('hidden')
  pageNav.classList.remove('flex')
  navOverlay.classList.add('hidden')
})

navOverlay.addEventListener('click', () => {
  pageNav.classList.add('hidden')
  navOverlay.classList.add('hidden')
})
