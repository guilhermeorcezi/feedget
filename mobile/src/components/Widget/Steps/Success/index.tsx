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

  interface SuccessProps{
    onSendNewFeedback: () => void;
  }

export function Success({
  onSendNewFeedback
}: SuccessProps) {
  return (
    <Container>
      <SuccessImage source={successImg} />

      <Text>Agradecemos o feedback!</Text>

      <Button onPress={onSendNewFeedback}>
        <ButtonText>Quero enviar outro</ButtonText>
      </Button>

      <Footer />
    </Container>
  )
}

export default Success;