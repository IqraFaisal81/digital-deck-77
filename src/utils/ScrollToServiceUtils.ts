
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

/**
 * Stores the current section in session storage
 */
export const storeCurrentSection = (sectionId: string): void => {
  sessionStorage.setItem('lastVisitedSection', sectionId);
};

/**
 * Gets the stored section from session storage
 */
export const getStoredSection = (): string | null => {
  return sessionStorage.getItem('lastVisitedSection');
};

/**
 * Clears the stored section from session storage
 */
export const clearStoredSection = (): void => {
  sessionStorage.removeItem('lastVisitedSection');
};

/**
 * Navigates to home with section context
 */
export const navigateToHomeWithSection = (sectionId: string): void => {
  storeCurrentSection(sectionId);
  window.location.href = `/#${sectionId}`;
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

  // Check if there's a hash on initial load or stored section
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    setTimeout(() => {
      scrollToServiceSection(hash);
    }, 300);
  } else {
    // Check for stored section
    const storedSection = getStoredSection();
    if (storedSection) {
      setTimeout(() => {
        scrollToServiceSection(storedSection);
        clearStoredSection(); // Clear after use
      }, 300);
    }
  }
};

// Create a namespace object to match the import in App.tsx
export const ScrollToServiceUtils = {
  setupScrollHandlers,
  scrollToServiceSection,
  storeCurrentSection,
  getStoredSection,
  clearStoredSection,
  navigateToHomeWithSection
};
