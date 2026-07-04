// PROMPTWAR: Cooking Todo List (Clean Version)

// Recipe Database
const RECIPE_DATABASE = [
  // Breakfast Recipes
  {
    id: "busy-b1",
    name: "Quick Kanda Poha",
    type: "breakfast",
    complexity: "low",
    cost: 80,
    diets: ["veg"],
    ingredients: [
      { name: "Flattened Rice (Poha)", cost: 20 },
      { name: "Onions & Green Chilies", cost: 15 },
      { name: "Peanuts & Curry Leaves", cost: 25 },
      { name: "Mustard Seeds & Turmeric", cost: 20 }
    ],
    steps: ["Wash poha and drain water completely.", "Sauté onions, chilies, and peanuts in oil with mustard seeds.", "Add turmeric, salt, and drained poha. Mix gently and steam for 2 minutes."]
  },
  {
    id: "jain-busy-b1",
    name: "Jain Poha (No Onion)",
    type: "breakfast",
    complexity: "low",
    cost: 75,
    diets: ["jain-friendly", "veg"],
    ingredients: [
      { name: "Flattened Rice (Poha)", cost: 20 },
      { name: "Green Chilies & Ginger", cost: 10 },
      { name: "Peanuts & Curry Leaves", cost: 25 },
      { name: "Mustard Seeds & Turmeric", cost: 20 }
    ],
    steps: ["Wash poha and drain water.", "Sauté chilies, ginger, and peanuts in oil.", "Add turmeric, salt, and poha. Mix and steam."]
  },
  {
    id: "egg-busy-b1",
    name: "Classic Bread Omelette",
    type: "breakfast",
    complexity: "low",
    cost: 90,
    diets: ["eggitarian", "non-veg"],
    ingredients: [
      { name: "Fresh Eggs", cost: 30 },
      { name: "Bread Slices", cost: 25 },
      { name: "Onions & Chilies", cost: 15 },
      { name: "Butter", cost: 20 }
    ],
    steps: ["Whisk eggs with onions, chilies, and salt.", "Pour into a hot buttered pan, place bread slices on top, flip and toast."]
  },

  // Moderate Breakfast
  {
    id: "mod-b1",
    name: "Sooji Upma with Coconut Chutney",
    type: "breakfast",
    complexity: "medium",
    cost: 95,
    diets: ["veg", "jain-friendly"],
    ingredients: [
      { name: "Semolina (Sooji)", cost: 20 },
      { name: "Carrots, Peas & Mustard Seeds", cost: 30 },
      { name: "Fresh Coconut & Green Chilies", cost: 35 },
      { name: "Ghee", cost: 10, veganAlternative: "Coconut Oil" }
    ],
    steps: ["Dry roast sooji until fragrant.", "Sauté mustard seeds, curry leaves, and veggies. Add water and bring to a boil.", "Slowly stir in roasted sooji to prevent lumps, simmer for 5 mins. Blend coconut with chilies for chutney."]
  },
  {
    id: "egg-mod-b1",
    name: "Masala Egg Bhurji with Pav",
    type: "breakfast",
    complexity: "medium",
    cost: 110,
    diets: ["eggitarian", "non-veg"],
    ingredients: [
      { name: "Fresh Eggs", cost: 40 },
      { name: "Pav / Buns", cost: 30 },
      { name: "Onions & Tomatoes", cost: 25 },
      { name: "Butter", cost: 15 }
    ],
    steps: ["Sauté onions, tomatoes, and chilies in butter.", "Add eggs and scramble. Serve hot with toasted buttered pav."]
  },

  // Weekend Breakfast
  {
    id: "week-b1",
    name: "Classic Stuffed Aloo Paratha Feast",
    type: "breakfast",
    complexity: "high",
    cost: 120,
    diets: ["veg"],
    ingredients: [
      { name: "Boiled Potatoes & Spices", cost: 40 },
      { name: "Whole Wheat Dough", cost: 30 },
      { name: "Amul Butter & Curd", cost: 50 }
    ],
    steps: ["Mash boiled potatoes with green chilies, coriander, and dry mango powder.", "Roll out dough, stuff with filling, and seal carefully.", "Griddle-fry with generous ghee. Serve with butter and fresh curd."]
  },
  {
    id: "jain-week-b1",
    name: "Jain Stuffed Banana Paratha",
    type: "breakfast",
    complexity: "high",
    cost: 130,
    diets: ["jain-friendly", "veg"],
    ingredients: [
      { name: "Boiled Raw Banana & Spices", cost: 50 },
      { name: "Whole Wheat Dough", cost: 30 },
      { name: "Butter & Curd", cost: 50 }
    ],
    steps: ["Mash boiled raw bananas with spices.", "Roll out dough, stuff with filling, and seal.", "Griddle-fry with ghee and serve with curd."]
  },

  // Lunch Recipes
  {
    id: "busy-l1",
    name: "10-Minute Dal Tadka & Roti",
    type: "lunch",
    complexity: "low",
    cost: 120,
    diets: ["veg"],
    ingredients: [
      { name: "Yellow Moong Dal", cost: 40 },
      { name: "Spices & Onion-Tomato Tadka", cost: 30 },
      { name: "Ready-to-cook Rotis", cost: 30 },
      { name: "Ghee", cost: 20 }
    ],
    steps: ["Pressure cook dal with turmeric and salt.", "Prepare a quick tadka with ghee, cumin, onions, tomatoes, and red chili powder.", "Pour tadka over dal and serve hot with warmed rotis."]
  },
  {
    id: "jain-busy-l1",
    name: "Jain Dal Fry & Roti",
    type: "lunch",
    complexity: "low",
    cost: 110,
    diets: ["jain-friendly", "veg"],
    ingredients: [
      { name: "Yellow Moong Dal", cost: 40 },
      { name: "Tomato & Hing Tadka", cost: 20 },
      { name: "Ready-to-cook Rotis", cost: 30 },
      { name: "Ghee", cost: 20 }
    ],
    steps: ["Pressure cook dal with turmeric.", "Make a tadka with ghee, cumin, tomatoes, and hing (no garlic/onion).", "Pour over dal and serve with rotis."]
  },

  // Moderate Lunch
  {
    id: "mod-l1",
    name: "Chana Masala with Jeera Rice",
    type: "lunch",
    complexity: "medium",
    cost: 160,
    diets: ["veg"],
    ingredients: [
      { name: "Soaked Kabuli Chana", cost: 50 },
      { name: "Basmati Rice & Cumin Seeds", cost: 40 },
      { name: "Onion-Garlic Paste", cost: 30 },
      { name: "Whole Spices & Oil", cost: 40 }
    ],
    steps: ["Boil chickpeas in pressure cooker.", "Sauté cumin in hot oil to make Jeera Rice.", "Cook onion-garlic paste with spices, add chickpeas, and simmer to a thick gravy."]
  },
  {
    id: "jain-mod-l1",
    name: "Jain Chana Masala & Jeera Rice",
    type: "lunch",
    complexity: "medium",
    cost: 150,
    diets: ["jain-friendly", "veg"],
    ingredients: [
      { name: "Soaked Kabuli Chana", cost: 50 },
      { name: "Basmati Rice & Cumin Seeds", cost: 40 },
      { name: "Tomato-Ginger Puree", cost: 20 },
      { name: "Whole Spices & Oil", cost: 40 }
    ],
    steps: ["Boil chickpeas.", "Sauté cumin in hot oil to make Jeera Rice.", "Cook tomato-ginger puree with spices, add chickpeas, and simmer."]
  },

  // Weekend Lunch
  {
    id: "week-l1",
    name: "Paneer Tikka Biryani Feast",
    type: "lunch",
    complexity: "high",
    cost: 300,
    diets: ["veg"],
    ingredients: [
      { name: "Basmati Rice", cost: 70 },
      { name: "Fresh Paneer Blocks", cost: 110 },
      { name: "Yogurt & Biryani Spices", cost: 60 },
      { name: "Fried Onions & Mint", cost: 60 }
    ],
    steps: ["Marinate paneer cubes in spiced yogurt and grill.", "Parboil basmati rice with whole spices.", "Layer rice and grilled paneer in a pot, top with fried onions and mint, then dum-cook."]
  },
  {
    id: "jain-week-l1",
    name: "Jain Paneer Dum Biryani",
    type: "lunch",
    complexity: "high",
    cost: 290,
    diets: ["jain-friendly", "veg"],
    ingredients: [
      { name: "Basmati Rice", cost: 70 },
      { name: "Paneer Blocks", cost: 110 },
      { name: "Yogurt & Spices (No Onion)", cost: 50 },
      { name: "Cashews & Mint", cost: 60 }
    ],
    steps: ["Marinate paneer in spiced yogurt (no garlic/onion).", "Parboil rice.", "Layer rice and paneer, garnish with cashews and mint, and dum-cook."]
  },
  {
    id: "nonveg-week-l1",
    name: "Classic Chicken Dum Biryani",
    type: "lunch",
    complexity: "high",
    cost: 350,
    diets: ["non-veg"],
    ingredients: [
      { name: "Basmati Rice", cost: 70 },
      { name: "Fresh Chicken Pieces", cost: 150 },
      { name: "Yogurt & Biryani Spices", cost: 70 },
      { name: "Fried Onions & Mint", cost: 60 }
    ],
    steps: ["Marinate chicken in spiced yogurt overnight.", "Parboil rice, layer over chicken in a heavy pot, seal, and dum-cook."]
  },

  // Dinner Recipes
  {
    id: "busy-d1",
    name: "Quick Paneer Bhurji & Roti",
    type: "dinner",
    complexity: "low",
    cost: 160,
    diets: ["veg"],
    ingredients: [
      { name: "Fresh Paneer", cost: 90 },
      { name: "Onions & Tomatoes", cost: 30 },
      { name: "Spices & Coriander", cost: 15 },
      { name: "Ready-to-cook Rotis", cost: 25 }
    ],
    steps: ["Sauté onions, tomatoes, and chilies in butter.", "Add crumbled paneer, turmeric, and garam masala.", "Stir-fry for 5 minutes and serve hot with rotis."]
  },
  {
    id: "jain-busy-d1",
    name: "Jain Paneer Bhurji & Roti",
    type: "dinner",
    complexity: "low",
    cost: 150,
    diets: ["jain-friendly", "veg"],
    ingredients: [
      { name: "Fresh Paneer", cost: 90 },
      { name: "Capsicum & Tomatoes", cost: 20 },
      { name: "Spices & Coriander", cost: 15 },
      { name: "Ready-to-cook Rotis", cost: 25 }
    ],
    steps: ["Sauté capsicum and tomatoes in butter.", "Add crumbled paneer and spices (no garlic/onion).", "Stir-fry and serve with rotis."]
  },
  {
    id: "egg-busy-d1",
    name: "Spicy Egg Bhurji & Roti",
    type: "dinner",
    complexity: "low",
    cost: 120,
    diets: ["eggitarian", "non-veg"],
    ingredients: [
      { name: "Fresh Eggs", cost: 40 },
      { name: "Onions & Tomatoes", cost: 30 },
      { name: "Spices", cost: 15 },
      { name: "Ready-to-cook Rotis", cost: 35 }
    ],
    steps: ["Sauté chopped onions, tomatoes, and chilies.", "Add eggs and scramble. Serve with rotis."]
  },

  // Moderate Dinner
  {
    id: "mod-d1",
    name: "Aloo Gobhi Masala with Phulkas",
    type: "dinner",
    complexity: "medium",
    cost: 130,
    diets: ["veg"],
    ingredients: [
      { name: "Potatoes & Cauliflower", cost: 50 },
      { name: "Onion-Tomato Masala", cost: 35 },
      { name: "Spices & Oil", cost: 15 },
      { name: "Wheat Flour", cost: 30 }
    ],
    steps: ["Stir-fry potatoes and cauliflower until par-cooked.", "Sauté onion-tomato masala with spices. Toss in veggies and simmer.", "Roll wheat dough and puff fresh phulkas to serve."]
  },
  {
    id: "jain-mod-d1",
    name: "Jain Gobhi Masala & Phulkas",
    type: "dinner",
    complexity: "medium",
    cost: 120,
    diets: ["jain-friendly", "veg"],
    ingredients: [
      { name: "Cauliflower & Green Peas", cost: 50 },
      { name: "Tomato-Ginger Gravy", cost: 25 },
      { name: "Spices & Oil", cost: 15 },
      { name: "Wheat Flour", cost: 30 }
    ],
    steps: ["Stir-fry cauliflower and peas.", "Cook tomato-ginger gravy with spices (no garlic/onion/potato).", "Toss in veggies and serve with phulkas."]
  },
  {
    id: "egg-mod-d1",
    name: "Dhaba Egg Curry with Laccha Paratha",
    type: "dinner",
    complexity: "medium",
    cost: 180,
    diets: ["eggitarian", "non-veg"],
    ingredients: [
      { name: "Boiled Eggs", cost: 40 },
      { name: "Onion-Tomato Thick Gravy", cost: 60 },
      { name: "Wheat Flour (for Paratha)", cost: 50 },
      { name: "Ghee & Cream", cost: 30 }
    ],
    steps: ["Pan-fry boiled eggs until crispy.", "Simmer onion-tomato gravy with red chili and garam masala.", "Add eggs and cook. Serve with flaky laccha parathas."]
  },

  // Weekend Dinner
  {
    id: "week-d1",
    name: "Shahi Paneer Butter Masala with Naan",
    type: "dinner",
    complexity: "high",
    cost: 320,
    diets: ["veg"],
    ingredients: [
      { name: "Paneer Cubes", cost: 100 },
      { name: "Cashew-Tomato Cream Gravy", cost: 120 },
      { name: "All-purpose Flour (Maida)", cost: 50 },
      { name: "Butter & Kasuri Methi", cost: 50 }
    ],
    steps: ["Blend boiled tomatoes, cashews, and butter into a silky gravy.", "Add paneer cubes and simmer with fresh cream.", "Bake butter naans on a hot tawa and serve immediately."]
  },
  {
    id: "jain-week-d1",
    name: "Jain Paneer Butter Masala & Naan",
    type: "dinner",
    complexity: "high",
    cost: 310,
    diets: ["jain-friendly", "veg"],
    ingredients: [
      { name: "Paneer Cubes", cost: 100 },
      { name: "Cashew-Tomato Gravy (No Onion)", cost: 110 },
      { name: "All-purpose Flour (Maida)", cost: 50 },
      { name: "Butter & Spices", cost: 50 }
    ],
    steps: ["Blend tomatoes and cashews into a gravy.", "Add paneer, butter, and simmer (no garlic/onion).", "Serve with butter naans."]
  },
  {
    id: "nonveg-week-d1",
    name: "Mughlai Butter Chicken & Garlic Naan",
    type: "dinner",
    complexity: "high",
    cost: 450,
    diets: ["non-veg"],
    ingredients: [
      { name: "Tandoori Chicken Tikka", cost: 220 },
      { name: "Cashew-Tomato Butter Gravy", cost: 130 },
      { name: "Maida & Garlic", cost: 50 },
      { name: "Fresh Cream", cost: 50 }
    ],
    steps: ["Marinate and roast chicken tikka.", "Simmer tikka in a buttery cashew-tomato gravy with fresh cream.", "Serve with hot handmade garlic naans."]
  }
];

