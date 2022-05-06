import React from 'react';

import successImg from '../../../../assets/success.png'
import { Footer } from '../../Footer';

import { 
  Button,
  ButtonText,
  Container,
  SuccessImage,
  Text
  } from './styles';

export function Success() {
  return (
    <Container>
      <SuccessImage source={successImg} />

      <Text>Agradecemos o feedback!</Text>

      <Button>
        <ButtonText>Quero enviar outro</ButtonText>
      </Button>

      <Footer />
    </Container>
  )
}

export default Success;