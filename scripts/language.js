document.addEventListener("DOMContentLoaded", function () {
  const languageToggle = document.getElementById("languageToggle");
  const langText = document.querySelector(".lang-text");

  let currentLang = "en"; // default language

  // Toggle language
  function switchLanguage() {
    currentLang = currentLang === "en" ? "sw" : "en";
    updateAllTexts();
    langText.textContent = currentLang === "en" ? "KISWAHILI" : "ENGLISH";
    document.documentElement.lang = currentLang;
  }

  // UNIVERSAL LANGUAGE UPDATER
  function updateAllTexts() {
    const allElements = document.querySelectorAll("[data-en]");

    allElements.forEach((el) => {
      const newValue =
        currentLang === "en"
          ? el.getAttribute("data-en")
          : el.getAttribute("data-sw");

      // Update text content (normal text)
      el.textContent = newValue;

      // Update placeholders
      if (el.placeholder !== undefined) {
        el.placeholder = newValue;
      }
    });
  }

  // EVENT LISTENER
  languageToggle.addEventListener("click", switchLanguage);

  // INITIAL LOAD
  updateAllTexts();
});
