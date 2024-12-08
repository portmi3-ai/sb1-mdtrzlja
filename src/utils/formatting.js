function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

function formatList(items) {
  return items.map((item, index) => `${index + 1}. ${item}`).join('\n');
}

module.exports = {
  formatCurrency,
  formatDate,
  formatList
};