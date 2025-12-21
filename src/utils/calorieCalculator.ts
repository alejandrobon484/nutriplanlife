// Calculadora de calorías y perfil metabólico usando fórmula Harris-Benedict

interface UserProfile {
  age: number;
  gender: 'male' | 'female';
  height: number; // cm
  currentWeight: number; // kg
  targetWeight: number; // kg
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'veryActive';
}

export interface CalorieData {
  bmr: number; // Metabolismo Basal
  tdee: number; // Gasto Total Diario de Energía
  targetCalories: number; // Calorías objetivo para alcanzar peso deseado
  deficit: number; // Déficit o superávit calórico diario
  weeklyWeightChange: number; // Cambio de peso semanal esperado (kg)
}

export interface MacroNutrient {
  grams: number;
  percentage: number;
  calories: number;
}

export interface Macros {
  protein: MacroNutrient;
  carbs: MacroNutrient;
  fats: MacroNutrient;
}

export interface MetabolicProfile {
  bmi: number;
  bmiCategory: string;
  macros: Macros;
  recommendations: string[];
  timeToGoal: string;
}

// Multiplicadores de actividad
const activityMultipliers = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9
};

/**
 * Calcula el Metabolismo Basal (BMR) usando la fórmula de Harris-Benedict revisada
 */
function calculateBMR(profile: UserProfile): number {
  const { age, gender, height, currentWeight } = profile;

  if (gender === 'male') {
    // Hombres: BMR = 10 × peso(kg) + 6.25 × altura(cm) − 5 × edad(años) + 5
    return 10 * currentWeight + 6.25 * height - 5 * age + 5;
  } else {
    // Mujeres: BMR = 10 × peso(kg) + 6.25 × altura(cm) − 5 × edad(años) − 161
    return 10 * currentWeight + 6.25 * height - 5 * age - 161;
  }
}

/**
 * Calcula el Gasto Total Diario de Energía (TDEE)
 */
function calculateTDEE(bmr: number, activityLevel: UserProfile['activityLevel']): number {
  return bmr * activityMultipliers[activityLevel];
}

/**
 * Calcula las calorías objetivo y el déficit/superávit
 */
export function calculateCalories(profile: UserProfile): CalorieData {
  const bmr = calculateBMR(profile);
  const tdee = calculateTDEE(bmr, profile.activityLevel);
  
  // Diferencia de peso
  const weightDifference = profile.currentWeight - profile.targetWeight;
  
  // Déficit/Superávit diario recomendado (500 kcal = ~0.5 kg/semana)
  // Máximo 1000 kcal de déficit para pérdida segura
  let dailyDeficit: number;
  
  if (weightDifference > 0) {
    // Necesita perder peso
    dailyDeficit = Math.min(weightDifference * 100, 1000); // Máximo 1000 kcal déficit
  } else {
    // Necesita ganar peso
    dailyDeficit = Math.max(weightDifference * 100, -500); // Máximo 500 kcal superávit
  }
  
  const targetCalories = tdee - dailyDeficit;
  
  // 1 kg de grasa ≈ 7700 kcal
  const weeklyWeightChange = (dailyDeficit * 7) / 7700;
  
  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    targetCalories: Math.round(targetCalories),
    deficit: Math.round(dailyDeficit),
    weeklyWeightChange: Math.abs(weeklyWeightChange)
  };
}

/**
 * Calcula el IMC (Índice de Masa Corporal)
 */
function calculateBMI(weight: number, height: number): number {
  // IMC = peso(kg) / (altura(m))²
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
}

/**
 * Categoría de IMC según OMS
 */
function getBMICategory(bmi: number): string {
  if (bmi < 18.5) return 'Bajo peso';
  if (bmi < 25) return 'Peso normal';
  if (bmi < 30) return 'Sobrepeso';
  if (bmi < 35) return 'Obesidad grado I';
  if (bmi < 40) return 'Obesidad grado II';
  return 'Obesidad grado III';
}

/**
 * Calcula la distribución de macronutrientes
 */
