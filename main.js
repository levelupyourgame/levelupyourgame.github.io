document.addEventListener('DOMContentLoaded', () => {
  // Initialize particle system
  new ParticleSystem();

  // Add hover effects to selling points
  const points = document.querySelectorAll('.point');
  points.forEach(point => {
    point.addEventListener('mouseenter', () => {
      point.style.transform = 'translateY(-5px)';
    });
    
    point.addEventListener('mouseleave', () => {
      point.style.transform = 'translateY(0)';
    });
  });

  // Add click effect to CTA button
  const ctaButton = document.querySelector('.cta-button');
  ctaButton.addEventListener('click', () => {
    ctaButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
      ctaButton.style.transform = 'scale(1.05)';
      setTimeout(() => {
        ctaButton.style.transform = 'scale(1)';
      }, 100);
    }, 100);
  });
});
