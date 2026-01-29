import { useEffect } from 'react';

const useScrollReveal = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optional: Unobserve after revealing if you want it to occur only once
                    // revealObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal');
        const slideUpElements = document.querySelectorAll('.slide-up');

        revealElements.forEach(el => revealObserver.observe(el));
        slideUpElements.forEach(el => revealObserver.observe(el));

        return () => {
            revealElements.forEach(el => revealObserver.unobserve(el));
            slideUpElements.forEach(el => revealObserver.unobserve(el));
        };
    }); // Run on every render/update to catch new elements or re-renders
};

export default useScrollReveal;
