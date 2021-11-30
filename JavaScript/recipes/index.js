import {addIngredient, recipe} from "./ediens.js";

addIngredient({
    name: 'milk',
    type: 'Pour',
    qty: '1',
    unit: 'cup'
});
addIngredient({
    name: 'sugar',
    type: 'Add',
    qty: '100',
    unit: 'g'
});

console.log(recipe())