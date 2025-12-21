// Menús estacionales con ingredientes de temporada

export interface Meal {
  name: string;
  calories: number;
  ingredients: string[];
}

export interface DayMeals {
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
}

export interface SeasonMeals {
  [day: string]: DayMeals;
}

export interface AllSeasonalMeals {
  spring: SeasonMeals;
  summer: SeasonMeals;
  autumn: SeasonMeals;
  winter: SeasonMeals;
}

export const seasonalMeals: AllSeasonalMeals = {
  spring: {
    lunes: {
      breakfast: {
        name: 'Tostadas con aguacate y huevo',
        calories: 380,
        ingredients: ['pan integral', 'aguacate', 'huevo', 'tomate', 'espárragos']
      },
      lunch: {
        name: 'Ensalada de espárragos con salmón',
        calories: 520,
        ingredients: ['espárragos', 'salmón', 'lechuga', 'tomate', 'aceite de oliva']
      },
      dinner: {
        name: 'Pollo al horno con guisantes',
        calories: 450,
        ingredients: ['pollo', 'guisantes', 'zanahorias', 'cebolla', 'ajo']
      }
    },
    martes: {
      breakfast: {
        name: 'Yogur con fresas y granola',
        calories: 320,
        ingredients: ['yogur natural', 'fresas', 'granola', 'miel', 'almendras']
      },
      lunch: {
        name: 'Arroz con verduras de primavera',
        calories: 480,
        ingredients: ['arroz integral', 'alcachofas', 'guisantes', 'espárragos', 'pimientos']
      },
      dinner: {
        name: 'Merluza con espinacas',
        calories: 420,
        ingredients: ['merluza', 'espinacas', 'ajo', 'aceite de oliva', 'limón']
      }
    },
    miercoles: {
      breakfast: {
        name: 'Bowl de avena con frutas',
        calories: 350,
        ingredients: ['avena', 'plátano', 'fresas', 'kiwi', 'nueces']
      },
      lunch: {
        name: 'Pasta primavera con burrata',
        calories: 550,
        ingredients: ['pasta', 'tomate', 'albahaca', 'burrata', 'rúcula']
      },
      dinner: {
        name: 'Ternera con alcachofas',
        calories: 480,
        ingredients: ['ternera', 'alcachofas', 'patatas', 'ajo', 'perejil']
      }
    },
    jueves: {
      breakfast: {
        name: 'Tortilla de espárragos',
        calories: 340,
        ingredients: ['huevo', 'espárragos', 'cebolla', 'pan integral', 'tomate']
      },
      lunch: {
        name: 'Ensalada de quinoa con verduras',
        calories: 470,
        ingredients: ['quinoa', 'pepino', 'tomate', 'feta', 'aceitunas']
      },
      dinner: {
        name: 'Salmón a la plancha con espárragos',
        calories: 490,
        ingredients: ['salmón', 'espárragos', 'limón', 'ajo', 'aceite de oliva']
      }
    },
    viernes: {
      breakfast: {
        name: 'Tostadas con jamón y tomate',
        calories: 360,
        ingredients: ['pan integral', 'jamón', 'tomate', 'aceite de oliva', 'ajo']
      },
      lunch: {
        name: 'Paella de verduras',
        calories: 520,
        ingredients: ['arroz', 'guisantes', 'alcachofas', 'pimientos', 'azafrán']
      },
      dinner: {
        name: 'Lubina al horno con patatas',
        calories: 460,
        ingredients: ['lubina', 'patatas', 'cebolla', 'limón', 'perejil']
      }
    },
    sabado: {
      breakfast: {
        name: 'Huevos revueltos con setas',
        calories: 330,
        ingredients: ['huevo', 'champiñones', 'cebolla', 'pan integral', 'queso']
      },
      lunch: {
        name: 'Arroz con pollo y verduras',
        calories: 540,
        ingredients: ['arroz', 'pollo', 'guisantes', 'zanahorias', 'pimientos']
      },
      dinner: {
        name: 'Ensalada completa con atún',
        calories: 420,
        ingredients: ['lechuga', 'atún', 'huevo', 'tomate', 'aceitunas']
      }
    },
    domingo: {
      breakfast: {
        name: 'Smoothie bowl de fresas',
        calories: 340,
        ingredients: ['fresas', 'plátano', 'yogur', 'granola', 'chía']
      },
      lunch: {
        name: 'Cordero asado con patatas',
        calories: 580,
        ingredients: ['cordero', 'patatas', 'romero', 'ajo', 'cebolla']
      },
      dinner: {
        name: 'Crema de espárragos',
        calories: 280,
        ingredients: ['espárragos', 'patatas', 'cebolla', 'nata', 'pan']
      }
    }
  },
  summer: {
    lunes: {
      breakfast: {
        name: 'Bowl de yogur con frutas de verano',
        calories: 350,
        ingredients: ['yogur', 'melocotón', 'sandía', 'granola', 'miel']
      },
      lunch: {
        name: 'Ensalada de tomate con mozzarella',
        calories: 420,
        ingredients: ['tomate', 'mozzarella', 'albahaca', 'aceite de oliva', 'pan']
      },
      dinner: {
        name: 'Dorada a la sal con verduras',
        calories: 480,
        ingredients: ['dorada', 'calabacín', 'berenjena', 'pimientos', 'limón']
      }
    },
    martes: {
      breakfast: {
        name: 'Tostadas con aguacate y tomate',
        calories: 360,
        ingredients: ['pan integral', 'aguacate', 'tomate', 'aceite de oliva', 'sal']
      },
      lunch: {
        name: 'Gazpacho con ensalada',
        calories: 320,
        ingredients: ['tomate', 'pepino', 'pimiento', 'lechuga', 'pan']
      },
      dinner: {
        name: 'Pollo a la plancha con ensalada',
        calories: 450,
        ingredients: ['pollo', 'lechuga', 'tomate', 'pepino', 'zanahoria']
      }
    },
    miercoles: {
      breakfast: {
        name: 'Smoothie de mango y plátano',
        calories: 310,
        ingredients: ['mango', 'plátano', 'yogur', 'avena', 'miel']
      },
      lunch: {
        name: 'Pasta con calabacín y gambas',
        calories: 520,
        ingredients: ['pasta', 'calabacín', 'gambas', 'ajo', 'aceite de oliva']
      },
      dinner: {
        name: 'Atún a la plancha con ensalada',
        calories: 440,
        ingredients: ['atún', 'lechuga', 'tomate', 'cebolla', 'aceitunas']
      }
    },
    jueves: {
      breakfast: {
        name: 'Tortilla de calabacín',
        calories: 330,
        ingredients: ['huevo', 'calabacín', 'cebolla', 'pan integral', 'tomate']
      },
      lunch: {
        name: 'Ensalada de pasta con verduras',
        calories: 480,
        ingredients: ['pasta', 'tomate', 'pepino', 'aceitunas', 'mozzarella']
      },
      dinner: {
        name: 'Lubina al horno con verduras',
        calories: 460,
        ingredients: ['lubina', 'calabacín', 'berenjena', 'tomate', 'limón']
      }
    },
    viernes: {
      breakfast: {
        name: 'Pan con tomate y jamón',
        calories: 370,
        ingredients: ['pan integral', 'tomate', 'jamón', 'aceite de oliva', 'ajo']
      },
      lunch: {
        name: 'Paella de marisco',
        calories: 550,
        ingredients: ['arroz', 'gambas', 'calamares', 'mejillones', 'pimientos']
      },
      dinner: {
        name: 'Ensalada de melón con jamón',
        calories: 380,
        ingredients: ['melón', 'jamón', 'mozzarella', 'albahaca', 'aceite']
      }
    },
    sabado: {
      breakfast: {
        name: 'Huevos revueltos con tomate',
        calories: 340,
        ingredients: ['huevo', 'tomate', 'cebolla', 'pan integral', 'aguacate']
      },
      lunch: {
        name: 'Arroz a banda',
        calories: 520,
        ingredients: ['arroz', 'pescado', 'gambas', 'ajo', 'azafrán']
      },
      dinner: {
        name: 'Brochetas de pollo con verduras',
        calories: 450,
        ingredients: ['pollo', 'pimientos', 'calabacín', 'cebolla', 'tomate']
      }
    },
    domingo: {
      breakfast: {
        name: 'Macedonia de frutas con yogur',
        calories: 320,
        ingredients: ['sandía', 'melón', 'melocotón', 'yogur', 'menta']
      },
      lunch: {
        name: 'Pulpo a la gallega',
        calories: 420,
        ingredients: ['pulpo', 'patatas', 'pimentón', 'aceite de oliva', 'sal']
      },
      dinner: {
        name: 'Gazpacho y ensalada mediterránea',
        calories: 360,
        ingredients: ['tomate', 'pepino', 'pimiento', 'lechuga', 'aceitunas']
      }
    }
  },
  autumn: {
    lunes: {
      breakfast: {
        name: 'Porridge con manzana y canela',
        calories: 360,
        ingredients: ['avena', 'manzana', 'canela', 'nueces', 'miel']
      },
      lunch: {
        name: 'Lentejas con verduras',
        calories: 480,
        ingredients: ['lentejas', 'zanahoria', 'calabaza', 'cebolla', 'chorizo']
      },
      dinner: {
        name: 'Salmón con setas',
        calories: 460,
        ingredients: ['salmón', 'setas', 'ajo', 'perejil', 'aceite de oliva']
      }
    },
    martes: {
      breakfast: {
        name: 'Tostadas con queso y pera',
        calories: 340,
        ingredients: ['pan integral', 'queso', 'pera', 'nueces', 'miel']
      },
      lunch: {
        name: 'Arroz con setas',
        calories: 500,
        ingredients: ['arroz', 'setas', 'calabaza', 'cebolla', 'ajo']
      },
      dinner: {
        name: 'Pollo asado con boniato',
        calories: 520,
        ingredients: ['pollo', 'boniato', 'cebolla', 'romero', 'ajo']
      }
    },
    miercoles: {
      breakfast: {
        name: 'Yogur con granada y granola',
        calories: 330,
        ingredients: ['yogur', 'granada', 'granola', 'almendras', 'miel']
      },
      lunch: {
        name: 'Garbanzos con espinacas',
        calories: 470,
        ingredients: ['garbanzos', 'espinacas', 'ajo', 'pimentón', 'comino']
      },
      dinner: {
        name: 'Merluza al horno con calabaza',
        calories: 440,
        ingredients: ['merluza', 'calabaza', 'cebolla', 'ajo', 'perejil']
      }
    },
    jueves: {
      breakfast: {
        name: 'Tortilla de setas',
        calories: 350,
        ingredients: ['huevo', 'setas', 'cebolla', 'pan integral', 'queso']
      },
      lunch: {
        name: 'Pasta con calabaza y nueces',
        calories: 530,
        ingredients: ['pasta', 'calabaza', 'nueces', 'queso', 'salvia']
      },
      dinner: {
        name: 'Ternera guisada con patatas',
        calories: 510,
        ingredients: ['ternera', 'patatas', 'zanahoria', 'cebolla', 'vino']
      }
    },
    viernes: {
      breakfast: {
        name: 'Bowl de avena con higos',
        calories: 360,
        ingredients: ['avena', 'higos', 'nueces', 'canela', 'miel']
      },
      lunch: {
        name: 'Paella de verduras de otoño',
        calories: 490,
        ingredients: ['arroz', 'alcachofas', 'judías', 'calabaza', 'azafrán']
      },
      dinner: {
        name: 'Bacalao con pimientos',
        calories: 450,
        ingredients: ['bacalao', 'pimientos', 'cebolla', 'ajo', 'tomate']
      }
    },
    sabado: {
      breakfast: {
        name: 'Tostadas con aguacate y huevo',
        calories: 370,
        ingredients: ['pan integral', 'aguacate', 'huevo', 'tomate', 'rúcula']
      },
      lunch: {
        name: 'Codornices con uvas',
        calories: 540,
        ingredients: ['codornices', 'uvas', 'cebolla', 'vino', 'piñones']
      },
      dinner: {
        name: 'Crema de calabaza',
        calories: 320,
        ingredients: ['calabaza', 'cebolla', 'patatas', 'nata', 'pipas']
      }
    },
    domingo: {
      breakfast: {
        name: 'Smoothie de manzana y canela',
        calories: 310,
        ingredients: ['manzana', 'plátano', 'avena', 'canela', 'almendras']
      },
      lunch: {
        name: 'Cordero asado con castañas',
        calories: 580,
        ingredients: ['cordero', 'castañas', 'patatas', 'romero', 'ajo']
      },
      dinner: {
        name: 'Ensalada de escarola con granada',
        calories: 350,
        ingredients: ['escarola', 'granada', 'nueces', 'queso', 'manzana']
      }
    }
  },
  winter: {
    lunes: {
      breakfast: {
        name: 'Porridge caliente con frutos secos',
        calories: 380,
        ingredients: ['avena', 'nueces', 'pasas', 'miel', 'canela']
      },
      lunch: {
        name: 'Cocido madrileño',
        calories: 620,
        ingredients: ['garbanzos', 'ternera', 'chorizo', 'morcilla', 'col']
      },
      dinner: {
        name: 'Sopa de pescado',
        calories: 420,
        ingredients: ['merluza', 'patatas', 'cebolla', 'ajo', 'fideos']
      }
    },
    martes: {
      breakfast: {
        name: 'Tostadas con mantequilla y miel',
        calories: 350,
        ingredients: ['pan integral', 'mantequilla', 'miel', 'nueces', 'plátano']
      },
      lunch: {
        name: 'Lentejas con verduras',
        calories: 500,
        ingredients: ['lentejas', 'zanahoria', 'puerros', 'patatas', 'chorizo']
      },
      dinner: {
        name: 'Pollo al horno con patatas',
        calories: 520,
        ingredients: ['pollo', 'patatas', 'cebolla', 'ajo', 'romero']
      }
    },
    miercoles: {
      breakfast: {
        name: 'Yogur con muesli caliente',
        calories: 340,
        ingredients: ['yogur', 'muesli', 'manzana', 'canela', 'miel']
      },
      lunch: {
        name: 'Arroz caldoso con bacalao',
        calories: 540,
        ingredients: ['arroz', 'bacalao', 'coliflor', 'ajo', 'pimentón']
      },
      dinner: {
        name: 'Ternera estofada',
        calories: 510,
        ingredients: ['ternera', 'patatas', 'zanahoria', 'cebolla', 'vino']
      }
    },
    jueves: {
      breakfast: {
        name: 'Tortilla de patatas',
        calories: 400,
        ingredients: ['huevo', 'patatas', 'cebolla', 'pan integral', 'aceite']
      },
      lunch: {
        name: 'Garbanzos con espinacas',
        calories: 480,
        ingredients: ['garbanzos', 'espinacas', 'ajo', 'pimentón', 'comino']
      },
      dinner: {
        name: 'Salmón al horno con brócoli',
        calories: 470,
        ingredients: ['salmón', 'brócoli', 'ajo', 'limón', 'aceite de oliva']
      }
    },
    viernes: {
      breakfast: {
        name: 'Bowl de avena con frutos rojos',
        calories: 360,
        ingredients: ['avena', 'arándanos', 'frambuesas', 'nueces', 'miel']
      },
      lunch: {
        name: 'Fabada asturiana',
        calories: 580,
        ingredients: ['alubias', 'chorizo', 'morcilla', 'tocino', 'pimentón']
      },
      dinner: {
        name: 'Merluza en salsa verde',
        calories: 440,
        ingredients: ['merluza', 'guisantes', 'ajo', 'perejil', 'vino']
      }
    },
    sabado: {
      breakfast: {
        name: 'Huevos revueltos con bacon',
        calories: 410,
        ingredients: ['huevo', 'bacon', 'tomate', 'pan integral', 'queso']
      },
      lunch: {
        name: 'Paella valenciana',
        calories: 560,
        ingredients: ['arroz', 'pollo', 'conejo', 'judías', 'azafrán']
      },
      dinner: {
        name: 'Crema de puerros',
        calories: 340,
        ingredients: ['puerros', 'patatas', 'cebolla', 'nata', 'pan']
      }
    },
    domingo: {
      breakfast: {
        name: 'Torrijas con miel',
        calories: 420,
        ingredients: ['pan', 'leche', 'huevo', 'miel', 'canela']
      },
      lunch: {
        name: 'Cordero asado con patatas',
        calories: 600,
        ingredients: ['cordero', 'patatas', 'romero', 'ajo', 'cebolla']
      },
      dinner: {
        name: 'Ensalada templada de col',
        calories: 380,
        ingredients: ['col', 'zanahoria', 'manzana', 'nueces', 'queso']
      }
    }
  }
};
