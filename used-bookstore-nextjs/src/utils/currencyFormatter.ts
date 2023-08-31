const currencyBRL = (number: number | bigint) => {
  const numberFormated = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);

  return numberFormated;
};

export { currencyBRL };
