import React from 'react';
import { feedbackTypes } from '../../../../utils/feedbackTypes';
import { Footer } from '../../Footer';

import {
  Container,
  Options,
  FeedbackOptionButton,
  FeedbackImage,
  FeedbackTitle
} from './styles';

export const ChooseFeedback: React.FC = () => {
  return (
  <Container>
    <Options>
      {Object.entries(feedbackTypes).map(([key,value]) => (
        <FeedbackOptionButton key={key}>
          <FeedbackImage source={value.image} />
          <FeedbackTitle>{value.title}</FeedbackTitle>
        </FeedbackOptionButton>
      ))}
    </Options>

    <Footer/>
  </Container>
  );
}
