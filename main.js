var prevScrollpos = window.pageYOffset
var navbar = document.getElementById('navbar')

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0"
    } else {
        document.getElementById("navbar").style.top = "-70px"
    }

    if (window.scrollY <= 150) { // Just an example
        document.getElementById("navbar").style.backgroundColor = 'transparent'
    } else {
        document.getElementById("navbar").style.backgroundColor = 'rgb(247, 243, 236, 0.8)' // or default color
        // document.getElementById("navbar").style.transition = 'background 0.6s linear' // or default color

    }
    prevScrollpos = currentScrollPos
}

// window.onscroll = function () {
//     "use strict"
   
// }