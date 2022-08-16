// Runs the code below *after* the page has loaded all its elements
window.addEventListener("load", function() {
    
        // Finds all HTML elements with class "share-button-container"
        let shareIcons = document.getElementsByClassName("share-button-container");
        // Finds all HTML elements with class "social-menu-container-desktop"
        let socialMenuDesktop = document.getElementsByClassName("social-menu-container-desktop");
        // Finds all HTML elements with class "social-menu-container-mobile"
        let socialMenuMobile = document.getElementsByClassName("social-menu-container-mobile");
        // Finds all HTML elements with class "user-details-container"
        let userDetailsContainer = document.getElementsByClassName("user-details-container");
        // Finds all HTML elements with class "share-button-container"
        let shareButtonContainer = document.getElementsByClassName("share-button-container");
        // Finds the div that contains the share button in movile social menu
        let shareButtonMobile = document.getElementsByClassName("share-button-mobile");

        // Adds display: "none" to "social-menu-container-desktop" div when page loads
        socialMenuDesktop[0].style.display = "none";
        socialMenuMobile[0].style.display = "none";

        
        shareIcons[0].addEventListener("click", function() {
            
            // TOGGLE ON/OFF DESKTOP SOCIAL MENU
            if (window.innerWidth > 1100) {
                if(socialMenuDesktop[0].style.display === "none") {
                    socialMenuDesktop[0].style.display = "flex";
                } else {
                    socialMenuDesktop[0].style.display = "none";
                }
            }

            // TOGGLE ON/OFF MOBILE SOCIAL MENU
            if (window.innerWidth < 1101) {
                if(socialMenuMobile[0].style.display === "none") {
                    socialMenuMobile[0].style.display = "flex";
                    userDetailsContainer[0].style.display = "none";
                    shareButtonContainer[0].style.display = "none";
                } else {
                    socialMenuMobile[0].style.display = "none";
                }
            }
        })

    // TOGGLE USER DETAILS MENU ON & HIDE MOBILE SOCIAL MENU
    shareButtonMobile[0].addEventListener("click", function() {
        if (window.innerWidth < 1101) {
            if(socialMenuMobile[0].style.display === "flex") {
                socialMenuMobile[0].style.display = "none";
                userDetailsContainer[0].style.display = "flex";
                shareButtonContainer[0].style.display = "flex";
            } 
        }
    })
})

