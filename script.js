
let loader = document.querySelector('.loader'); 
let page = document.querySelector('#page');

// GSAP animations
window.addEventListener('load', () => {
    // Initial fade in
    gsap.to('.loader', {
        opacity: 1,
        duration: 0.5,
        delay: 0.5
    });
    new Promise((resolve) => {
        setTimeout(resolve, Math.random() * 1000+Math.random() * 1000);
    })
    .then(() => {
        console.log('promise resolves');
        // Fade out loader
        gsap.to('.loader', {
            opacity: 0,
            duration: 0.8,
            onComplete: () => {
                loader.style.display = 'none';
                page.style.display = 'block';
                
                // Animate page elements
                gsap.from('#header', {
                    opacity: 0,
                    y: -50,
                    duration: 1,
                    ease: 'power2.out'
                });

                gsap.from('#hero-content h1', {
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    stagger: 0.3,
                    ease: 'power2.out'
                });

                gsap.from('#hero-content p', {
                    opacity: 0,
                    x: -50,
                    duration: 0.8,
                    delay: 0.5,
                    ease: 'power2.out'
                });

                gsap.from('.search-container', {
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    delay: 0.8,
                    ease: 'power2.out'
                });

                gsap.from('.hilights', {
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    delay: 1,
                    ease: 'power2.out'
                });

                gsap.from('#about', {
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    delay: 1.2,
                    ease: 'power2.out'
                });
            }
        });
    })      

});

// Testimonials data
const testimonials = [
    {
        name: "Emma Johnson",
        role: "Art Student",
        text: "The art community here is incredibly supportive and inspiring. I've grown so much as an artist since joining Ignisia.",
        image: "../assets/assets_task_01jyn7474veqyvcf5s14adyryw_1750911422_img_1.png"
    },
    {
        name: "Michael Chen",
        role: "Music Student",
        text: "Ignisia has been a game-changer for my music career. The mentorship program has helped me improve immensely.",
        image: "../assets/assets_task_01jyn7474veqyvcf5s14adyryw_1750911422_img_1.png"
    },
    {
        name: "Sarah Williams",
        role: "Photography Student",
        text: "The photography workshops have been amazing. I've learned so much about composition and lighting.",
        image: "../assets/assets_task_01jyn7474veqyvcf5s14adyryw_1750911422_img_1.png"
    },
    {
        name: "James Brown",
        role: "Dance Student",
        text: "The dance community is incredibly supportive. I've found my passion here and made lifelong friends.",
        image: "../assets/assets_task_01jyn7474veqyvcf5s14adyryw_1750911422_img_1.png"
    }
];


window.addEventListener('load', () => {
    const container = document.getElementById('testomonialContainer');
    console.log('Container found:', container);
    
    if (!container) {
        console.error('Testimonial container not found!');
        return;
    }

    let currentCard = 0;

    console.log('Rendering testimonials...');
    // Render all testimonial cards
    testimonials.forEach((t, index) => {
        console.log('Creating card for:', t.name);
        const card = document.createElement('div');
        card.className = 'testomonial-card';
        if (index === 0) card.classList.add('active'); // show first card

        card.innerHTML = `
            <div class="testomonial-text">
                <img src="${t.image}" width="50px" height="50px" alt="${t.name}">
                <p>"${t.text}"</p>
                <h1>${t.name}</h1>
                <p>${t.role}</p>
            </div>
        `;
        container.appendChild(card);
    });

    const cards = document.querySelectorAll('.testomonial-card');
    console.log('Number of cards created:', cards.length);

    function showNextTestimonial() {
        console.log('Showing next testimonial:', currentCard);
        
        // Remove active class from current card
        cards[currentCard].classList.remove('active');
        
        // Update current card index
        currentCard = (currentCard + 1) % cards.length;
        
        // Add active class to next card
        cards[currentCard].classList.add('active');
    }

    console.log('Starting testimonial rotation...');
    // Use a slightly longer interval to prevent overlap
    setInterval(showNextTestimonial, 5500);
});





// handle links 

const contacts = document.querySelectorAll('.contact');
contacts.forEach(contact => {
    contact.addEventListener('click', (e) => {
        e.preventDefault();
        handleContact();
    });
});
const handleContact=()=>{
    window.location = '../contact.html';
    console.log('clicked contact');
}