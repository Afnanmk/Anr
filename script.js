document.addEventListener("DOMContentLoaded", function () {
    const menuOpener = document.getElementById("mobile-menu-opener");
    const menuCloser = document.getElementById("mobile-menu-close");
    const mobileMenu = document.getElementById("mobile-menu");
  
    function toggleMenu() {
      const isOpen = mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== "0px";
  
      if (isOpen) {
        // Hide menu
        mobileMenu.style.maxHeight = "0px";
        mobileMenu.classList.remove("opacity-100");
        mobileMenu.classList.add("opacity-0");
        setTimeout(() => {
          mobileMenu.classList.add("hidden");
        }, 300); // Matches the transition duration
        menuOpener.classList.remove("hidden");
        menuCloser.classList.add("hidden");
      } else {
        // Show menu
        mobileMenu.classList.remove("hidden");
        setTimeout(() => {
          mobileMenu.style.maxHeight = "300px"; // Adjust based on your menu content
          mobileMenu.classList.add("opacity-100");
          mobileMenu.classList.remove("opacity-0");
        }, 10); // Small delay to allow transition
        menuOpener.classList.add("hidden");
        menuCloser.classList.remove("hidden");
      }
    }
  
    menuOpener.addEventListener("click", toggleMenu);
    menuCloser.addEventListener("click", toggleMenu);
  });
  