// Current State
let currentPlan = [];
let currentIngredients = [];
let targetBudget = 300;

// DOM Selectors
const budgetSlider = document.getElementById("budget-slider");
const budgetValue = document.getElementById("budget-value");
const daySelect = document.getElementById("day-select");
const dietSelect = document.getElementById("diet-select");
const generateBtn = document.getElementById("generate-btn");

const mealsContainer = document.getElementById("meals-container");
const groceryContainer = document.getElementById("grocery-container");
const guideContainer = document.getElementById("guide-container");
const budgetStatusBox = document.getElementById("budget-status-box");
const scheduleBadge = document.getElementById("schedule-badge");

// Live Budget Slider Display & Dynamic Recipe Adjustment
budgetSlider.addEventListener("input", (e) => {
  targetBudget = parseInt(e.target.value, 10);
  budgetValue.textContent = `₹${targetBudget}`;
  
  // Re-generate meal plan dynamically when budget changes
  generateMealPlan();
});

// Selector Listeners to trigger changes immediately
daySelect.addEventListener("change", generateMealPlan);
dietSelect.addEventListener("change", generateMealPlan);
generateBtn.addEventListener("click", generateMealPlan);

function generateMealPlan() {
  const dayProfile = daySelect.value;
  const diet = dietSelect.value;
  
  // Complexity Mapping based on schedule density
  let requiredComplexity = "medium";
  if (dayProfile === "busy") requiredComplexity = "low";
  if (dayProfile === "weekend") requiredComplexity = "high";

  // Filter recipes matching complexity AND dietary restrictions
  const filterByDiet = (recipeType) => {
    let matches = RECIPE_DATABASE.filter(r => r.type === recipeType);
    
    // Strict dietary matching
    let dietaryMatches = matches.filter(r => r.diets.includes(diet));
    
    // Fallback checks for dietary matches
    if (dietaryMatches.length === 0) {
      if (diet === "non-veg") {
        dietaryMatches = matches.filter(r => r.diets.includes("eggitarian") || r.diets.includes("veg"));
      } else if (diet === "eggitarian") {
        dietaryMatches = matches.filter(r => r.diets.includes("veg"));
      } else if (diet === "jain-friendly") {
        dietaryMatches = matches.filter(r => r.diets.includes("veg"));
      }
    }
    
    if (dietaryMatches.length === 0) {
      dietaryMatches = matches.filter(r => r.diets.includes("veg"));
    }

    // Now, filter by cost based on budget slider!
    // A simple threshold heuristics to determine if we should show budget-friendly or premium items:
    // We sort the matching items by cost.
    // If budget is low, we pick the cheapest item. If high, we pick the premium item.
    dietaryMatches.sort((a, b) => a.cost - b.cost);

    // Budget brackets:
    // Low: ≤ ₹300 total -> pick cheapest
    // Mid: ₹300 - ₹600 -> pick middle
    // High: > ₹600 -> pick premium
    let selected = dietaryMatches[0]; // default cheapest
    
    if (targetBudget > 600) {
      // Pick premium if it matches complexity or just pick highest cost
      const premiumMatches = dietaryMatches.filter(r => r.complexity === requiredComplexity);
      selected = premiumMatches[premiumMatches.length - 1] || dietaryMatches[dietaryMatches.length - 1];
    } else if (targetBudget >= 300) {
      // Pick standard matching complexity
      selected = dietaryMatches.find(r => r.complexity === requiredComplexity) || dietaryMatches[Math.floor(dietaryMatches.length / 2)];
    } else {
      // Pick cheapest matching complexity
      selected = dietaryMatches.find(r => r.complexity === requiredComplexity) || dietaryMatches[0];
    }

    return selected;
  };

  let breakfast = filterByDiet("breakfast");
  let lunch = filterByDiet("lunch");
  let dinner = filterByDiet("dinner");

  currentPlan = [breakfast, lunch, dinner];

  // Extract ingredients from plan (using deep copies to allow substitutions)
  currentIngredients = [];
  currentPlan.forEach(recipe => {
    recipe.ingredients.forEach(ing => {
      currentIngredients.push({
        recipeId: recipe.id,
        name: ing.name,
        originalName: ing.name,
        cost: ing.cost,
        originalCost: ing.cost,
        vegAlternative: ing.vegAlternative,
        jainAlternative: ing.jainAlternative,
        veganAlternative: ing.veganAlternative,
        isSubstituted: false,
        subType: null
      });
    });
  });

  // Render HTML Views
  renderMeals();
  renderGroceryList();
  renderKitchenGuide();
  updateBudgetFeedback();
  
  scheduleBadge.textContent = `${dayProfile} Schedule`;
}

