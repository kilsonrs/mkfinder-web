import React, { useCallback, useState, AllHTMLAttributes } from 'react';

import { Container } from './styles';

interface TooltipProps extends AllHTMLAttributes<HTMLDivElement> {
  title?: string;
}

const CopyToClipboard: React.FC<TooltipProps> = ({ children, title }) => {
  const [tooltipText, setTooltipText] = useState(`Copiar ${title || ''}`);

  const handleMouseLeave = useCallback(() => {
    setTooltipText(`Copiar ${title || ''}`);
  }, [title]);

  const copyToClipboard = useCallback(el => {
    const text = el.target.innerText;
    setTooltipText('Copiado');
    return navigator.clipboard.writeText(text);
  }, []);

  return (
    <Container onClick={copyToClipboard} onMouseLeave={handleMouseLeave}>
      <span id="tooltip">
        <p id="tooltip-text">{tooltipText}</p>
      </span>
      {children}
    </Container>
  );
};

export default CopyToClipboard;
