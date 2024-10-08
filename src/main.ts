import i18next from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import { calculateFootprint, updateContent } from "./util";
import { CalculateFootprintParamsType } from "./types";

// Initialize i18next
i18next
  .use(Backend) // Load translations from /locales folder
  .use(LanguageDetector) // Detect user's language preference
  .init({
    fallbackLng: "en", // Fallback language
    debug: true, // Debugging language switching
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Load translations
    },
  });

i18next.on("languageChanged", () => {
  updateContent();
});

updateContent(); // Initial content load, language set

console.log(
  document.querySelector<HTMLOptionElement>("#transportMode-car")!.textContent
);

const languageSelect = document.getElementById("language") as HTMLSelectElement;
languageSelect.addEventListener("change", () => {
  i18next.changeLanguage(languageSelect.value);
});

// Get DOM elements
const form = document.querySelector("form") as HTMLFormElement;
const inputTravelFrequency = document.querySelector(
  "#travelFrequency"
) as HTMLInputElement;
const inputTravelDistance = document.querySelector(
  "#kilometers"
) as HTMLInputElement;
const inputTransportation = document.querySelector(
  "#transportMode"
) as HTMLInputElement;
const inputTreesPlanted = document.querySelector(
  "#treesPlanted"
) as HTMLInputElement;
const inputMeatConsumption = document.querySelector(
  "#meatConsumption"
) as HTMLInputElement;

document.addEventListener("DOMContentLoaded", () => {
  // Form submit event
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const calculateFootprintsParams: CalculateFootprintParamsType = {
      travelFrequency: Number.parseInt(inputTravelFrequency.value, 10),
      travelDistance: Number.parseInt(inputTravelDistance.value, 10),
      transportation: inputTransportation.value,
      treesPlanted: Number.parseInt(inputTreesPlanted.value, 10),
      meatConsumption: inputMeatConsumption.value,
    };

    const { score, message } = calculateFootprint(calculateFootprintsParams);

    const footprintDialog = document.querySelector("dialog");
    if (!footprintDialog) return;
    const footprintImage = document.querySelector(
      "#dialog-image"
    ) as HTMLImageElement;
    if (!footprintImage) return;
    const footprintMessage = document.querySelector(
      "#dialog-message"
    ) as HTMLParagraphElement;
    if (!footprintMessage) return;

    footprintMessage.textContent = message;
    footprintImage.style.filter = `invert(${score}%)`;
    footprintDialog.showModal();
  });
});
