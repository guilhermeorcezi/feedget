import { Trash } from 'phosphor-react-native';
import React from 'react';
import { View } from 'react-native';
import { theme } from '../../../theme';

import { 
  Container,
  IconTrash,
  IconCamera,
  ScreenshotImage
} from './styles';

interface ScreenshotButtonProps{
  screenshot: string | null;
  onTakeShoot: () => void;
  onRemoveShoot: () => void;
}

export function ScreenshotButton({
  screenshot,
  onTakeShoot,
  onRemoveShoot
}: ScreenshotButtonProps) {

  return (
    <Container
      onPress={screenshot ? onRemoveShoot : onTakeShoot}
    >
      {screenshot ? (
        <View>
          <ScreenshotImage
            source={{ uri: screenshot }}
          />
        <IconTrash
          size={22}
          color={theme.colors.text_secondary}
          weight="fill"
          />
        </View>
      ) : (
        <IconCamera
          size={24}
          color={theme.colors.text_secondary}
          weight="bold"
        />
      )}
    </Container>
  )
}
