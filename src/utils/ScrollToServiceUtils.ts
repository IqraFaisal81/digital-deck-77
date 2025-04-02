
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
