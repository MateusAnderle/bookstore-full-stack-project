const currencyBRL = (number: number) => {
  const numberFixed = Number(number).toFixed(2);
  const numberFormated = String(numberFixed).replace(".", ",");
  return `R$ ${numberFormated}`;
};

export { currencyBRL };
