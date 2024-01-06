// function to calculate loan eligibility
function calculateEligibility(income, debt, creditScore) {
  // minimum income requirement
  const MIN_INCOME = 30000;
  // maximum debt-to-income ratio
  const MAX_DTI = 0.4;
  // minimum credit score
  const MIN_CREDIT_SCORE = 600;

  // calculate debt-to-income ratio
  const dti = debt / income;

  // check if income is sufficient
  if (income < MIN_INCOME) {
    return 'Ineligible: Income is too low';
  }

  // check if debt-to-income ratio is too high
  if (dti > MAX_DTI) {
    return 'Ineligible: Debt-to-income ratio is too high';
  }

  // check if credit score is sufficient
  if (creditScore < MIN_CREDIT_SCORE) {
    return 'Ineligible: Credit score is too low';
  }

  // if all requirements are met, return eligible
  return 'Eligible';
}

// example usage
const income = 40000;

console.log();
const debt = 10000;
const creditScore = 700;

console.log(calculateEligibility(income, debt, creditScore)); // Eligible
