import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Container = styled.TouchableOpacity`
  flex: 1;
  height: 40px;
  background-color: ${theme.colors.brand};
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const Text = styled.Text`
  font-size: 14px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.text_on_brand_color};
`;