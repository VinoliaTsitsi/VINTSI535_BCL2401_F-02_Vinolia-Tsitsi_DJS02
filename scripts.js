const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

If (!dividend.trim() || !divider.trim()) {
  result.innerHTML = "<div class = 'error-message'>Division not performed. Both values are required inputs. Try again <div/>";
  return;  
} 

if (isNaN(dividend) || isNaN(divider) || divider === '0'){
  result.innerHTML = "<div class = 'error-message'>Division not performed. Invalid number provided. try again </div>";
  return;  
}


});

