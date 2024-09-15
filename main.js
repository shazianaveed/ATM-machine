#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var totalBalance = 10000; // Dollar
var pinNumber = 28382;
var pinEntered = await inquirer_1.default.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
// 280388 === 28382 - false
if (pinEntered.pin == pinNumber) {
}
var atmQuestion = await inquirer_1.default.prompt([
    {
        name: "accountType",
        message: "select your account type",
        type: "list",
        choices: ["Current Account", "Saving Account",]
    },
    {
        name: "transMethod",
        message: "Select your transaction method",
        type: "list",
        choices: ["Cash withdrawl",
            "Fast cash"]
    }
]);
if (atmQuestion.transMethod == "Cash withdrawl") {
    var cashwithdrawAmount = await inquirer_1.default.prompt([
        {
            name: "withdrawl",
            message: "Enter the amount you want to withdraw",
            type: "number",
        }
    ]);
    // Greater than or equals to operator
    if (totalBalance >= cashwithdrawAmount.withdrawl) {
        totalBalance -= cashwithdrawAmount.withdrawl;
        //  totalBalance -totalBalance . cashwithdrawAmount
        console.log("Your Total Balance is : ${totalBalance}");
    }
    else {
        console.log("Insufficent  Balance");
    }
}
else {
    var fastCashAmount = await inquirer_1.default.prompt([
        {
            name: "fastCash",
            message: "Select the numberyou want to withdraw",
            type: "list",
            choices: [
                "1000",
                "3000",
                "5000"
            ]
        }
    ]);
    if (totalBalance >= fastCashAmount.fastCash) {
        totalBalance -= fastCashAmount.fastCash;
        // totalBalance -totalBalance .cashwithdrawAmount
        console.log("your total Balance is: $(totalBalance) ");
    }
    else {
        console.log("Insufficient Balance");
    }
}
