import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";




inquirer.registerPrompt("date",DatePrompt);

export async function promptNewSpending(){
    return await inquirer.prompt(nuevoGasto);
}
 const nuevoGasto=[
    {
        type:"input",
        name:"gasto",
        message:"Agregar un nuevo gasto:"
    },
    {
        type:"list",
        name:"categpria",
        message:"Seleccione una categoria",
        choices:["Combustible","Supermercado","farmacia","Alquler","Puchos","Gastos diarios"]
    },
 ]