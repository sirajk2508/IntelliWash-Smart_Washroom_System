export const scrollAbout = () => {
  const conceptElement = document.getElementsByClassName("ConceptVideo");
  if (conceptElement.length > 0) {
    conceptElement[0].scrollIntoView({ behavior: "smooth" });
  }
};
