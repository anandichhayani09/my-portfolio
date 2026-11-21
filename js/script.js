
/* =====================================================
   ANANDI - VIDEO EDITOR & GRAPHIC DESIGNER PORTFOLIO
   JavaScript Functionality
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ================= NAVBAR SCROLL EFFECT ================= */

    const navbar = document.getElementById("navbar");

    function handleNavbarScroll() {

        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", handleNavbarScroll);

    handleNavbarScroll();


    /* ================= MOBILE NAVBAR CLOSE ================= */

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    const navbarMenu = document.getElementById("navbarMenu");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (
                navbarMenu &&
                navbarMenu.classList.contains("show") &&
                typeof bootstrap !== "undefined"
            ) {

                const collapse =
                    bootstrap.Collapse.getOrCreateInstance(navbarMenu);

                collapse.hide();

            }

        });

    });


    /* ================= ACTIVE NAVIGATION LINK ================= */

    const sections = document.querySelectorAll("section[id]");

    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            const linkHref = link.getAttribute("href");

            if (linkHref === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveNavigation);

    updateActiveNavigation();


    /* ================= SCROLL REVEAL ANIMATION ================= */

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }

        );

        revealElements.forEach(function (element) {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(function (element) {

            element.classList.add("active");

        });

    }


    /* ================= PORTFOLIO FILTER ================= */

    const filterButtons = document.querySelectorAll(".filter-btn");

    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            // Remove active class from all buttons

            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });

            // Add active class to selected button

            button.classList.add("active");

            // Get selected category

            const selectedFilter = button.getAttribute("data-filter");

            // Filter portfolio projects

            portfolioItems.forEach(function (item) {

                const itemCategory = item.getAttribute("data-category");

                const shouldShow =
                    selectedFilter === "all" ||
                    itemCategory === selectedFilter;

                if (shouldShow) {

                    item.classList.remove("hide");

                    // Make filtered items visible
                    item.querySelectorAll(".reveal").forEach(function (el) {
                        el.classList.add("active");
                    });

                    // Ensure filtered card itself is visible
                    item.classList.add("active");

                } else {

                    item.classList.add("hide");

                }

            });

        });

    });


    /* ================= DYNAMIC COPYRIGHT YEAR ================= */

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {

        currentYear.textContent = new Date().getFullYear();

    }


    /* ================= SMOOTH SCROLL FOR ANCHOR LINKS ================= */

    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {

                event.preventDefault();

                const navbarHeight = navbar
                    ? navbar.offsetHeight
                    : 0;

                const targetPosition =
                    targetElement.getBoundingClientRect().top +
                    window.scrollY -
                    navbarHeight;

                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }

        });

    });


    /* ================= IMAGE FALLBACK ================= */

    const images = document.querySelectorAll("img");

    images.forEach(function (image) {

        image.addEventListener("error", function () {

            image.style.display = "none";

            const placeholder = image.nextElementSibling;

            if (
                placeholder &&
                (
                    placeholder.classList.contains("image-placeholder") ||
                    placeholder.classList.contains("work-placeholder")
                )
            ) {

                placeholder.style.display = "flex";

            }

        });

    });


    /* ================= CONSOLE MESSAGE ================= */

    console.log(
        "%c ANANDI CREATIVE PORTFOLIO ",
        "background: #20344D; color: #FFFFFF; padding: 10px 18px; font-size: 14px; font-weight: bold;"
    );

    console.log(
        "%c Video Editor | Graphic Designer ",
        "color: #B77B58; font-size: 12px; font-weight: bold;"
    );

});
