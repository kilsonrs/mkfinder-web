import React from 'react';
import Badge from '../Badge';
import { Container } from './styles';

interface StatusBadgeProps {
  status: {
    isFree: boolean;
    isActive: boolean;
    deactivationDate: string;
    isBlocked: boolean;
    blockDate: string;
    inException: boolean;
    exceptionUntil: string;
  };
}

const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
}: StatusBadgeProps) => {
  return (
    <Container className="statusBadge">
      {!status.isActive && (
        <Badge
          info="Cancelado"
          date={status.deactivationDate}
          color="#9E9E9E"
        />
      )}

      {status.isFree && <Badge info="Cortesia" color="#FF9800" />}

      {status.isBlocked ? (
        <Badge info="Bloqueado" date={status.blockDate} color="#f44336" />
      ) : (
        <Badge info="Ativo" color="#4CAF50" />
      )}

      {status.inException && (
        <Badge info="Exceção" date={status.exceptionUntil} color="#9C27B0" />
      )}
    </Container>
  );
};

export default StatusBadge;
