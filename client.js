const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];



// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
for (let employee of employees) {
  console.log(employee);
  let result = bonusCalculation(employee);
}

function bonusCalculation(employee) {
  let bonus;
  if (employee.reviewRating <= 2) {
    bonus = 0;
    console.log('this employee is underachieving', bonus, employee.name);
  }
 else if (employee.reviewRating = 3) {
    bonus = 4;
    console.log("bonus should be 4", bonus, employee.name);
  }
}

/*
------------------------------
function emNumberBonus (){
  if( individualEmployee.employeeNumber >= 1000 ){
    let loyaltyBonus = individualEmployee.annualSalary * .05;
    let bonusUpdate1 = loyaltyBonus + bonus;
    return bonusUpdate1;
  }
  else {
    return "At company less than 15 years"
  }
}
function annualAdjustment(){
  if( individualEmployee.annualSalary > 65000 ){
    let bonusDecrease = bonusUpdate1 * .01
    let adjustedBonus = bonusUpdate1 - bonusDecrease
    return bonusUpdate2
  }
  else{
    return "No bonus decrease... Your bonus is " + bonusUpdate1
  }
} 
  let maxBonus = annualSalary * .13 
  Max bonus % is 13% ... cannot be below 0%
  
  ------------------------------
*/