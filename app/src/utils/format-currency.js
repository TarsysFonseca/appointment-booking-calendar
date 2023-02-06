const formatCurrency = (value, decimalPlaces = 2, currency = 'BRL') => (
  new Intl.NumberFormat(navigator.language, {
    currency,
    style: 'currency',
    minimumFractionDigits: decimalPlaces,
  }).format(value)
);

export default formatCurrency;
