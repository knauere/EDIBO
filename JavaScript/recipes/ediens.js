// why let only works for array?
export let food = [];
export const addIngredient = (i) => food.push(i);

// addIngredient('milk', 'Pour','1','cup')
// addIngredient('sugar', 'Add', '100', 'g')
// addIngredient('flour', 'Add', '200', 'g')

export const recipe = () => {
    return food.map(i => {
        return i.type + i.qty + i.unit + 'of' + i.name

    })
}

// Nested ingredient objects within food object //

// food object {milk, sugar}
// food = [
//     // that contains milk object: {w/ parameters}
//     {
//     name: 'milk',
//     type: 'Pour',
//     qty: '1',
//     unit: 'cup'
//     },
//     // that contains sugar object: {w/ parameters}
//     {
//     name: 'sugar',
//     type: 'Add',
//     qty: '100',
//     unit: 'g'
//     },
// ]
    // print out milk recipe



// Separate action object and ingredient object //

// object type - pour or add?
const type = {
    'p': 'Pour',
    'a': 'Add'
}

// object sugar
const sugar = {
    name: 'sugar',
    //type.a ?
    type: 'Pour',
    quantity: '100',
    unit: 'g'
}

    // print out sugar recipe
    console.log(type.a, sugar.quantity, sugar.unit, 'of', sugar.name)



//can type parameters be defined before using it for object?//
/*
const type = {
    'p': 'Pour',
    'a': 'Add'
}
 */

/*
// prints type with string ingredient name
console.log(type.a + ' cukuru')
// prints type with object name parameter
console.log(type.a +' '+ milk.name)
*/


// sastāvdaļas ar mērvienībām  {tips, mervienms, daudzums} **
// finkcija kas atgriež recepti
// funckija kas atgriezh kaloritāti piens 150g  => pienam 50kcal => 75kcal
// https://cdn.ilovefreesoftware.com/wp-content/uploads/2018/07/online_ascii_table_generator-featured-1.png
