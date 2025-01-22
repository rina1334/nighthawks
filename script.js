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
  


