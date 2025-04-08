
/**
 * Scrolls to the specified section ID and triggers a custom event
 * to show the section if it's collapsed
 */
export const scrollToServiceSection = (sectionId: string | null): void => {
  if (!sectionId) return;
  
  // First, dispatch the event to make the section visible
  const event = new CustomEvent('show-section', { detail: { sectionId } });
  document.dispatchEvent(event);
  
  // Then scroll to it with a small delay to ensure it's visible first
  setTimeout(() => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
};

// Add setup function for scroll handlers
export const setupScrollHandlers = (): void => {
  // Listen for hash changes and scroll to the section
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      scrollToServiceSection(hash);
    }
  });

  // Check if there's a hash on initial load
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    setTimeout(() => {
      scrollToServiceSection(hash);
    }, 300);
  }
};

// Create a namespace object to match the import in App.tsx
export const ScrollToServiceUtils = {
  setupScrollHandlers,
  scrollToServiceSection
};
