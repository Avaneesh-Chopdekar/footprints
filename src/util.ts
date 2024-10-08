import i18next from "i18next";

import {
  CalculateFootprintParamsType,
  CalculateFootprintReturnType,
} from "./types";

export function calculateFootprint({
  travelFrequency,
  travelDistance,
  transportation,
  treesPlanted,
  meatConsumption,
}: CalculateFootprintParamsType): CalculateFootprintReturnType {
  let score = 0;
  let message = i18next.t("message.black");

  const travelScore = Math.min((travelFrequency * travelDistance) / 10, 40);
  score += travelScore;

  // Medium of transportation (Max contribution: 30 points)
  switch (transportation) {
    case document.querySelector<HTMLOptionElement>("#transportMode-car")!.value:
      score += 30; // Cars have the highest emissions
      break;
    case document.querySelector<HTMLOptionElement>("#transportMode-bus")!.value:
      score += 20; // Buses have moderate emissions
      break;
    case document.querySelector<HTMLOptionElement>("#transportMode-bike")!
      .value:
      score += 5; // Bikes have low emissions
      break;
    case document.querySelector<HTMLOptionElement>("#transportMode-walk")!
      .value:
      score += 0; // Walking has minimal emissions
      break;
  }

  // Subtract points for trees planted (Max contribution: 20 points)
  const treeScore = Math.min(treesPlanted * 4, 20); // Max benefit from trees
  score -= treeScore;

  // Meat consumption (Max contribution: 30 points)
  switch (meatConsumption) {
    case document.querySelector<HTMLOptionElement>("#meatConsumption-never")!
      .value:
      score += 0; // Vegetarians have the lowest footprint
      break;
    case document.querySelector<HTMLOptionElement>("#meatConsumption-rarely")!
      .value:
      score += 15; // Moderate meat consumption
      break;
    case document.querySelector<HTMLOptionElement>("#meatConsumption-often")!
      .value:
      score += 30; // High meat consumption
      break;
  }

  // Ensure the score is between 1 and 100
  score = Math.max(1, Math.min(score, 100));

  if (score <= 33) {
    score = 0;
    message = i18next.t("message.silver");
  } else if (score <= 66) {
    message = i18next.t("message.grey");
  } else {
    score = 100;
    message = i18next.t("message.black");
  }

  score = 100 - score;

  return { score, message };
}

export function updateContent() {
  document.getElementById("footprints")!.innerText = i18next.t("footprints");
  document.getElementById("travelFrequencyLabel")!.innerText =
    i18next.t("form.question1");
  document.getElementById("transportModeLabel")!.innerText = i18next.t(
    "form.question2.question"
  );
  document.getElementById("transportMode-car")!.innerText = i18next.t(
    "form.question2.option1"
  );
  document.getElementById("transportMode-bus")!.innerText = i18next.t(
    "form.question2.option2"
  );
  document.getElementById("transportMode-bike")!.innerText = i18next.t(
    "form.question2.option3"
  );
  document.getElementById("transportMode-walk")!.innerText = i18next.t(
    "form.question2.option4"
  );
  document.getElementById("kilometersLabel")!.innerText =
    i18next.t("form.question3");
  document.getElementById("treesPlantedLabel")!.innerText =
    i18next.t("form.question4");
  document.getElementById("meatConsumptionLabel")!.innerText = i18next.t(
    "form.question5.question"
  );
  document.getElementById("meatConsumption-never")!.innerText = i18next.t(
    "form.question5.option1"
  );
  document.getElementById("meatConsumption-rarely")!.innerText = i18next.t(
    "form.question5.option2"
  );
  document.getElementById("meatConsumption-often")!.innerText = i18next.t(
    "form.question5.option3"
  );
  document.getElementById("submit")!.innerText = i18next.t("submit");
  document.getElementById("dialog-close")!.innerText = i18next.t("close");
}
