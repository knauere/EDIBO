import {addIngredient, food, recipe} from "./ediens";

beforeEach(() => {
	food.splice(0);
});

test('There is no ingredients', () => {
	expect(food.length).toBe(0);
});

test('Added one ingredient', () => {
	addIngredient({
		name: 'milk',
		type: 'Pour',
		qty: '1',
		unit: 'cup'
	});
	expect(food.length).toBe(1);
});

test('Added two ingredients', () => {
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
	expect(food.length).toBe(2);
});
test('Output recipe', () => {
	addIngredient('milk', 'pour', '1', 'cup');
	expect(recipe()).toBe('Add 100g of sugar');
});
test('Output long recipe', () => {
	addIngredient({name:'sugar', daudzums: 100, mervienma: 'g'});
	addIngredient({name:'milk', daudzums: 1, mervienma: 'cup'});
	expect(recipe()).toBe('Add 100g of sugar, Pour 1 cup of milk');
});
