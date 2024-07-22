// Accordion
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const currentlyActiveAccordion = document.querySelector('.accordion.active');
        const accordion = header.parentElement;
        const content = accordion.querySelector('.accordion-content');
        const icon = header.querySelector('i');

        // If there is an open accordion and it's not the one being clicked
        if (currentlyActiveAccordion && currentlyActiveAccordion !== accordion) {
            const currentContent = currentlyActiveAccordion.querySelector('.accordion-content');
            currentContent.style.maxHeight = '0';
            currentContent.style.padding = '0 18px';
            currentlyActiveAccordion.classList.remove('active');
            const currentIcon = currentlyActiveAccordion.querySelector('i');
            currentIcon.classList.remove('fa-chevron-up');
            currentIcon.classList.add('fa-chevron-down');
        }

        accordion.classList.toggle('active');

        if (accordion.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.padding = '10px';
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            content.style.maxHeight = '0';
            content.style.padding = '10px';
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    });
});







// Yearly
window.onload = function() {
    const yearElement = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = `@ ${currentYear} OptiTube Inc.`;
};



// Navbar and Dropdown

const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');

    bar.addEventListener('click', () => {
        navbar.style.display = 'flex';
        bar.style.display = 'none';
        close.style.display = 'block';
        logo.style.display = 'none';
    });

    close.addEventListener('click', () => {
        navbar.style.display = 'none';
        bar.style.display = 'block';
        close.style.display = 'none';
        logo.style.display = 'block';
    });

    document.querySelectorAll('.dropdown > a').forEach(dropdownLink => {
        dropdownLink.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdown = dropdownLink.parentElement;
            document.querySelectorAll('.dropdown').forEach(d => {
                if (d !== dropdown) {
                    d.classList.remove('active');
                }
            });
            dropdown.classList.toggle('active');
        });
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (event) => {
        const isClickInside = event.target.closest('.dropdown');
        if (!isClickInside) {
            document.querySelectorAll('.dropdown').forEach(d => {
                d.classList.remove('active');
            });
        }
    });

    // Prevent dropdown close when clicking inside
    document.querySelectorAll('.dropdown-content').forEach(dropdownContent => {
        dropdownContent.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    });



// SLider
    let currentIndex = 0;
    const slides = document.querySelectorAll('.Optitube_service_display_content');
    const totalSlides = slides.length;

    document.querySelector('.next').addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    function showSlide(index) {
        if (index >= totalSlides) {
            index = 0;
        } else if (index < 0) {
            index = totalSlides - 1;
        }
        currentIndex = index;
        const offset = -currentIndex * 100;
        slides.forEach(slide => {
            slide.style.transform = `translateX(${offset}%)`;
        });
    }



    