function renderMeals() {
  mealsContainer.innerHTML = "";
  currentPlan.forEach(meal => {
    const mealEl = document.createElement("div");
    mealEl.className = "meal-item";
    mealEl.setAttribute("role", "article");

    const timeLabel = meal.type.charAt(0).toUpperCase() + meal.type.slice(1);
    
    mealEl.innerHTML = `
      <span class="meal-time">${timeLabel}</span>
      <h3 class="meal-title">${meal.name}</h3>
      <div class="meal-meta">
        <span>Complexity: <strong>${meal.complexity.toUpperCase()}</strong></span>
        <span>Base Cost: <strong>₹${meal.cost.toFixed(0)}</strong></span>
      </div>
    `;
    mealsContainer.appendChild(mealEl);
  });
}

function renderGroceryList() {
  groceryContainer.innerHTML = "";
  
  if (currentIngredients.length === 0) {
    groceryContainer.innerHTML = `<p class="text-muted">No items yet.</p>`;
    return;
  }

  const ul = document.createElement("ul");
  ul.style.listStyleType = "none";

  currentIngredients.forEach((ing, index) => {
    const li = document.createElement("li");
    li.className = "grocery-item";

    const diet = dietSelect.value;
    const hasAlt = (diet === "veg" && ing.vegAlternative) ||
                   (diet === "jain-friendly" && ing.jainAlternative) ||
                   (diet === "vegan" && ing.veganAlternative) ||
                   (!ing.isSubstituted && (ing.vegAlternative || ing.jainAlternative || ing.veganAlternative));

    let subBtnHtml = "";
    if (hasAlt) {
      subBtnHtml = `<button type="button" class="sub-btn" onclick="applySubstitution(${index})">
        ${ing.isSubstituted ? "Revert" : "Substitute"}
      </button>`;
    }

    li.innerHTML = `
      <div class="grocery-left">
        <input type="checkbox" id="ing-${index}" onchange="toggleGroceryCheck(this)">
        <label for="ing-${index}" class="grocery-name">${ing.name} (₹${ing.cost.toFixed(0)})</label>
      </div>
      ${subBtnHtml}
    `;
    ul.appendChild(li);
  });

  groceryContainer.appendChild(ul);
}

