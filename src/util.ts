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
  let message = "Sorry! You have dirtiest footprint. Perfect Black Footprint.";

  const travelScore = Math.min((travelFrequency * travelDistance) / 10, 40);
  score += travelScore;

  // Medium of transportation (Max contribution: 30 points)
  switch (transportation) {
    case "car":
      score += 30; // Cars have the highest emissions
      break;
    case "bus":
      score += 20; // Buses have moderate emissions
      break;
    case "bike":
      score += 5; // Bikes have low emissions
      break;
    case "walk":
      score += 0; // Walking has minimal emissions
      break;
  }

  // Subtract points for trees planted (Max contribution: 20 points)
  const treeScore = Math.min(treesPlanted * 4, 20); // Max benefit from trees
  score -= treeScore;

  // Meat consumption (Max contribution: 30 points)
  switch (meatConsumption) {
    case "never":
      score += 0; // Vegetarians have the lowest footprint
      break;
    case "rarely":
      score += 15; // Moderate meat consumption
      break;
    case "often":
      score += 30; // High meat consumption
      break;
  }

  // Ensure the score is between 1 and 100
  score = Math.max(1, Math.min(score, 100));

  if (score <= 33) {
    score = 0;
    message = "Silver Footprint. The most clean footprint.";
  } else if (score <= 66) {
    message = "Grey Footprint. The moderate footprint.";
  } else {
    score = 100;
    message = "Sorry! You have dirtiest footprint. Perfect Black Footprint.";
  }

  score = 100 - score;

  return { score, message };
}
