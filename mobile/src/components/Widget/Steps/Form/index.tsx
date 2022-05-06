import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { FeedbackType } from '../..';
import { theme } from '../../../../theme';
import { feedbackTypes } from '../../../../utils/feedbackTypes';
import { Button } from '../../Button';
import { ScreenshotButton } from '../../ScreenshotButton';

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
}


export function Form({ feedbackType }: FormProps){
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  return (
    <Container>
      <Header>
        <BackButton>
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
      />

      <Footer>
        <ScreenshotButton
          onRemoveShoot={() => {}}
          onTakeShoot={() => {}}
          screenshot=""
        />

        <Button isLoading={false} />
      </Footer>
    </Container>
  )
}

export default Form;