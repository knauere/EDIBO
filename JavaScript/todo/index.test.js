import {pieliktGrāmatu, plaukts} from "./index";

test('todo saraksta garums ir 0', ()=>{
	expect(todo.length).toBe(0);
})

test('i add todo buy milk i expect todo length to be 1', ()=> {
	addTodo('buy milk');
	expect(todo.length).toBe(1);
});

