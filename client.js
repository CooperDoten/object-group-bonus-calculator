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
  console.log(result);
}

function bonusCalculation(employee) {
  let bonusPercentage;
  if (employee.reviewRating <= 2) {
    bonusPercentage = 0;
  }
 else if (employee.reviewRating === 3) {
    bonusPercentage = 4;
  }
  else if (employee.reviewRating === 4) {
    bonusPercentage = 6;
  }
  else if (employee.reviewRating === 5) {
    bonusPercentage = 10;
  }
  else {
    console.log("somethings wrong, I can feel it", employee.name);
  }
  if (employee.employeeNumber.length === 4) {
    bonusPercentage += 5;
    console.log('seniority has its perks for', employee.name, 'bonus:', bonusPercentage)
  }
  if (employee.annualSalary > 65000) {
    bonusPercentage -= 1;
  }
  if (bonusPercentage > 13) {
    bonusPercentage = 13;
  }
  if (bonusPercentage < 0) {
    bonusPercentage = 0;
  }
  let totalBonus = employee.annualSalary * (bonusPercentage / 100);
  let totalCompensation = Number(employee.annualSalary) + totalBonus;
  console.log(totalBonus);
  console.log(totalCompensation);
  console.log("bonus based on rating", employee.reviewRating, 'bonus:', bonusPercentage, employee.name);
  return {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus,
  }
}

