'use strict';
import inquirer from "inquirer";

inquirer.prompt([
	// ask main first question
	{
		type: 'list',
		name: 'main',
		// main first question
		message: 'What do you want to do?',

		// OPTIONS //
		choices: [
			// option 1
			'Add new Todo',
			]
	},
	//sub question list
	{
		type: 'list',
		// name of this thing
		name: 'task-options',
		// show user list of possible tasks
		message: 'these are task options',
		choices: [
			'list1: eat breakfast',
			'list2: go for a walk'
		]
	},


])