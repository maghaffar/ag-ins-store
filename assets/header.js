document.addEventListener("DOMContentLoaded", function () {
    const menuTitle = document.querySelector(".menu-title");
    const submenu = document.querySelector(".submenu");

    let timeout;

    function showSubmenu() {
        clearTimeout(timeout); // Clear any pending close action
        submenu.style.display = "block";
    }

    function hideSubmenu() {
        timeout = setTimeout(() => {
            submenu.style.display = "none";
        }, 300); // Add a slight delay to avoid abrupt closing
    }

    menuTitle.addEventListener("mouseenter", showSubmenu);
    submenu.addEventListener("mouseenter", showSubmenu);

    menuTitle.addEventListener("mouseleave", hideSubmenu);
    submenu.addEventListener("mouseleave", hideSubmenu);
});
