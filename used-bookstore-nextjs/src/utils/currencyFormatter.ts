const currencyBRL = (number: number | bigint) => {
  const numberFormated = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);

  return numberFormated;
};

export { currencyBRL };
