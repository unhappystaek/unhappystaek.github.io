const hamburger = document.getElementById('hamburger')
const sidebar = document.getElementById('sidebar')
const overlay = document.getElementById('overlay')

let menuOpen = false
let AWidth

function openMenu() {
  if ((window.screen.width / window.screen.height) <= 1){
    menuOpen = true
    overlay.style.display = 'block'
    sidebar.style.width = '80vw'
    sidebar.style.left = '20vw'
  } else {
    menuOpen = true
    overlay.style.display = 'block'
    sidebar.style.width = '20vw'
    sidebar.style.left = '80vw'
  }
    
}

function closeMenu() {
  menuOpen = false
  overlay.style.display = 'none'
  sidebar.style.width = '0px'
  sidebar.style.left = '100vw'

  
}

hamburger.addEventListener('click', function () {
  if (!menuOpen) {
    openMenu()
  }
})

overlay.addEventListener('click', function () {
  if (menuOpen) {
    closeMenu()
  }
})


//window.screen.width.addEventListener('input', function() {
  //AWidth = window.screen.width
//})