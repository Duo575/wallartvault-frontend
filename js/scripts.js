// scripts.js: Main JavaScript file for WallArtVault functionality

// Carousel functionality
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".index-carousel");
  const leftArrow = document.querySelector(".index-left-arrow");
  const rightArrow = document.querySelector(".index-right-arrow");

  if (!carousel || !leftArrow || !rightArrow) return;

  const items = Array.from(carousel.children);
  const itemWidth = items[0].offsetWidth + 20; // Including gap
  const totalItems = items.length;
  const visibleItems = 3;
  let currentIndex = Math.floor((totalItems - visibleItems) / 2); // Start from middle

  // Function to update active items
  function updateActiveItems() {
    items.forEach((item, index) => {
      item.classList.remove("active");
      if (index >= currentIndex && index < currentIndex + visibleItems) {
        item.classList.add("active");
      }
    });
  }

  // Function to move the carousel
  function moveCarousel(direction) {
    if (direction === "left" && currentIndex > 0) {
      currentIndex--;
    } else if (
      direction === "right" &&
      currentIndex < totalItems - visibleItems
    ) {
      currentIndex++;
    }

    // Calculate the transform position
    const transformX = -(currentIndex * itemWidth);
    carousel.style.transform = `translateX(${transformX}px)`;
    updateActiveItems();

    // Update arrow visibility
    leftArrow.classList.toggle("hidden", currentIndex <= 0);
    rightArrow.classList.toggle(
      "hidden",
      currentIndex >= totalItems - visibleItems
    );
  }

  // Event listeners for arrows
  leftArrow.addEventListener("click", () => moveCarousel("left"));
  rightArrow.addEventListener("click", () => moveCarousel("right"));

  // Initial setup
  updateActiveItems();
  leftArrow.classList.toggle("hidden", currentIndex <= 0);
  rightArrow.classList.toggle(
    "hidden",
    currentIndex >= totalItems - visibleItems
  );
});

// Category Filters functionality
document.addEventListener("DOMContentLoaded", function () {
  // Handle both filter-tag and category-page-filter
  const filterButtons = document.querySelectorAll(
    ".filter-tag, .category-page-filter"
  );

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Find parent container to only toggle siblings
      const filterContainer = button.closest(
        ".filter-tags, .category-page-controls"
      );
      if (filterContainer) {
        // Remove active class from siblings
        filterContainer
          .querySelectorAll(".filter-tag, .category-page-filter")
          .forEach((btn) => {
            btn.classList.remove("active");
          });
      }
      // Add active class to clicked button
      button.classList.add("active");
      button.style.background = "var(--red)";
      button.style.borderColor = "var(--red)";
    });
  });
});

// Handle fullscreen preview in download page
document.addEventListener("DOMContentLoaded", function () {
  const fullscreenBtn = document.querySelector(".preview-fullscreen");
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", function () {
      const img = document.getElementById("preview-image");
      if (img.requestFullscreen) {
        img.requestFullscreen();
      }
    });
  }

  // Simple UI interactions for download page buttons
  const downloadBtns = document.querySelectorAll(".download-btn");
  downloadBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Add visual feedback
      downloadBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Favorite button toggle
  const favoriteBtn = document.querySelector(".favorite-btn");
  if (favoriteBtn) {
    favoriteBtn.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }
});

// Profile page tabs
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to clicked button and corresponding content
      button.classList.add("active");
      const tabId = button.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });
});
