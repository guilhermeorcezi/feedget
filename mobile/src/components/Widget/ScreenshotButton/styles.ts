import { Camera, Trash } from 'phosphor-react-native';
import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Container = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-color: ${theme.colors.surface_secondary};
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  position: relative;
`;

export const IconTrash = styled(Trash)`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const IconCamera = styled(Camera)``;

export const ScreenshotImage = styled.Image`
  width: 40px;
  height: 40px;
`;