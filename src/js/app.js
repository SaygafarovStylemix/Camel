window.addEventListener('DOMContentLoaded', function() {
    /**
     * click on menu button 
     */
    let siteBody = document.body;
    let menuButton = document.querySelector('.js-menu-button');
    let menuBody = document.querySelector('.js-menu-body');

    window.addEventListener('click', (e) => {
        if(e.target == menuButton) {
            menuButton.classList.toggle('active');
            menuBody.classList.add('active');
        } else {
            menuBody.classList.rmove('active');
        }
    });
});