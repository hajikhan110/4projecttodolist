#! /usr/bin/env node
import inquirer from "inquirer"
let todo1: any = [];
//let todo: string[] = [];
let condition: string = "ok";
while(condition !== "n"){

let addtaskans: any = await inquirer.prompt([
    {
        name: "todo",
type: "input",
message: "Sir what item do u want to Add please if not type n"

}
// ,
// {
//     name: "addmoreitem",
// type: "confirm",
// message: "Sir want to continue feed more  todo item? y/n",

// default: "false"
// }

]);
if(addtaskans.todo=="n")
{
    console.log("ok bye Sir");
    console.log("so for todo list Sir");
console.log(todo1);
    break;
}
todo1.push([addtaskans.todo]);
console.log("so for todo list Sir");
console.log(todo1);
condition = addtaskans.addmoreitem;
condition = addtaskans.todo;
//console.log(addtaskans.todo);
//if(ans.admoreitem!=='Y') continue;
//console.log(ans);
}