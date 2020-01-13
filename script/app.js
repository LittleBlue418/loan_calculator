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
    showError('Please check your numbers')
  }

}

// Show Error
function showError(errorMessage){
  // Create a div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(errorMessage));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds (3000 miliseconds)
  setTimeout(clearError, 3000);
}

function clearError(){
  document.querySelector('.alert').remove();
}