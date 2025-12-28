const intro = document.getElementById("introScreen");

if (intro) {
  intro.addEventListener("animationend", (e) => {
    if (e.animationName === "holdScreen") {
      showScreen("addScreen");
    }
  });
}
const MAX_RECIPES = 8; // you can change this number

/**************** STORAGE ****************/
const STORAGE_KEY = "recipesData";
let recipes = [];

/**************** DOM ****************/
const screens = document.querySelectorAll(".screen");
const navButtons = document.querySelectorAll(".nav-btn");

const allDiv = document.getElementById("allRecipes");
const favDiv = document.getElementById("favoriteRecipes");
const recentDiv = document.getElementById("recentRecipes");

const form = document.getElementById("recipeForm");
const submitBtn = document.getElementById("submitBtn");

const nameInput = document.getElementById("name");
const ingredientsInput = document.getElementById("ingredients");
const timeInput = document.getElementById("time");
const spinBtn = document.getElementById("spinBtn");

/**************** IMAGES ****************/
const recipeImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoeleQaHJUzMLQb-E56lTPo_g8dkrFENz8kA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuprCIXXxx4z-zKXrSkVNwv5Fj5s3Adiq3Vw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSocipaeJ5HLMeMIIWDWXB6V-WBeB5pcNYrGA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE9NcpgfixMvF6hzhMnOGlLG5l6TgcQR-APQ&s"
];

const getRandomImage = () =>
  recipeImages[Math.floor(Math.random() * recipeImages.length)];

/**************** STORAGE HELPERS ****************/
function loadData() {
  recipes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
}

function updateAndRender() {
  saveData();
  render();
}

/**************** FORM VALIDATION ****************/
const touched = {
  name: false,
  ingredients: false,
  time: false,
  difficulty: false,
  category: false
};

// Mark text fields as touched while typing
nameInput.addEventListener("input", () => {
  touched.name = true;
  validateForm();
});

ingredientsInput.addEventListener("input", () => {
  touched.ingredients = true;
  validateForm();
});

timeInput.addEventListener("input", () => {
  touched.time = true;
  validateForm();
});

// Mark radio buttons as touched
document.querySelectorAll("input[name='difficulty']").forEach(radio =>
  radio.addEventListener("change", () => {
    touched.difficulty = true;
    validateForm();
  })
);

// Mark checkboxes as touched
document.querySelectorAll("input[name='category']").forEach(cb =>
  cb.addEventListener("change", () => {
    touched.category = true;
    validateForm();
  })
);

function validateForm() {
  let valid = true;

  const errors = {
    name: document.getElementById("nameError"),
    ingredients: document.getElementById("ingredientsError"),
    time: document.getElementById("timeError"),
    difficulty: document.getElementById("difficultyError"),
    category: document.getElementById("categoryError")
  };

  // Clear previous errors
  Object.values(errors).forEach(e => (e.textContent = ""));

  if (touched.name && nameInput.value.trim().length < 3) {
    errors.name.textContent = "Min 3 characters required";
    valid = false;
  }

  if (touched.ingredients && !ingredientsInput.value.trim()) {
    errors.ingredients.textContent = "Ingredients required";
    valid = false;
  }

  if (touched.time && (!timeInput.value || timeInput.value < 5)) {
    errors.time.textContent = "Minimum 5 minutes";
    valid = false;
  }

  if (
    touched.difficulty &&
    !document.querySelector("input[name='difficulty']:checked")
  ) {
    errors.difficulty.textContent = "Select difficulty";
    valid = false;
  }

  if (
    touched.category &&
    !document.querySelectorAll("input[name='category']:checked").length
  ) {
    errors.category.textContent = "Select at least one category";
    valid = false;
  }

  submitBtn.disabled = !valid;
}



/**************** CREATE RECIPE ****************/
function createRecipe() {
  return {
    id: Date.now(),
    name: nameInput.value.trim(),
    ingredients: ingredientsInput.value.trim(),
    time: Number(timeInput.value),
    difficulty: document.querySelector("input[name='difficulty']:checked").value,
    categories: [...document.querySelectorAll("input[name='category']:checked")].map(c => c.value),
    image: getRandomImage(),
    isFavorite: false,
    lastCooked: 0
  };
}

/**************** SUBMIT ****************/
form.addEventListener("submit", e => {
  e.preventDefault();
  if (submitBtn.disabled) return;

  if (recipes.length >= MAX_RECIPES) {
    alert(`You can add only ${MAX_RECIPES} recipes.`);
    return;
  }

  const newRecipe = createRecipe();

  const isExactDuplicate = recipes.some(r =>
    r.name.toLowerCase() === newRecipe.name.toLowerCase() &&
    r.time === newRecipe.time &&
    r.difficulty === newRecipe.difficulty &&
    r.ingredients.toLowerCase() === newRecipe.ingredients.toLowerCase() &&
    JSON.stringify([...r.categories].sort()) ===
      JSON.stringify([...newRecipe.categories].sort())
  );

  if (isExactDuplicate) {
    alert("This exact recipe already exists!");
    return;
  }

  recipes.push(newRecipe);
  updateAndRender();

  form.reset();
  document
    .querySelectorAll("input[type=radio], input[type=checkbox]")
    .forEach(i => (i.checked = false));
  submitBtn.disabled = true;
});

