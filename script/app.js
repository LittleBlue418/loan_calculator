// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);


function calculateResults(e){
  e.preventDefault();

  // UI variables
  const loanAmount = document.getElementById('amount');
  const loanInterest = document.getElementById('interest');
  const repaymentYears = document.getElementById('years');

  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(loanAmount.value);
  const calculatedInterest = parseFloat(loanInterest.value) / 100 / 12;
  const calculatedPayments = parseFloat(repaymentYears.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2)
  } else {
    console.log('Please check your numbers');
  }

}