document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".menu-title").forEach(menuTitle => {
        const submenu = menuTitle.nextElementSibling;
        const menuArrow = menuTitle.querySelector(".svg-wrapper");

        let timeout;

        function showSubmenu() {
            clearTimeout(timeout);
            if (submenu) submenu.style.display = "block";
            if (menuArrow) menuArrow.classList.add("rotate");
        }

        function hideSubmenu() {
            timeout = setTimeout(() => {
                if (submenu) submenu.style.display = "none";
                if (menuArrow) menuArrow.classList.remove("rotate");
            }, 300);
        }

        menuTitle.addEventListener("mouseenter", showSubmenu);
        menuTitle.addEventListener("mouseleave", hideSubmenu);

        if (submenu) {
            submenu.addEventListener("mouseenter", showSubmenu);
            submenu.addEventListener("mouseleave", hideSubmenu);
        }
    });

    document.querySelectorAll(".submenu-item").forEach(item => {
        item.addEventListener("click", function (event) {
            const nestedSubmenu = this.querySelector(".nested-submenu");
            const svgWrapper = this.querySelector(".svg-wrapper");

            if (nestedSubmenu) {
                const isVisible = nestedSubmenu.style.display === "block";
                document.querySelectorAll(".nested-submenu").forEach(ns => ns.style.display = "none");
                nestedSubmenu.style.display = isVisible ? "none" : "block";

                if (!isVisible) {
                    svgWrapper.classList.add("rotate");
                } else {
                    svgWrapper.classList.remove("rotate");
                }
            }
        });
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".submenu")) {
            document.querySelectorAll(".nested-submenu").forEach(ns => ns.style.display = "none");
            document.querySelectorAll(".svg-wrapper").forEach(svg => svg.classList.remove("rotate"));
        }
    });
  // Sidebar Toggling
   const hamburger = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar");
  const closeButton = document.querySelector(".sidebar-close");

  function toggleSidebar() {
    sidebar.classList.toggle("open");
  }

  hamburger.addEventListener("click", toggleSidebar);
  closeButton.addEventListener("click", toggleSidebar);
  
  // Footer List Toggle
 document.querySelectorAll(".footer-menu").forEach(title => {
    title.addEventListener("click", function () {
      this.classList.toggle("open");
    });
  });
});
