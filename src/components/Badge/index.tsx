import React, { useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Container } from './styles';

interface BadgeProps {
  info: string;
  date?: string;
  color: string;
}

const Badge: React.FC<BadgeProps> = ({ info, date, color }) => {
  const formattedDate = useMemo(() => {
    if (date) {
      return format(parseISO(date), 'dd/MM/yyyy', {
        locale: ptBR,
      });
    }
    return null;
  }, [date]);

  return (
    <Container color={color}>
      <div>
        <p>{info}</p>
      </div>
      {date && <small>{formattedDate}</small>}
    </Container>
  );
};

export default Badge;
