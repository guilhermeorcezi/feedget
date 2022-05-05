import styled from 'styled-components/native';
import { theme } from '../../../../theme';

export const Container = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 32px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.text_primary};
`;

export const Options = styled.View`
  width: 100%;
  margin-bottom: 48px;
  flex-direction: row;
  justify-content: center;
`;

export const FeedbackOptionButton = styled.TouchableOpacity`
  width: 104px;
  height: 112px;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  margin: 0 8px;
  background-color: ${theme.colors.surface_secondary};
`;

export const FeedbackImage = styled.Image`
  width: 40px;
  height: 40px;
`;

export const FeedbackTitle = styled.Text`
  font-size: 14px;
  margin-top: 8px;
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.text_primary};
`; 