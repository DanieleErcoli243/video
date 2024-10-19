// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.


// seleziono gli elementi dal DOM

const switchBtn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');
const preLoader = document.querySelector('.preloader');

// aggancio un ascoltatore di eventi al bottone

switchBtn.addEventListener('click', () => {
    // stabilisco le condizioni per mettere o togliere la classe slide
    if (!switchBtn.classList.contains('slide')) {
        switchBtn.classList.add('slide');
        video.pause();
    } else {
        switchBtn.classList.remove('slide');
        video.play();
    };
});