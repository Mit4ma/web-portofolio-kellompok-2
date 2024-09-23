document.addEventListener('DOMContentLoaded', function() {
    const gallerySection = document.querySelector('.gallery');
    
    // Add class to start the animation after a delay
    setTimeout(function() {
        gallerySection.style.opacity = '1';
    }, 300);  // Delay the start of the animation by 300ms
});
