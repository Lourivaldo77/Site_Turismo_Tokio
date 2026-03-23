// Simple interactivity and animations
document.addEventListener('DOMContentLoaded', () => {
    console.log('Tokyo Tourism site loaded');

    // Add scroll animation for sections
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Apply observer to sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Hero Slider Image Mapping
    const heroImages = {
        '01': 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070',
        '02': 'https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?q=80&w=2073',
        '03': 'https://images.unsplash.com/photo-1510006851064-e6056cd0e3a8?q=80&w=1974',
        '04': 'https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=2092',
        '05': 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070'
    };

    const heroImg = document.querySelector('.hero__bg');
    const sliderItems = document.querySelectorAll('.slider-nav__item');

    sliderItems.forEach(item => {
        item.addEventListener('click', () => {
            const num = item.textContent.trim();
            const newSrc = heroImages[num];

            if (newSrc && heroImg) {
                // Fade out effect
                heroImg.style.opacity = '0';
                
                setTimeout(() => {
                    heroImg.src = newSrc;
                    // Fade in once loaded
                    heroImg.onload = () => {
                        heroImg.style.opacity = '1';
                    };
                }, 300);

                // Update active state
                sliderItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            }
        });
    });
});

