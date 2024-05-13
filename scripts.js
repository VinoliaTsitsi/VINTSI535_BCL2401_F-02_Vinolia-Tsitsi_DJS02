const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

if (!dividend.trim() || !divider.trim()){
  result.innerHTML = "<div class = 'error-message'>Division not performed. Both values are required inputs. Try again </div>";
  return;  
} 

if (isNaN(dividend) || isNaN(divider) || divider === '0'){
  result.innerHTML = "<div class = 'error-message'>Division not performed. Invalid number provided. try again </div>";
  return;  
}

const quotient = parseInt(dividend)/ parseInt(divider); 
if (!Number.isInteger(quotient)){
  result.innerText = Math.floor(quotient); 
} else {
  result.innerText = quotient; 
}

if (isNaN(quotient)) {
  // Display critical error message
  const criticalError = document.createElement('div');
  criticalError.classList.add('critical-error');
  criticalError.innerText = "Something critical went wrong. Please reload the page";
  document.body.innerHTML = ""; 
  document.body.appendChild(criticalError);
  console.error("Critical error: Inputs are not numbers");

  // Reload the page after a delay
  setTimeout(() => {
    location.reload();
  }, 3000); // Reload the page after 3 seconds
}

});

