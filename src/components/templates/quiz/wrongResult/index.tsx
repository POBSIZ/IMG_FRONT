import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';

import QuizResultComponent from './quizResult.component';

import { QuizResultTemplatePropsType } from './quizResult.types';

import { BlockChangePage } from 'Hoc';
import { Loader } from 'Bases';
import { Get } from 'Utils';

import { QuizResultType } from 'Types/quizTypes';

const QuizWrongResultTemplate: React.FC<
  Omit<QuizResultTemplatePropsType, 'getAudio'>
> = (props) => {
  const [isWrong, setIsWrong] = useState<boolean>(false);
  const quizResultState = useSelector(
    (state: RootStateOrAny) => state.quizReducer,
  );

  // Result List Sort
  const result: QuizResultType = useMemo(() => {
    const _list = props.result.list.filter(
      (item) => item.answer[0] !== item.correctWordId,
    );

    return {
      id: props.result.id,
      title: props.result.title,
      list: isWrong ? (_list.length < 1 ? [] : _list) : props.result.list,
      corrCount: props.result.corrCount,
    };
  }, [isWrong, quizResultState]);

  // 오디오 불러오기
  const getAudio = useCallback(async (_word) => {
    const res = await Get(`/audio/get/${_word}`, {
      responseType: 'arraybuffer',
    });
    const audioContext = new AudioContext();
    const audioBuffer = audioContext.decodeAudioData(res.data);
    const source = audioContext.createBufferSource();
    source.buffer = await audioBuffer;
    source.connect(audioContext.destination);
    source.start();
  }, []);

  return (
    <QuizResultComponent
      result={result}
      isWrong={isWrong}
      getAudio={getAudio}
      setIsWrong={() => {
        setIsWrong((state) => !state);
      }}
    />
  );
};

export default QuizWrongResultTemplate;
