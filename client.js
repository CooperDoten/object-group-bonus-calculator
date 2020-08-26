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

/*{
  name: 'Atticus',
  employeeNumber: '2405',
  annualSalary: '47000',
  reviewRating: 3
}*/
/*
[]function to pull out individual employee
[]bonus calculation function to pass individual object (employee through)
*/
console.log( employees );
let updateEmployee = [];

function getEmployee(employeeNumber) {
    for( let i=0; i < employees.length; i++) { // looping through whole array of objects. 
      let employee = employees[i];
      if(employees[i].employeeNumber === employeeNumber) {
        employee.bonusPercentage = 0;
        employee.totalCompensation = 0;
        employee.totalBonus = 0;
        return employee;
    }
  }
}
console.log(getEmployee('6243'));



//property totalCompensation = annualSalary + bonusUpdate2


function individualBonusCalculation (individualEmployee){
  
}
------------------------------
function reviewRatingBonus (){
  if( individualEmployee.reviewRating <= 2 ){
      return no bonus;
  }
  else if( individualEmployee.reviewRating === 3){
    let bonus = individualEmployee.annualSalary * .04;
    let bonusPercentage = .04;
  }
  else if( individualEmployee.reviewRating === 4 ){
    let bonus = individualEmployee.annualSalary * .06; 
    let bonusPercentage = .06;
  }
  else if( individualEmployee.reviewRating === 5 ){
    let bonus = individualEmployee.annualSalary * .1;
    let bonusPercentage = .1;
  }
    return bonus + bonusPercentage;
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