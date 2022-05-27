import React from 'react';
import QuizComponent from './quiz_component';

import { QuizTemplatePropsType } from './quiz_types';

const QuizTemplate: React.FC<QuizTemplatePropsType> = (props) => {
  return (
    <>
      <QuizComponent {...props} />
    </>
  );
};

export default QuizTemplate;
