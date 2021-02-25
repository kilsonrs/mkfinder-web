import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

const parseDate = (payload: string): string => {
  return format(parseISO(payload), 'dd/MM/yyyy', {
    locale: ptBR,
  });
};

export default parseDate;
