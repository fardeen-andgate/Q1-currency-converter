#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk";
import currencyrates from "./currency data/currencydata.js";
import { converter } from "./showcase/converter.js";



converter();




  const answer: {
    from: "PKR"| "USD" | "GBP" | "EUR" | "INR" | "AUD" | "CAD" | "JPY" | "CNY" | "AED" | "SAR",
    to: "PKR"| "USD" | "GBP" | "EUR" | "INR" | "AUD" | "CAD" | "JPY" | "CNY" | "AED" | "SAR",
    amount: number
  } = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP", "EUR", "INR", "AUD", "CAD", "JPY", "CNY", "AED", "SAR"],
        message: (chalk.cyanBright("Select your currency: "))
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP", "EUR", "INR", "AUD", "CAD", "JPY", "CNY", "AED", "SAR"],
        message: (chalk.cyanBright("Select your convertion currency: "))
    },
    {
        type: "number",
        name: "amount",
        message: (chalk.cyanBright("Enter your convertion amount: "))
    }
  ]);

  const {from, to, amount} = answer;

  if(from && to && amount) {
    let result = currencyrates[from][to] * amount;
    console.log(`Your convertion from ${from} to ${to} is ${result}`)
  } else {
    console.log("Invalid inputs")
  }