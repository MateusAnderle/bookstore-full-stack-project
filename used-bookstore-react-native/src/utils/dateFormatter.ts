import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const dateInDMY = (date: Date) => {
  const dateFormated = format(new Date(date), "dd/MM/yyyy", { locale: ptBR });

  return dateFormated;
};

const dateInHMS = (date: Date) => {
  const dateFormated = format(new Date(date), "h:mm:ss", { locale: ptBR });

  return dateFormated;
};

export { dateInDMY, dateInHMS };
