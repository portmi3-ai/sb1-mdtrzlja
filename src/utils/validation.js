function isValidBudget(budget) {
  const number = parseFloat(budget.replace(/[^0-9.-]+/g, ''));
  return !isNaN(number) && number > 0;
}

function isValidDate(dateString) {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date);
}

function sanitizeInput(input) {
  return input.trim().replace(/[<>]/g, '');
}

module.exports = {
  isValidBudget,
  isValidDate,
  sanitizeInput
};