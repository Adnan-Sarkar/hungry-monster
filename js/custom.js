

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", function () {
    const searchMeal = document.getElementById("search-meal");
    const searchMealInput = searchMeal.value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMealInput}`)
    .then(res => res.json())
    .then(data => {
        displayMealItem(data.meals);
    })
    .catch(err => {
        
    })
    searchMeal.value = '';
    const mealItemsSection = document.getElementById("meal-items-section");
    mealItemsSection.innerHTML = '';


})

const displayMealItem = meal => {

    const mealItemsSection = document.getElementById("meal-items-section");
    meal.forEach(mealItem => {
        const mealItemDiv = document.createElement("div");
        mealItemDiv.className = "meal-item";
        
        const mealItemContent = 
                `
                    <div onclick = "displayMealDetails('${mealItem.idMeal}')">
                        <img src = "${mealItem.strMealThumb}">
                        <h3>${mealItem.strMeal}</h3>
                    </div>
                `
        mealItemDiv.innerHTML = mealItemContent;
        mealItemsSection.appendChild(mealItemDiv);
        
    });
}


const displayMealDetails = mealDetails => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealDetails}`;
    console.log("lol");
    fetch(url)
        .then(res => res.json())
        .then(data => {

            // console.log(data.meals[0]);
            
            // const ingredients = Object.keys(data.meals[0]);
            
            // const ingredientsArray = ingredients.map()
            // console.log(ingredientsArray);
            

            const ingredients =
            `<div class = "meal-details-wrapper">
                <img src = "${data.meals[0].strMealThumb}">
                <h1>${data.meals[0].strMeal}</h1>
                <li><i class="fa fa-check" aria-hidden="true"></i> ${data.meals[0].strIngredient1}</li>
                <li><i class="fa fa-check" aria-hidden="true"></i> ${data.meals[0].strIngredient2}</li>
                <li><i class="fa fa-check" aria-hidden="true"></i> ${data.meals[0].strIngredient3}</li>
                <li><i class="fa fa-check" aria-hidden="true"></i> ${data.meals[0].strIngredient4}</li>
                <li><i class="fa fa-check" aria-hidden="true"></i> ${data.meals[0].strIngredient5}</li>
                <li><i class="fa fa-check" aria-hidden="true"></i> ${data.meals[0].strIngredient6}</li>
                <li><i class="fa fa-check" aria-hidden="true"></i> ${data.meals[0].strIngredient7}</li>
                <li><i class="fa fa-check" aria-hidden="true"></i> ${data.meals[0].strIngredient8}</li>
                <li><i class="fa fa-check" aria-hidden="true"></i> ${data.meals[0].strIngredient9}</li>
                <li><i class="fa fa-check" aria-hidden="true"></i> ${data.meals[0].strIngredient10}</li>
            </div>
            `
            const mealDetailsSection = document.getElementById("meal-details");
            const mealDetailsDiv = document.createElement("div");
            mealDetailsDiv.innerHTML = ingredients;
            mealDetailsSection.appendChild(mealDetailsDiv);

        })
}