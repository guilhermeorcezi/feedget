import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const WidgetButton = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  border-Radius: 24px;
  background-color: ${theme.colors.brand};
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 16px;
  bottom: ${getBottomSpace() + 16}px;
`;

export const styles = StyleSheet.create({
  modal: {
    backgroundColor: theme.colors.surface_primary,
    paddingBottom: getBottomSpace() + 16,
  },
  indicator:{
    backgroundColor: theme.colors.text_primary,
    width: 56
  }
})