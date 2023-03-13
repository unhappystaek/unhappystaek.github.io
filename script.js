const hamburger = document.getElementById('hamburger')
const sidebar = document.getElementById('sidebar')
const overlay = document.getElementById('overlay')

let menuOpen = false
let AWidth

function openMenu() {
  menuOpen = true
  overlay.style.display = 'block'
  updateMenu()
    
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


window.addEventListener("resize", function(event) {
 updateMenu()
})

function updateMenu() {
  if ((window.innerWidth / window.innerHeight) <= 4/3){
    sidebar.style.width = '70vw'
    sidebar.style.left = '30vw'
  } else {
    sidebar.style.width = '20vw'
    sidebar.style.left = '80vw'
  }
}