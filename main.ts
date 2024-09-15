#! /usr/bin/env node
import inquirer from "inquirer";

let totalBalance: number =10000 // Dollar
let pinNumber: number = 28382

let pinEntered = await inquirer.prompt(
     [
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
      }
   ]
)
// 280388 === 28382 - false
if(pinEntered.pin == pinNumber) {

}

   let atmQuestion = await inquirer.prompt(
        [
            {
            name:"accountType",
            message:"select your account type" ,
            type:"list" ,
            choices:["Current Account", "Saving Account",] 
            },
             {
                name:"transMethod",
            message:"Select your transaction method",
            type: "list",
            choices:["Cash withdrawl",
                      "Fast cash" ]
            }
          ]
        );
if(atmQuestion.transMethod== "Cash withdrawl")
     {
         let cashwithdrawAmount =await inquirer.prompt([
            {
                name:"withdrawl",
                message:"Enter the amount you want to withdraw",
                type:"number",

     }
    ]);
    // Greater than or equals to operator
    if (totalBalance >= cashwithdrawAmount.withdrawl)
        {
             totalBalance -= cashwithdrawAmount.withdrawl 
            //  totalBalance -totalBalance . cashwithdrawAmount
            console.log("Your Total Balance is : ${totalBalance}")
        }
        else {
            console.log("Insufficent  Balance")
         }
     } 
     else{
        let fastCashAmount = await inquirer.prompt(
            [
                {
                    name:"fastCash",
                    message:"Select the numberyou want to withdraw",
                    type:"list",
                    choices:[
                        "1000",
                        "3000",
                        "5000"
                    ]
                 }
                ]
            ) 
            if(totalBalance >= fastCashAmount.fastCash ){
                totalBalance-= fastCashAmount.fastCash
                // totalBalance -totalBalance .cashwithdrawAmount
                console.log("your total Balance is: $(totalBalance) ")
            }
            else{
                console.log("Insufficient Balance");

            }
     }
    









