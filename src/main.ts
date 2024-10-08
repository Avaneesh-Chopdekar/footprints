import { calculateFootprint } from "./util";
import { CalculateFootprintParamsType } from "./types";

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
