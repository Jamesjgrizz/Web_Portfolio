gsap.registerPlugin(ScrollTrigger);


const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    gsap.set(['.hero_section', '.section'], { clearProps: 'all' });
} else {
    gsap.from('.hero_section', {
        autoAlpha: 0,
        y: 40,
        duration: 2,
        ease: 'power3.out',
    });

    gsap.utils.toArray('.section').forEach((section) => {
        gsap.from(section, {
            autoAlpha: 0,
            y: 50,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 82%',
                once: true,
            },
        });
    });

    window.addEventListener('load', () => ScrollTrigger.refresh());

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => ScrollTrigger.refresh(), 200);
    });
}
