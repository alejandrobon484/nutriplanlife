'use client';

import { useState } from 'react';
import { Calculator, ChefHat, Apple, Dumbbell, Heart, Sparkles, Moon, Sun, ShoppingCart, Leaf, CloudRain, Snowflake, Sunrise } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { calculateCalories, getMetabolicProfile } from '../utils/calorieCalculator';
import { seasonalMeals } from '../data/seasonalMeals';
import BottomNavigation from './BottomNavigation';
import Footer from './Footer';
import { useShoppingList } from '../hooks/useShoppingList';
import ShoppingList from './ShoppingList';

interface UserProfile {
  age: number;
  gender: 'male' | 'female';  // ← Quitar el | ''
  height: number;
  currentWeight: number;
  targetWeight: number;
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'veryActive';
}

type Season = 'spring' | 'summer' | 'autumn' | 'winter';

const MealPlanner = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const [activeView, setActiveView] = useState<'profile' | 'plan'>('profile');
  const [season, setSeason] = useState<Season>('spring');
  const [profile, setProfile] = useState<UserProfile>({
  age: 30,
  gender: 'female',  // ← Cambiar de '' a 'female'
  height: 175,
  currentWeight: 80,
  targetWeight: 75,
  activityLevel: 'moderate'
});

  const calorieData = calculateCalories(profile);
  const metabolicProfile = getMetabolicProfile(profile, calorieData);
  const currentSeasonMeals = seasonalMeals[season];
  const shoppingListHook = useShoppingList(seasonalMeals, season);

  const CalorieChart = () => {
    const maxCalories = Math.max(
      calorieData.bmr,
      calorieData.tdee,
      calorieData.targetCalories
    );
    
    const getBarWidth = (value: number) => (value / maxCalories) * 100;

    return (
      <div className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-400 mb-6 flex items-center gap-2">
          <Calculator className="w-6 h-6" />
          Tu Plan Calórico Personalizado
        </h3>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Metabolismo Basal (BMR)
              </span>
              <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                {calorieData.bmr.toFixed(0)} kcal
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div 
                className="bg-slate-500 dark:bg-slate-400 h-3 rounded-full transition-all duration-500"
                style={{ width: `${getBarWidth(calorieData.bmr)}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Calorías que quemas en reposo absoluto
            </p>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Gasto Total Diario (TDEE)
              </span>
              <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                {calorieData.tdee.toFixed(0)} kcal
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div 
                className="bg-emerald-600 dark:bg-emerald-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${getBarWidth(calorieData.tdee)}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Calorías que quemas con tu actividad actual
            </p>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Objetivo Calórico
              </span>
              <span className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">
                {calorieData.targetCalories.toFixed(0)} kcal
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div 
                className="bg-emerald-700 dark:bg-emerald-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${getBarWidth(calorieData.targetCalories)}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {calorieData.deficit > 0 ? 'Déficit para alcanzar tu peso objetivo' : 'Superávit para ganar peso'}
            </p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Diferencia Diaria</p>
              <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">
                {Math.abs(calorieData.deficit).toFixed(0)} kcal
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {calorieData.deficit > 0 ? 'Déficit' : 'Superávit'}
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Pérdida Semanal</p>
              <p className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                {calorieData.weeklyWeightChange.toFixed(2)} kg
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Ritmo {calorieData.weeklyWeightChange > 0.5 ? 'rápido' : 'saludable'}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-slate-700" />
        )}
      </button>

      <div className="max-w-6xl mx-auto px-4 py-8 pb-24">
        <header className="text-center mb-12 pt-8">
          <div className="inline-block mb-4">
  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500 p-4 rounded-2xl shadow-lg">
    <Apple className="w-12 h-12 text-white" />
  </div>
</div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-700 dark:from-emerald-400 dark:to-teal-400 mb-3">
            NutriPlanLife
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tu planificador nutricional personalizado con menús estacionales
          </p>
        </header>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveView('profile')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeView === 'profile'
                ? 'bg-emerald-600 text-white shadow-lg scale-105 dark:bg-emerald-500'
                : 'bg-white text-gray-600 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            <Calculator className="w-5 h-5" />
            Mi Perfil
          </button>
          <button
            onClick={() => setActiveView('plan')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeView === 'plan'
                ? 'bg-emerald-600 text-white shadow-lg scale-105 dark:bg-emerald-500'
                : 'bg-white text-gray-600 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            <Apple className="w-5 h-5" />
            Plan Semanal
          </button>
        </div>

        {activeView === 'profile' ? (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-emerald-800 dark:text-emerald-400 mb-6 flex items-center gap-2">
                <Sparkles className="w-8 h-8" />
                Configura tu Perfil
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Edad (años)
                  </label>
                  <input
                     type="number"
                      value={profile.age === 0 ? '' : profile.age}
                      onChange={(e) => setProfile({...profile, age: parseInt(e.target.value) || 0})}  // ← CORRECTO
                      placeholder="Ej: 30"
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-800 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Sexo
                  </label>
                  <select
  value={profile.gender}
  onChange={(e) => setProfile({...profile, gender: e.target.value as 'male' | 'female'})}  // ← Quitar el | ''
  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-800 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
>
  <option value="female">Mujer</option>
  <option value="male">Hombre</option>
</select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Altura (cm)
                  </label>
                  <input
                    type="number"
                    value={profile.height === 0 ? '' : profile.height}
                    onChange={(e) => setProfile({...profile, height: parseInt(e.target.value) || 0})}
                    placeholder="Ej: 175"
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-800 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Peso Actual (kg)
                  </label>
                  <input
                    type="number"
                    value={profile.currentWeight === 0 ? '' : profile.currentWeight}
                    onChange={(e) => setProfile({...profile, currentWeight: parseFloat(e.target.value) || 0})}
                    placeholder="Ej: 75"
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-800 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Peso Objetivo (kg)
                  </label>
                  <input
                    type="number"
                    value={profile.targetWeight === 0 ? '' : profile.targetWeight}
                    onChange={(e) => setProfile({...profile, targetWeight: parseFloat(e.target.value) || 0})}
                    placeholder="Ej: 70"
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-800 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <Dumbbell className="inline w-4 h-4 mr-1" />
                    Nivel de Actividad
                  </label>
                  <select
                    value={profile.activityLevel}
                    onChange={(e) => setProfile({...profile, activityLevel: e.target.value as any})}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-800 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  >
                    <option value="sedentary">Sedentario (poco o ningún ejercicio)</option>
                    <option value="light">Ligero (ejercicio 1-3 días/semana)</option>
                    <option value="moderate">Moderado (ejercicio 3-5 días/semana)</option>
                    <option value="active">Activo (ejercicio 6-7 días/semana)</option>
                    <option value="veryActive">Muy Activo (ejercicio intenso diario)</option>
                  </select>
                </div>
              </div>
            </div>

            <CalorieChart />

            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 dark:from-emerald-700 dark:to-teal-700 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6" />
                Tu Perfil Metabólico
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="font-semibold mb-3 text-emerald-100">Composición Corporal</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">IMC:</span> {metabolicProfile.bmi.toFixed(1)} kg/m²</p>
                    <p><span className="font-medium">Categoría:</span> {metabolicProfile.bmiCategory}</p>
                    <p><span className="font-medium">Peso a perder/ganar:</span> {Math.abs(profile.currentWeight - profile.targetWeight).toFixed(1)} kg</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="font-semibold mb-3 text-emerald-100">Distribución de Macronutrientes</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Proteínas:</span> {metabolicProfile.macros.protein.grams}g ({metabolicProfile.macros.protein.percentage}%)</p>
                    <p><span className="font-medium">Carbohidratos:</span> {metabolicProfile.macros.carbs.grams}g ({metabolicProfile.macros.carbs.percentage}%)</p>
                    <p><span className="font-medium">Grasas:</span> {metabolicProfile.macros.fats.grams}g ({metabolicProfile.macros.fats.percentage}%)</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="font-semibold mb-3 text-emerald-100">Recomendaciones</h4>
                  <ul className="space-y-2 text-sm">
                    {metabolicProfile.recommendations.map((rec: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-emerald-300 mt-1">•</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="font-semibold mb-3 text-emerald-100">Tiempo Estimado</h4>
                  <p className="text-3xl font-bold mb-2">{metabolicProfile.timeToGoal}</p>
                  <p className="text-sm text-emerald-100">
                    Para alcanzar tu peso objetivo de forma saludable
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <h2 className="text-3xl font-bold text-emerald-800 dark:text-emerald-400 flex items-center gap-2">
                  <Apple className="w-8 h-8" />
                  Menú Semanal
                </h2>
                
               <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Temporada:
                  </label>
                  <div className="flex items-center gap-2">
                    <select
                      value={season}
                      onChange={(e) => setSeason(e.target.value as Season)}
                      className="px-4 py-2 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-800 font-medium bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    >
                      <option value="spring">Primavera</option>
                      <option value="summer">Verano</option>
                      <option value="autumn">Otoño</option>
                      <option value="winter">Invierno</option>
                    </select>
                    {season === 'spring' && <Leaf className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />}
                    {season === 'summer' && <Sun className="w-5 h-5 text-amber-500 dark:text-amber-400" />}
                    {season === 'autumn' && <CloudRain className="w-5 h-5 text-orange-600 dark:text-orange-400" />}
                    {season === 'winter' && <Snowflake className="w-5 h-5 text-blue-500 dark:text-blue-400" />}
                  </div>
                  
                  <button
                    onClick={shoppingListHook.generateShoppingList}
                    className="flex items-center gap-2 px-6 py-2 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Lista de Compras
                  </button>
                </div>
              </div>

              <div className="grid gap-6">
                {Object.entries(currentSeasonMeals).map(([day, meals]: [string, any]) => (
                  <div 
                    key={day}
                    className="bg-gradient-to-r from-emerald-200 to-emerald-300 dark:from-gray-700 dark:to-gray-700 rounded-xl p-6 border-2 border-emerald-100 dark:border-gray-600 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-400 mb-4 capitalize">
                      {day}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {Object.entries(meals).map(([mealType, meal]: [string, any]) => (
                        <div 
                          key={mealType}
                          className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 capitalize border-b border-gray-200 dark:border-gray-600 pb-2 flex items-center gap-2">
                            {mealType === 'breakfast' && <Sunrise className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                            {mealType === 'lunch' && <Sun className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                            {mealType === 'dinner' && <Moon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                            {mealType === 'breakfast' ? 'Desayuno' : 
                              mealType === 'lunch' ? 'Comida' : 
                                      'Cena'}
                           </h4>
                          <p className="text-gray-800 dark:text-gray-200 font-medium mb-2">{meal.name}</p>
                          <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold">
                            {meal.calories} kcal
                          </p>
                          <div className="mt-3 flex flex-wrap gap-1">
                            {meal.ingredients.slice(0, 3).map((ingredient: string, idx: number) => (
                              <span 
                                key={idx}
                                className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded-full"
                              >
                                {ingredient}
                              </span>
                            ))}
                            {meal.ingredients.length > 3 && (
                              <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                                +{meal.ingredients.length - 3} más
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
	  
      <ShoppingList 
        categorizedList={shoppingListHook.categorizedList}
        isOpen={shoppingListHook.isOpen}
        setIsOpen={shoppingListHook.setIsOpen}
        toggleItem={shoppingListHook.toggleItem}
        toggleAll={shoppingListHook.toggleAll}
        clearChecked={shoppingListHook.clearChecked}
        clearAll={shoppingListHook.clearAll}
        stats={shoppingListHook.stats}
      />
	  
      <BottomNavigation />
      <Footer />
    </div>
  );
};

export default MealPlanner;