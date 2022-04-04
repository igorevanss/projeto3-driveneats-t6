// food selection
let drivenEats
let drivenDrinks
let drivenDessert
let orderedFood

function selectedFood(clickedFood) {
  drivenEats = document.querySelector('.selected1')
  if (drivenEats !== null) {
    drivenEats.classList.remove('selected1')
  }
  clickedFood.classList.add('selected1')
  drivenEats = document.querySelector('.selected1')
  allSelected()
}

function selectedDrink(clickedFood) {
  drivenDrinks = document.querySelector('.selected2')
  if (drivenDrinks !== null) {
    drivenDrinks.classList.remove('selected2')
  }
  clickedFood.classList.add('selected2')
  drivenDrinks = document.querySelector('.selected2')
  allSelected()
}

function selectedDessert(clickedFood) {
  drivenDessert = document.querySelector('.selected3')
  if (drivenDessert !== null) {
    drivenDessert.classList.remove('selected3')
  }
  clickedFood.classList.add('selected3')
  drivenDessert = document.querySelector('.selected3')
  allSelected()
}

// Food ordering can be done
function allSelected() {
  if (
    drivenEats !== undefined &&
    drivenDrinks !== undefined &&
    drivenDessert !== undefined
  ) {
    orderedFood = document.querySelector('.arrounded')
    orderedFood.classList.add('order-made')
  }
}
