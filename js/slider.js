// Gallery Slider Functionality
class GallerySlider {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.gallery-slide');
        this.dots = document.querySelectorAll('.dot');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.sliderTrack = document.querySelector('.slider-track');
        
        if (this.slides.length === 0) return;
        
        this.init();
    }
    
    init() {
        // Add event listeners
        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prevSlide());
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Auto-play slider
        this.startAutoPlay();
        
        // Pause on hover
        const slider = document.querySelector('.gallery-slider');
        if (slider) {
            slider.addEventListener('mouseenter', () => this.stopAutoPlay());
            slider.addEventListener('mouseleave', () => this.startAutoPlay());
        }
    }
    
    goToSlide(slideIndex) {
        this.currentSlide = slideIndex;
        this.updateSlider();
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.updateSlider();
    }
    
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.updateSlider();
    }
    
    updateSlider() {
        // Move slider track
        const translateX = -this.currentSlide * 100;
        if (this.sliderTrack) {
            this.sliderTrack.style.transform = `translateX(${translateX}%)`;
        }
        
        // Update dots
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }
    
    startAutoPlay() {
        this.stopAutoPlay(); // Clear any existing interval
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000); // Change slide every 5 seconds
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new GallerySlider();
});