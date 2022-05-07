import React, { useCallback, useRef, useState } from 'react';
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
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleOpenWidget = useCallback(() => {
    bottomSheetRef.current?.expand();
  },[]);

  const handleRestartFeedback = useCallback(() => {
    setFeedbackType(null);
    setFeedbackSent(false);
  },[])

  const handleFeedbackSent = useCallback(() => {
    setFeedbackSent(true);
  },[])

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
        {feedbackSent ? <Success onSendNewFeedback={handleRestartFeedback} />
        :(
           feedbackType ? (
             <Form
              feedbackType={feedbackType}
              onFeedbackCanceled={handleRestartFeedback}
              onFeedbackSent={handleFeedbackSent}
             />
           ): (
             <ChooseFeedback
              onFeedbackTypeChanged={setFeedbackType}
             />
           )
        )}
      </BottomSheet>
    </>
  )
}

export default gestureHandlerRootHOC(Widget);