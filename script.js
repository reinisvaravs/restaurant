// Highlights current day in Darba Laiks
document.querySelector(`#d${(new Date()).getDay()}`).style.fontWeight = "900"


document.querySelector("body").onscroll = function() {  
    var scrolltotop = document.scrollingElement.scrollTop;
    var factor = 0.5; // Adjust this value to control the scroll speed
    var yvalue = scrolltotop * factor;

    // Apply the y-position as a CSS variable to the hero section
    document.getElementById("hero").style.setProperty('--bg-position', yvalue + "px");
}


const heroHeight = document.getElementById("hero").offsetHeight

document.getElementById("hero-arrow").onclick = () => {
    window.scroll({
        top: heroHeight, 
        left: 0, 
        behavior: 'smooth' 
    });
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }
        else {
            entry.target.classList.remove("show")
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden, .hidden1, .hidden2, .hidden3")
hiddenElements.forEach((el) => observer.observe(el))