function calculateMacros(targetCalories: number, profile: UserProfile): Macros {
  // Distribución estándar saludable:
  // Proteínas: 25-30% (ajustado según objetivo)
  // Carbohidratos: 40-50%
  // Grasas: 25-30%
  
  const weightDifference = profile.currentWeight - profile.targetWeight;
  
  let proteinPercentage = 25;
  let carbsPercentage = 45;
  let fatsPercentage = 30;
  
  // Ajustar según objetivo
  if (weightDifference > 5) {
    // Pérdida de peso significativa: más proteína, menos carbos
    proteinPercentage = 30;
    carbsPercentage = 40;
    fatsPercentage = 30;
  } else if (weightDifference < -3) {
    // Ganancia de peso: más carbohidratos
    proteinPercentage = 25;
    carbsPercentage = 50;
    fatsPercentage = 25;
  }
  
  // 1g proteína = 4 kcal, 1g carbohidratos = 4 kcal, 1g grasas = 9 kcal
  const proteinCalories = targetCalories * (proteinPercentage / 100);
  const carbsCalories = targetCalories * (carbsPercentage / 100);
  const fatsCalories = targetCalories * (fatsPercentage / 100);
  
  return {
    protein: {
      grams: Math.round(proteinCalories / 4),
      percentage: proteinPercentage,
      calories: Math.round(proteinCalories)
    },
    carbs: {
      grams: Math.round(carbsCalories / 4),
      percentage: carbsPercentage,
      calories: Math.round(carbsCalories)
    },
    fats: {
      grams: Math.round(fatsCalories / 9),
      percentage: fatsPercentage,
      calories: Math.round(fatsCalories)
    }
  };
}

/**
 * Genera recomendaciones personalizadas
 */
function generateRecommendations(profile: UserProfile, calorieData: CalorieData, bmi: number): string[] {
  const recommendations: string[] = [];
  const weightDifference = profile.currentWeight - profile.targetWeight;
  
  // Recomendaciones según objetivo
  if (weightDifference > 0) {
    recommendations.push('Mantén un déficit calórico moderado para pérdida de peso saludable');
    if (calorieData.weeklyWeightChange > 1) {
      recommendations.push('Tu ritmo de pérdida es rápido. Considera reducir el déficit para preservar masa muscular');
    }
  } else if (weightDifference < 0) {
    recommendations.push('Incrementa calorías gradualmente para ganar peso de forma saludable');
    recommendations.push('Combina con entrenamiento de fuerza para ganar masa muscular');
  }
  
  // Recomendaciones según IMC
  if (bmi < 18.5) {
    recommendations.push('Tu IMC indica bajo peso. Consulta con un profesional de la salud');
  } else if (bmi >= 30) {
    recommendations.push('Considera consultar con un nutricionista para un plan personalizado');
  }
  
  // Recomendaciones según nivel de actividad
  if (profile.activityLevel === 'sedentary') {
    recommendations.push('Intenta incrementar tu actividad física gradualmente');
    recommendations.push('Caminar 30 minutos al día puede mejorar tu metabolismo');
  } else if (profile.activityLevel === 'veryActive') {
    recommendations.push('Asegúrate de consumir suficiente proteína para recuperación muscular');
  }
  
  // Recomendaciones generales
  recommendations.push('Bebe al menos 2 litros de agua al día');
  recommendations.push('Prioriza alimentos integrales y de temporada');
  
  return recommendations;
}

/**
 * Calcula el tiempo estimado para alcanzar el objetivo
 */
function calculateTimeToGoal(weightDifference: number, weeklyWeightChange: number): string {
  if (Math.abs(weightDifference) < 0.5) {
    return 'Ya estás en tu peso objetivo';
  }
  
  if (weeklyWeightChange === 0) {
    return 'Ajusta tu déficit calórico para ver progreso';
  }
  
  const weeks = Math.abs(weightDifference) / weeklyWeightChange;
  const months = Math.round(weeks / 4.33);
  
  if (weeks < 4) {
    return `${Math.round(weeks)} semanas`;
  } else if (months < 12) {
    return `${months} ${months === 1 ? 'mes' : 'meses'}`;
  } else {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    if (remainingMonths === 0) {
      return `${years} ${years === 1 ? 'año' : 'años'}`;
    }
    return `${years} ${years === 1 ? 'año' : 'años'} y ${remainingMonths} ${remainingMonths === 1 ? 'mes' : 'meses'}`;
  }
}

/**
 * Genera el perfil metabólico completo
 */
export function getMetabolicProfile(profile: UserProfile, calorieData: CalorieData): MetabolicProfile {
  const bmi = calculateBMI(profile.currentWeight, profile.height);
  const bmiCategory = getBMICategory(bmi);
  const macros = calculateMacros(calorieData.targetCalories, profile);
  const recommendations = generateRecommendations(profile, calorieData, bmi);
  const weightDifference = profile.currentWeight - profile.targetWeight;
  const timeToGoal = calculateTimeToGoal(weightDifference, calorieData.weeklyWeightChange);
  
  return {
    bmi,
    bmiCategory,
    macros,
    recommendations,
    timeToGoal
  };
}
