import inquirer from "inquirer"
let todo1: any = [];
//let todo: string[] = [];
let condition: boolean = true;
while(condition){

let addtaskans: any = await inquirer.prompt([
    {
        name: "todo",
type: "input",
message: "Sir what item do u want to Add please"

},
{
    name: "addmoreitem",
type: "confirm",
message: "Sir want to continue feed more  todo item? y/n",

default: "false"
}

]);
todo1.push([addtaskans.todo]);
console.log("so for todo list Sir");
console.log(todo1);
condition = addtaskans.addmoreitem;
//console.log(addtaskans.todo);
//if(ans.admoreitem!=='Y') continue;
//console.log(ans);
}