import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { theme } from '../../../theme';
import { Container, Loading, Text } from './styles';

interface ButtonProps extends TouchableOpacityProps{
  isLoading: boolean;
}

export function Button({ isLoading, ...rest }: ButtonProps){
  return (
    <Container {...rest}>
      {isLoading ? (
        <Loading
          color={theme.colors.text_on_brand_color}
        />
      ) : (
        <Text>Enviar feedback</Text>
      )}
    </Container>
  )
}