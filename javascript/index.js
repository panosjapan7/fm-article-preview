// Runs the code below *after* the page has loaded all its elements
window.addEventListener("load", function() {


    // DESKTOP SOCIAL MENU
        // Finds all HTML elements with class "share-button-container"
        let shareIcons = document.getElementsByClassName("share-button-container");
        console.log(shareIcons)

        // Finds all HTML elements with class "social-menu-container-desktop"
        let socialMenuDesktop = document.getElementsByClassName("social-menu-container-desktop");
        console.log(socialMenuDesktop)

        // Adds display: "none" to "social-menu-container-desktop" div when page loads
        socialMenuDesktop[0].style.display = "none";

        shareIcons[0].addEventListener("click", function() {

            if(socialMenuDesktop[0].style.display === "none") {
                socialMenuDesktop[0].style.display = "flex";
            } else {
                socialMenuDesktop[0].style.display = "none";
            }
        })

    // MOBILE SOCIAL MENU
})

