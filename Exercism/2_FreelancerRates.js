"use strict";
/*
Instructions
In this exercise you will be writing code to help a freelancer communicate with his clients about the prices of certain projects. You will write a few utility functions to quickly calculate the costs for the clients.

1. Calculate the day rate given an hourly rate
A client contacts the freelancer to enquire about his rates. The freelancer explains that he works 8 hours a day. However, the freelancer knows only his hourly rates for the project. Help him estimate a day rate given an hourly rate.

dayRate(89);
// => 712
The day rate does not need to be rounded or changed to a "fixed" precision.

2. Calculate the number of workdays given a fixed budget
Another day, a project manager offers the freelancer to work on a project with a fixed budget. Given the fixed budget and the freelancer's hourly rate, help him calculate the number of days he would work until the budget is exhausted. The result must be rounded down to the nearest whole number.

daysInBudget(20000, 89);
// => 28
3. Calculate the discounted rate for large projects
Often, the freelancer's clients hire him for projects spanning over multiple months. In these cases, the freelancer decides to offer a discount for every full month, and the remaining days are billed at day rate. Every month has 22 billable days. Help him estimate his cost for such projects, given an hourly rate, the number of days the project spans, and a monthly discount rate. The discount is always passed as a number, where 42% becomes 0.42. The result must be rounded up to the nearest whole number.

priceWithMonthlyDiscount(89, 230, 0.42);
// => 97972
*/

// 1
export const dayRate = function (hourlyRate) {
  return hourlyRate * 8;
};
dayRate(89);
console.log(dayRate(89));

// 2
export const daysInBudget = function (budget, hourlyRate) {
  return Math.round(budget / hourlyRate / 8);
};
daysInBudget(20000, 89);
console.log(daysInBudget(20000, 89));

//3
export const priceWithMonthlyDiscount = function (
  hourlyRate,
  daysSpan,
  discountRM
) {
  //1) Normal Rate for normalRatefullMonthdays
  //2) Discount For discountNFullMonths
  //3) rateForReamningDays
  //4) finalPriceWithDiscount = (normalRatefullMonthdays - discountNFullMonths) + rateForReamningDays
  // 0
  const numberOffullMonth = Math.floor(daysSpan / 22);
  numberOffullMonth;
  // 1
  const normalRatefullMonthdays = numberOffullMonth * 22 * 8 * hourlyRate;
  normalRatefullMonthdays;

  //2
  const discountFor1FullMonth = 22 * 8 * hourlyRate * discountRM;
  discountFor1FullMonth;
  const discountNFullMonths = numberOffullMonth * discountFor1FullMonth;
  discountNFullMonths;

  //3
  const rateForReamningDays =
    (daysSpan - numberOffullMonth * 22) * 8 * hourlyRate;
  rateForReamningDays;

  //4
  const finalPriceWithDiscount =
    normalRatefullMonthdays + rateForReamningDays - discountNFullMonths;
  finalPriceWithDiscount;
  return Math.ceil(finalPriceWithDiscount);
};
// priceWithMonthlyDiscount(89, 230, 0.42);
console.log(priceWithMonthlyDiscount(89, 230, 0.42));
console.log(priceWithMonthlyDiscount(16, 70, 0));
console.log(priceWithMonthlyDiscount(16, 130, 0.15));
