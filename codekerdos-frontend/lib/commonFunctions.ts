export const handleScrollToSection = (sectionID: string) => {
  const coursesSection = document.getElementById(sectionID);
  if (coursesSection) {
    coursesSection.scrollIntoView({ behavior: "smooth" });
  }
};

export function openPDFLink(link: string) {
  if (!link) {
    console.error("No link provided to open");
    return;
  }

  try {
    const newTab = window.open(link, "_blank");
    if (!newTab) {
      console.error(
        "Failed to open the link. Please check your browser's pop-up settings."
      );
    }
  } catch (error) {
    console.error("An error occurred while opening the link:", error);
  }
}
