document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar-toggler');
    const search = document.querySelector('.search');
    const form = document.getElementById('contactForm');
    const isValidEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const anchors = Array.from(document.querySelectorAll('a[href^="#"]'));
    const addToCartButtons = Array.from(document.querySelectorAll('.add-to-cart'));
    const backToTopButton = document.querySelector('.backtop .btn');

    function scrollTo(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function addProductToCart(productId) {
        // Add product to cart with productId
        console.log('Adding product to cart:', productId);
    }

    function isValidEmail(email) {
        return isValidEmailRegex.test(email);
    }

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            scrollTo(this.getAttribute('href').slice(1));
        });
    });

    navbar.addEventListener('click', function() {
        document.querySelector('.navbar-collapse').classList.toggle('show');
    });

    $('.carousel').carousel({ interval: 5000, pause: 'hover' });

    search.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = search.querySelector('input').value.trim();
        console.log('Searching for:', query);
    });

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            addProductToCart(this.dataset.productId);
        });
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function() {
        backToTopButton.style.display = window.scrollY > 100 ? 'block' : 'none';
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const { name, email, message } = form.elements;
        if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
            alert('Please fill out all fields');
        } else if (!isValidEmail(email.value.trim())) {
            alert('Please enter a valid email address');
        } else {
            form.submit();
        }
    });
});