function toggleGroceryCheck(checkbox) {
  const item = checkbox.closest(".grocery-item");
  if (checkbox.checked) {
    item.classList.add("checked");
  } else {
    item.classList.remove("checked");
  }
}

function applySubstitution(index) {
  const ing = currentIngredients[index];
  const diet = dietSelect.value;

  if (ing.isSubstituted) {
    ing.name = ing.originalName;
    ing.cost = ing.originalCost;
    ing.isSubstituted = false;
    ing.subType = null;
  } else {
    let replacement = null;
    let type = "";
    
    if (diet === "jain-friendly" && ing.jainAlternative) {
      replacement = ing.jainAlternative;
      type = "Jain";
    } else if (diet === "veg" && ing.vegAlternative) {
      replacement = ing.vegAlternative;
      type = "Veg";
    } else if (ing.veganAlternative) {
      replacement = ing.veganAlternative;
      type = "Vegan";
    } else {
      replacement = ing.vegAlternative || ing.jainAlternative || ing.veganAlternative;
      type = ing.vegAlternative ? "Veg" : ing.jainAlternative ? "Jain" : "Vegan";
    }

    if (replacement) {
      ing.name = `${replacement} (${type} Alt)`;
      ing.cost = +(ing.originalCost * 0.85).toFixed(0);
      ing.isSubstituted = true;
      ing.subType = type;
    }
  }

  renderGroceryList();
  updateBudgetFeedback();
}

