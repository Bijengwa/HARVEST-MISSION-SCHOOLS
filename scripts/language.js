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
          const newValue = currentLang === "en" ? el.getAttribute("data-en") : el.getAttribute("data-sw");

          // Target only text-specific children (e.g., spans or direct text)
          const textTargets = el.querySelectorAll('.nav-text, .btn-text, [data-lang-text]'); // Add class to text spans if needed
          if (textTargets.length > 0) {
              textTargets.forEach(target => target.textContent = newValue);
          } else {
              // For simple elements (h2, p, etc.), safe to use textContent
              el.textContent = newValue;
          }

          // Handle placeholders separately (inputs/textareas)
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
