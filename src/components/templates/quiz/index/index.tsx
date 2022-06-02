import React from 'react';
import QuizComponent from './quiz.component';

import { QuizTemplatePropsType } from './quiz.types';

const QuizTemplate: React.FC<QuizTemplatePropsType> = (props) => {
  return (
    <>
      <QuizComponent {...props} />
    </>
  );
};

export default QuizTemplate;