function updateBudgetFeedback() {
  if (currentIngredients.length === 0) {
    budgetStatusBox.className = "budget-status-box";
    budgetStatusBox.innerHTML = "";
    return;
  }

  const totalCost = currentIngredients.reduce((sum, ing) => sum + ing.cost, 0);
  const diff = targetBudget - totalCost;

  if (diff >= 0) {
    budgetStatusBox.className = "budget-status-box status-ok";
    budgetStatusBox.innerHTML = `
      <strong>Budget Feasible!</strong> Daily Total: ₹${totalCost.toFixed(0)}. 
      You have ₹${diff.toFixed(0)} remaining.
    `;
  } else {
    budgetStatusBox.className = "budget-status-box status-warn";
    budgetStatusBox.innerHTML = `
      <strong>Budget Warning!</strong> Daily Total: ₹${totalCost.toFixed(0)} (Exceeds by ₹${Math.abs(diff).toFixed(0)}). 
      💡 <em>Tip: Use the "Substitute" button on premium ingredients for cheaper options.</em>
    `;
  }
}

function renderKitchenGuide() {
  guideContainer.innerHTML = "";
  if (currentPlan.length === 0) {
    guideContainer.innerHTML = `<p class="text-muted">Generate a plan to see cooking steps.</p>`;
    return;
  }

  const div = document.createElement("div");
  let stepIndex = 1;

  currentPlan.forEach(meal => {
    const mealTitle = document.createElement("h4");
    mealTitle.style.marginTop = "0.8rem";
    mealTitle.style.color = "var(--accent-purple)";
    mealTitle.textContent = meal.name;
    div.appendChild(mealTitle);

    meal.steps.forEach(step => {
      const stepEl = document.createElement("div");
      stepEl.className = "guide-step";
      stepEl.innerHTML = `
        <div class="step-num">${stepIndex++}</div>
        <div class="step-content">${step}</div>
      `;
      div.appendChild(stepEl);
    });
  });

  guideContainer.appendChild(div);
}

window.addEventListener("DOMContentLoaded", () => {
  generateMealPlan();
});
