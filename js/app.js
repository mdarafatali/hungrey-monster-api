
function foodNames(){
    const receivedValue=document.getElementById("innerSearchValue").value
    fetch( `https://www.themealdb.com/api/json/v1/1/search.php?s=${receivedValue}`)
    .then(res=>res.json())
    .then(data=>{
    searchFood(data.meals)
    })
}


document.getElementById("search-button").addEventListener("click",function(){
    const receivedValue=document.getElementById("innerSearchValue").value
    if(receivedValue === ''){
        alert("Meal Can not be Blank");
    }

    else{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${receivedValue}`)
        .then(res=> res.json())
        .then(data=>{
        itemsDisplay(data.meals)
    })
    }
   
})


const itemsDisplay=items=>{
    const foodDiv= document.getElementById("food-div")
    items.forEach(food => {
        const itemsName=document.createElement('div')
        itemsName.className='food-items'
        const foodDetails=`
        <div class="food-image"><img src="${food.strMealThumb}"></div>
        <p class="food-name">${food.strMeal}</p>
        <button class = "allButton" onclick="foodNames()">Details</button>
        `
        itemsName.innerHTML=foodDetails;
        foodDiv.appendChild(itemsName)
    });
}
const searchFood=itemInGradient=>{
    const InGradients=document.getElementById("food-items")
    itemInGradient.forEach(itemInGradient => {
        const foodDiv=document.createElement('div')
        foodDiv.className='Ingredient'
        InGradients.innerHTML=`
        <div class="ingredientImage">
        <img src="${itemInGradient.strMealThumb}">
        
        <h3 class="food-name">${itemInGradient.strMeal}</h3>
        <h3>Ingredients</h3>
        <ul class="gradientName">
        <li>${itemInGradient.strIngredient1}</li>
        <li>${itemInGradient.strIngredient2}</li>
        <li>${itemInGradient.strIngredient3}</li>
        <li>${itemInGradient.strIngredient4}</li>
        <li>${itemInGradient.strIngredient5}</li>
        <li>${itemInGradient.strIngredient6}</li>
        <li>${itemInGradient.strIngredient7}</li>
        <li>${itemInGradient.strIngredient8}</li>
        </ul>
        </div>
        `
        InGradients.appendChild(foodDiv)
    });
}