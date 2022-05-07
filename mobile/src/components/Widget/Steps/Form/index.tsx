import { ArrowLeft } from 'phosphor-react-native';
import React, { useCallback, useState } from 'react';
import { captureScreen } from 'react-native-view-shot';
import { FeedbackType } from '../..';
import { api } from '../../../../libs/api';
import { theme } from '../../../../theme';
import { feedbackTypes } from '../../../../utils/feedbackTypes';
import { Button } from '../../Button';
import { ScreenshotButton } from '../../ScreenshotButton';
import * as FileSystem from 'expo-file-system'

import {
  Container,
  BackButton,
  Header,
  FeedbackImage,
  Title,
  TitleContainer,
  TextArea,
  Footer
} from './styles';

interface FormProps {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

export function Form({
  feedbackType,
  onFeedbackCanceled,
  onFeedbackSent
}: FormProps){
  const [screenshot, setScreenshot] = useState<string | null>();
  const [isSendingFeedback, setIsSendingFeedback] = useState<boolean>(false);
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const [comment, setComment] = useState<string>('');

  const handleTakeScreenshot = useCallback(() => {
    captureScreen({
      format: 'jpg',
      quality: 0.8
    }).then(uri => setScreenshot(uri))
    .catch(error => console.log(error))
  },[])

  const handleRemoveScreenshot = useCallback(async() => {
    setScreenshot(null);
  },[]);

  const handleSendFeedback = useCallback(async () => {
    if(isSendingFeedback){
      return;
    }

    setIsSendingFeedback(true);
    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(
      screenshot, { encoding: 'base64' }
    );

    try{
      await api.post('/feedbacks',{
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment
      });

      setIsSendingFeedback(false);
      onFeedbackSent();
    }catch (error){
      console.log('error')
      setIsSendingFeedback(false);
    }
  },[isSendingFeedback, feedbackType, comment]);

  return (
    <Container>
      <Header>
        <BackButton onPress={onFeedbackCanceled}>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </BackButton>

        <TitleContainer>
          <FeedbackImage source={feedbackTypeInfo.image} />
          <Title>{feedbackTypeInfo.title}</Title>
        </TitleContainer>
      </Header>

      <TextArea
        multiline
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo"
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false}
        onChangeText={setComment}
      />

      <Footer>
        <ScreenshotButton
          onRemoveShoot={handleRemoveScreenshot}
          onTakeShoot={handleTakeScreenshot}
          screenshot={screenshot as string | null}
        />

        <Button
          isLoading={isSendingFeedback}
          onPress={handleSendFeedback}
        />
      </Footer>
    </Container>
  )
}

export default Form;