/**************** CREATE CARD (createElement ONLY) ****************/
function createCard(r, section = "all") {
  const card = document.createElement("div");
  card.className = "recipe-card";
  card.dataset.id = r.id;

  const img = document.createElement("img");
  img.src = r.image;
  img.className = "card-img";

  const body = document.createElement("div");
  body.className = "card-body";

  const titleRow = document.createElement("div");
  titleRow.className = "card-title-row";

  const title = document.createElement("h4");
  title.textContent = r.name;

  const icons = document.createElement("div");

  // ✅ Like button (always visible)
  const favIcon = document.createElement("span");
  favIcon.className = "icon";
  favIcon.dataset.action = "fav";
  favIcon.textContent = r.isFavorite ? "❤️" : "🤍";

  // ✅ Delete button (always visible)
  const deleteIcon = document.createElement("span");
  deleteIcon.className = "icon";
  deleteIcon.dataset.action = "delete";
  deleteIcon.textContent = "🗑";

  icons.append(favIcon, deleteIcon);
  titleRow.append(title, icons);

  const time = document.createElement("p");
  time.innerHTML = `<strong>Time:</strong> ${r.time} min`;

  const difficulty = document.createElement("p");
  difficulty.innerHTML = `<strong>Difficulty:</strong> ${r.difficulty}`;

  const category = document.createElement("p");
  category.innerHTML = `<strong>Category:</strong> ${r.categories.join(", ")}`;

  body.append(titleRow, time, difficulty, category);

  // ❌ Cook button ONLY in All Recipes
  if (section === "all") {
    const cookBtn = document.createElement("button");
    cookBtn.className = "btn-cook";
    cookBtn.dataset.action = "cook";
    cookBtn.textContent = "Cook This!";
    body.append(cookBtn);
  }

  card.append(img, body);
  return card;
}

/**************** RENDER ****************/
function render() {
  allDiv.innerHTML = "";
  favDiv.innerHTML = "";
  recentDiv.innerHTML = "";

  const allEmpty = document.getElementById("allEmptyMsg");
  const favEmpty = document.getElementById("favEmptyMsg");
  const recentEmpty = document.getElementById("recentEmptyMsg");

  // ===== ALL RECIPES =====
  recipes.forEach(r => allDiv.appendChild(createCard(r,"all")));
  allEmpty.style.display = recipes.length === 0 ? "block" : "none";

  // ===== FAVORITES =====
  const favorites = recipes.filter(r => r.isFavorite);
  favorites.forEach(r => favDiv.appendChild(createCard(r,"fav")));
  favEmpty.style.display = favorites.length === 0 ? "block" : "none";

  // ===== RECENTLY COOKED =====
  const recent = recipes
    .filter(r => r.lastCooked)
    .sort((a, b) => b.lastCooked - a.lastCooked)
    .slice(0, 5);

  recent.forEach(r => recentDiv.appendChild(createCard(r,"recent")));
  recentEmpty.style.display = recent.length === 0 ? "block" : "none";
}


/**************** EVENT DELEGATION ****************/
[allDiv, favDiv, recentDiv].forEach(container =>
  container.addEventListener("click", handleActions)
);

function handleActions(e) {
  const action = e.target.dataset.action;
  if (!action) return;

  const card = e.target.closest(".recipe-card");
  if (!card) return;

  const recipeId = Number(card.dataset.id);
  const recipe = recipes.find(r => r.id === recipeId);
  if (!recipe) return;

  const isFavSection = e.currentTarget === favDiv;
  const isRecentSection = e.currentTarget === recentDiv;

  switch (action) {
    case "fav":
      recipe.isFavorite = !recipe.isFavorite;
      break;

    case "cook":
      recipe.lastCooked = Date.now();
      break;

    case "delete":
      if (isFavSection) {
        // ✅ remove only from favorites
        recipe.isFavorite = false;
      } 
      else if (isRecentSection) {
        // ✅ remove only from recent
        recipe.lastCooked = 0;
      } 
      else {
        // ❌ delete from ALL (only in All Recipes)
        if (!confirm("Delete this recipe permanently?")) return;
        recipes = recipes.filter(r => r.id !== recipeId);
      }
      break;
  }

  updateAndRender();
}


function highlight(card) {
  requestAnimationFrame(() => {
    card.classList.add("selected");
    setTimeout(() => card.classList.remove("selected"), 600);
  });
}

/**************** SPIN (LATEST 5 → RANDOM 1) ****************/
spinBtn.addEventListener("click", () => {
  if (!recipes.length) return alert("Add a recipe first!");

  const latestFive = [...recipes]
    .sort((a, b) => b.id - a.id)
    .slice(0, 5);

  const random = latestFive[Math.floor(Math.random() * latestFive.length)];
  random.lastCooked = Date.now();

  updateAndRender();
  showScreen("recentScreen");
});

/**************** NAVIGATION ****************/
function showScreen(id) {
  screens.forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");

  navButtons.forEach(b => b.classList.remove("active"));
  document.querySelector(`[data-screen="${id}"]`).classList.add("active");
  if (id === "addScreen") {
    document.body.classList.remove("blur-bg"); // ❌ NO blur
  } else {
    document.body.classList.add("blur-bg");    // ✅ blur
  }
}

navButtons.forEach(b => b.onclick = () => showScreen(b.dataset.screen));

/**************** INIT ****************/
loadData();
render();
validateForm();
