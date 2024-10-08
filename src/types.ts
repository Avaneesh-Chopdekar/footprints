export interface CalculateFootprintParamsType {
  travelFrequency: number;
  travelDistance: number;
  transportation: string;
  treesPlanted: number;
  meatConsumption: string;
}

export interface CalculateFootprintReturnType {
  score: number;
  message: string;
}
