document.addEventListener('DOMContentLoaded', function(){

    // adding event listener to listen for a scroll to the window
    window.addEventListener('scroll', function(){
        const projectTitle = document.getElementById("Ptitle");
        // varaible to store the positon of the projecttitle
        const positionTitle = projectTitle.getBoundingClientRect();


        // checking if the title is in the viewport
        if (positionTitle.top < this.window.innerHeight && positionTitle.bottom >= 0){
            // if it is in the viewport add .show to the class
            projectTitle.classList.add(".show");
        }

    })





})