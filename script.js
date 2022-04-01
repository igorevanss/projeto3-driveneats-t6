// food selection
function selectedFood(clickedFood) {
  const drivenEats = document.querySelector('.selected1')
  if (drivenEats !== null) {
    drivenEats.classList.remove('selected1')
  } //else {
  clickedFood.classList.add('selected1')
  // }
}

function selectedDrink(clickedFood) {
  const drivenDrinks = document.querySelector('.selected2')
  if (drivenDrinks !== null) {
    drivenDrinks.classList.remove('selected2')
  } //else {
  clickedFood.classList.add('selected2')
  // }
}

function selectedDessert(clickedFood) {
  const drivenDessert = document.querySelector('.selected3')
  if (drivenDessert !== null) {
    drivenDessert.classList.remove('selected3')
  } //else {
  clickedFood.classList.add('selected3')
  // }
}

// Food ordering can be done
function allSelected(orderFood) {
  const orderedFood = document.querySelector('.order-made')
  if (drivenEats !== null && drivenDrinks !== null && drivenDessert !== null) {
    orderedFood.classList.remove('order-made')
  }
  orderFood.classList.add('order-made')
}
