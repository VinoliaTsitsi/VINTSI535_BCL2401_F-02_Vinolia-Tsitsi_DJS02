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

if (isNaN(quotient)){
  document.body.innerHTML="<div class= 'critical-error'>Something critical went wrong. Please reload the page</div>"; 
  console.error("Critical error : Inputs are not numbers"); 
}


});

