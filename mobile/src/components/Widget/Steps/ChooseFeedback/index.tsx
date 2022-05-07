import React from 'react';
import { FeedbackType } from '../..';
import { feedbackTypes } from '../../../../utils/feedbackTypes';
import { Footer } from '../../Footer';

import {
  Container,
  Options,
  FeedbackOptionButton,
  FeedbackImage,
  FeedbackTitle,
  Title
} from './styles';

interface ChooseFeedbackProps{
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function ChooseFeedback({ 
  onFeedbackTypeChanged
}: ChooseFeedbackProps){

  return (
  <Container>
    <Title>Deixe seu feedback</Title>
    <Options>
      {Object.entries(feedbackTypes).map(([key,value]) => (
        <FeedbackOptionButton key={key} onPress={() => onFeedbackTypeChanged(key as FeedbackType)}>
          <FeedbackImage source={value.image} />
          <FeedbackTitle>{value.title}</FeedbackTitle>
        </FeedbackOptionButton>
      ))}
    </Options>

    <Footer/>
  </Container>
  );
}
