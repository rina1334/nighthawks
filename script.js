document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target section
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            // Calculate the offset position
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;

            // Scroll smoothly to the adjusted position
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
let firstPage = document.getElementById("firstPage");
let secondPage = document.getElementById("secondPage");
let thirdPage = document.getElementById("thirdPage");
let fourthPage = document.getElementById("fourthPage");
let fifthPage = document.getElementById("fifthPage");

let home = document.getElementById("homeLink");
let team = document.getElementById("teamLink");
let outreach = document.getElementById("outreachLink");
let robot = document.getElementById("robotLink");
let contact = document.getElementById("contactLink");

let teamHeading = document.getElementById("teamHeading");
let homeHeading = document.getElementById("home");
let outreachHeading = document.getElementById("outreachHeading");
let robotHeading = document.getElementById("robotHeading");
let contactHeading = document.getElementById("contactHeading");

home.addEventListener('click', () => {
    firstPage.style.display = "block";
    secondPage.style.display = "none";
    thirdPage.style.display = "none";
    fourthPage.style.display = "none";
    fifthPage.style.display = "none";
});
team.addEventListener('click', () => {
    firstPage.style.display = "none";
    secondPage.style.display = "block";
    thirdPage.style.display = "none";
    fourthPage.style.display = "none";
    fifthPage.style.display = "none";
});
outreach.addEventListener('click', () => {
    firstPage.style.display = "none";
    secondPage.style.display = "none";
    thirdPage.style.display = "block";
    fourthPage.style.display = "none";
    fifthPage.style.display = "none";
});
robot.addEventListener('click', () => {
    firstPage.style.display = "none";
    secondPage.style.display = "none";
    thirdPage.style.display = "none";
    fourthPage.style.display = "block";
    fifthPage.style.display = "none";
});
contact.addEventListener('click', () => {
    firstPage.style.display = "none";
    secondPage.style.display = "none";
    thirdPage.style.display = "none";
    fourthPage.style.display = "none";
    fifthPage.style.display = "block";
});

document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll("section, header, .team-members div, .outreach-content div");
  
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
  
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight - 100) {
          el.classList.add("revealed");
        } else {
          el.classList.remove("revealed");
        }
      });
    };
  
    // Run on scroll and page load
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  });
  
const hamburger = document.getElementById('hamburger');
  const linknav  = document.getElementById('linknav');

  hamburger.addEventListener('click', () => {
    const isOpen = linknav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Optional: close the menu when a link is tapped (mobile QoL)
  linknav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      linknav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });


let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

