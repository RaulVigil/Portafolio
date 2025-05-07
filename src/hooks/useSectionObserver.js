import { useEffect } from 'react';

const useSectionObserver = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);
};

export default useSectionObserver;
