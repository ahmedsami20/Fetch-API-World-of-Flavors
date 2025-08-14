async function basicFetch() {
  const output = document.getElementById("basicOutput");
  output.innerHTML = "<p>Loading...</p>";

  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();

    // Build recipe cards dynamically
    output.innerHTML = `
      <div class="success">Request Successful!</div>
      <h3>Response Data:</h3>
      <div class="recipes-container">
        ${data.recipes.slice(0, 2).map(recipe => `
          <div class="recipe-card">
            <h2>${recipe.name}</h2>
            <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
            <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
            <h4>Ingredients:</h4>
            <ul>
              ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join("")}
            </ul>
          </div>
        `).join("")}
      </div>
    `;
  } catch (err) {
    output.innerHTML = `<p style="color:red;">Error fetching data!</p>`;
    console.error(err);
  }
}