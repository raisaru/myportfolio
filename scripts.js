// about active link
var tablinks = document.getElementsByClassName("about-tab-link");
var tabcontents = document.getElementsByClassName("about-tab-content");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


//scrollontop 
document.addEventListener("DOMContentLoaded", function () {
    // Select all nav links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default jump behavior

            const targetId = this.getAttribute("href").substring(1); // Get target section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100, // Adjust for fixed header if needed
                    behavior: "smooth"
                });
            }
        });
    });
});


//hamberger
document.addEventListener("DOMContentLoaded", function () {
    const navIcon = document.getElementById("js-navIcon");
    const nav = document.getElementById("js-nav");
    const ham = document.querySelector(".hamburger");
    // const body = document.body;

    function toggleNav() {
        nav.classList.toggle("active"); // Toggle visibility of the nav
        ham.classList.toggle("is-opened");
        // body.classList.toggle("no-scroll");
    }

    navIcon.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent click from propagating to document
        toggleNav();
    });

    // Close the menu when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!nav.contains(event.target) && !navIcon.contains(event.target)) {
            nav.classList.remove("active"); // Hide nav
            ham.classList.remove("is-opened"); // Reset hamburger animation
        }
    });

    function handleResize() {
        if (window.innerWidth > 768) {
            nav.classList.remove("active"); // Ensure nav is visible on larger screens
            ham.classList.remove("is-opened"); // Reset hamburger animation
            // body.classList.remove("no-scroll");
        }
    }
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check on page load
});


