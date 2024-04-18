import {get, save} from "./fileMetthods.js";
import inquirer from "inquirer";
import { promptNewSpending } from "../aplicacionCLI/userProots.js";

const main = async()=>{
    let run= true;
    while(run){
        const action = await inquirer.prompt([
            {
                type:"list",
                name:"chosen",
                message:"Por favor elija una opcion:",
                choices:[
                    {valie:1, name:"Ver todos los gastos"},
                    {value:2, name:" Agregar un nuevo gasto"},
                    {valie:3, name:"Salir"}
                ]
            }
        ])
        switch(action.chosen){
            case 1:
                await getAllSpending();
                break;
            case 2:
                await createNewSpending();
                break;    
            case 99:
                run = false;
                break;   
            default:
                run= false;
                break;     
        }
    }
    console.log("Muchas gracias por usar ControlSpending, Adios!!")

    
};
main();

async function createNewSpending(){
    console.log("Agregando un nuevo gasto..");
    const newSpendingData= await promptNewSpending();
    console.log("Creando:", newSpendingData);

    const currenSpending= await get("spending");
    currenSpending.push(newSpendingData);
    await save("spending", currenSpending);
}

async function getAllSpending(){
    const currenSpending=await get("spending");
    console.log(currenSpending);
}