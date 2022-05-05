import React from 'react';

import { Container, CopyrightText } from './styles';

export const Footer: React.FC = () => {
  return (
    <Container>
      <CopyrightText>
        Feito com ♥ por Guilherme Orcezi
      </CopyrightText>
    </Container>
  );
}