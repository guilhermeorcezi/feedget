import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { theme } from '../../../theme';
import { Container, Text } from './styles';

interface ButtonProps extends TouchableOpacityProps{
  isLoading: boolean;
}

export function Button({ isLoading, ...rest }: ButtonProps){
  return (
    <Container {...rest}>
      {isLoading ? (
        <ActivityIndicator
          color={theme.colors.text_on_brand_color}
        />
      ) : (
        <Text>Enviar feedback</Text>
      )}
    </Container>
  )
}