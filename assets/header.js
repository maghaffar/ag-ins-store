document.addEventListener("DOMContentLoaded", function () {
    const menuTitle = document.querySelector(".menu-title");
    const submenu = document.querySelector(".submenu");
    const menuArrow = document.querySelector(".menu-title .svg-wrapper");
  
    let timeout;

    function showSubmenu() {
        clearTimeout(timeout); 
        submenu.style.display = "block";
      menuArrow.classList.add("rotate");
    }

    function hideSubmenu() {
        timeout = setTimeout(() => {
            submenu.style.display = "none";
          menuArrow.classList.remove("rotate")
        }, 300); 
    }

    menuTitle.addEventListener("mouseenter", showSubmenu);
    submenu.addEventListener("mouseenter", showSubmenu);

    menuTitle.addEventListener("mouseleave", hideSubmenu);
    submenu.addEventListener("mouseleave", hideSubmenu);

  
    document.querySelectorAll(".submenu-item").forEach(item => {
        item.addEventListener("click", function (event) {
            event.stopPropagation();
            const nestedSubmenu = this.querySelector(".nested-submenu");
            const svgWrapper = this.querySelector(".svg-wrapper");

          
            if (nestedSubmenu) {
                const isVisible = nestedSubmenu.style.display === "block";
                document.querySelectorAll(".nested-submenu").forEach(ns => ns.style.display = "none");
                nestedSubmenu.style.display = isVisible ? "none" : "block";

              if (!isVisible) {
                    svgWrapper.classList.add("rotate");
                }
              else{
                svgWrapper.classList.remove("rotate")
              }
            }
          
        });
    });

    
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".submenu")) {
            document.querySelectorAll(".nested-submenu").forEach(ns => ns.style.display = "none");
           document.querySelectorAll(".submenu-item .svg-wrapper").forEach(svg => svg.classList.remove("rotate"));
        }
    });
});
