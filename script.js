
/* =========================================
   SRK CONSTRUCTIONS
   JAVASCRIPT
========================================= */


/* =========================================
   1. MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");

const navbar = document.getElementById("navbar");

const navLinks = document.querySelectorAll(".nav-link");


menuToggle.addEventListener("click", function () {

    navbar.classList.toggle("active");

    menuToggle.classList.toggle("active");

    const isOpen = navbar.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


/* CLOSE MENU WHEN A LINK IS CLICKED */

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


/* CLOSE MENU WHEN CLICKING OUTSIDE */

document.addEventListener("click", function (event) {

    const clickedInsideMenu = navbar.contains(event.target);

    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {

        navbar.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    }

});


/* =========================================
   2. HEADER SCROLL EFFECT
========================================= */

const header = document.getElementById("header");


window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================
   3. SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =========================================
   4. ANIMATED STATISTICS
========================================= */

const counters = document.querySelectorAll(".counter");


const counterObserver = new IntersectionObserver(

    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target = Number(counter.dataset.target);

                const duration = 1500;

                const startTime = performance.now();


                function updateCounter(currentTime) {

                    const elapsed = currentTime - startTime;

                    const progress = Math.min(elapsed / duration, 1);

                    const currentValue = Math.floor(target * progress);

                    counter.textContent = currentValue;


                    if (progress < 1) {

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.textContent = target;

                    }

                }


                requestAnimationFrame(updateCounter);

                observer.unobserve(counter);

            }

        });

    },

    {
        threshold: 0.5
    }

);


counters.forEach(function (counter) {

    counterObserver.observe(counter);

});


/* =========================================
   5. ACTIVE NAVIGATION LINK
========================================= */

const sections = document.querySelectorAll("main section[id]");


const sectionObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                const currentSection = entry.target.id;

                navLinks.forEach(function (link) {

                    link.classList.remove("active");

                    if (link.getAttribute("href") === "#" + currentSection) {

                        link.classList.add("active");

                    }

                });

            }

        });

    },

    {
        rootMargin: "-35% 0px -55% 0px"
    }

);


sections.forEach(function (section) {

    sectionObserver.observe(section);

});


/* =========================================
   6. AUTOMATIC FOOTER YEAR
========================================= */

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


/* =========================================
   7. CLOSE MENU ON ESCAPE KEY
========================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        navbar.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    }

});
