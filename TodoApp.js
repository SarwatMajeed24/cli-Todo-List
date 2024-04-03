#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.yellowBright("\t ************************* "));
console.log(chalk.bold.greenBright("\t  WELCOME TO MY TODOS APP "));
console.log(chalk.bold.yellowBright("\t ************************* "));
let todoList = [];
let condition = true;
async function createTodoList(todoList) {
    while (condition) {
        let options = await inquirer.prompt({
            type: "list",
            message: (chalk.bold.red("Which task you want to perform in my Todo List?\n\tSelect the options:")),
            name: "select",
            choices: ["add", "update", "view", "delete", "exit"],
        });
        if (options.select == "add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: (chalk.blueBright("What item you want to add in my Todo List?")),
                name: "add",
            });
            todoList.push(addTodo.add);
            todoList.forEach(arrList => console.log(arrList));
            console.log(chalk.bold.magentaBright.underline("\tItem Added Successfully!!!\n"));
        }
        if (options.select == "update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                name: "update",
                message: (chalk.yellow("Which item you want to update in my todo list?")),
                choices: todoList.map(task => task),
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: (chalk.blueBright("Add updated item in the list:")),
                name: "add",
            });
            let newTodoList = todoList.filter(val => val !== updateTodo.update);
            todoList = [...newTodoList, addTodo.add];
            todoList.forEach(arrList => (chalk.green(console.log(arrList))));
            console.log(chalk.bold.magentaBright.underline("\tItem Updated Successfully!!!\n"));
        }
        if (options.select == "view") {
            console.log(chalk.bold.yellowBright("\t-------------"));
            console.log(chalk.bold.greenBright("\tMy TO DO LIST"));
            console.log(chalk.bold.yellowBright("\t--------------"));
            todoList.forEach(arrList => console.log(chalk.bold.greenBright(`* ${arrList}`)));
            console.log(chalk.bold.magentaBright.underline("\tList Viewed Successfully!!!\n"));
        }
        if (options.select == "delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                name: "delete",
                message: (chalk.greenBright("Which item you want to delete in my todo list?")),
                choices: todoList.map(task => task),
            });
            let newTodoList = todoList.filter(val => val !== deleteTodo.delete);
            todoList = [...newTodoList];
            todoList.forEach(arrList => console.log(arrList));
            console.log(chalk.bold.magentaBright.underline("\tItem deleted Successfully!!!\n"));
        }
        if (options.select == "exit") {
            console.log(chalk.bold.green.underline("\t********************************"));
            console.log(chalk.bold.yellowBright.underline("\t\Thank you for using my todo List"));
            console.log(chalk.bold.green.underline("\t********************************"));
            break;
        }
    }
}
;
createTodoList(todoList);
