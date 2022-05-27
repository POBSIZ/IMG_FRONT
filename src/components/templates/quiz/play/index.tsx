import React from 'react';
import QuizComponent from './quizPlay_component';

import { QuizPlayTemplatePropsType } from './quizPlay_types';

const QuizPlayTemplate: React.FC<QuizPlayTemplatePropsType> = (props) => {
  return (
    <>
      <QuizComponent {...props} />
    </>
  );
};

export default QuizPlayTemplate;
