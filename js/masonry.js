// Masonry layout initialization and handling
function initMasonryLayout() {
  const masonryGrid = document.querySelector(".masonry-grid");
  if (!masonryGrid) return;

  // Initialize masonry layout
  const masonry = new Masonry(masonryGrid, {
    itemSelector: ".masonry-item",
    columnWidth: ".masonry-item",
    gutter: 20,
    percentPosition: true,
  });

  // Update layout after all images are loaded
  imagesLoaded(masonryGrid).on("progress", () => {
    masonry.layout();
  });

  // Handle window resize
  window.addEventListener("resize", () => {
    masonry.layout();
  });
}

// Initialize masonry when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initMasonryLayout();
});
