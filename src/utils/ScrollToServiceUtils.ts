
/**
 * Scrolls to the specified section ID and triggers a custom event
 * to show the section if it's collapsed
 */
export const scrollToServiceSection = (sectionId: string | null): void => {
  if (!sectionId) return;
  
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: "smooth" });
    
    // Trigger the section visibility if it's a collapsible section
    const event = new CustomEvent('show-section', { detail: { sectionId } });
    document.dispatchEvent(event);
  }
};
