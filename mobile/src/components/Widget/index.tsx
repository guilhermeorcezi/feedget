import React, { useCallback, useRef } from 'react';
import { ChatTeardropDots } from 'phosphor-react-native'
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import { styles, WidgetButton } from './styles';
import { theme } from '../../theme';
import { ChooseFeedback } from './Steps/ChooseFeedback';
import { feedbackTypes } from '../../utils/feedbackTypes';
import Form from './Steps/Form';
import Success from './Steps/Success';

export type FeedbackType = keyof typeof feedbackTypes;

const Widget: React.FC = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleOpenWidget = useCallback(() => {
    bottomSheetRef.current?.expand();
  },[]);

  return (
    <>
      <WidgetButton onPress={handleOpenWidget}>
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </WidgetButton>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1,280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        <Form feedbackType='BUG' />
      </BottomSheet>
    </>
  )
}

export default gestureHandlerRootHOC(Widget);