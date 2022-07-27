import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';

import QuizResultComponent from './quizResult.component';

import { QuizResultTemplatePropsType } from './quizResult.types';

import { BlockChangePage } from 'Hoc';
import { Loader } from 'Bases';
import { Get } from 'Utils';
import { useDebounce } from 'Hooks';

const QuizResultTemplate: React.FC<QuizResultTemplatePropsType> = (props) => {
  const debounce = useDebounce();
  const [isWrong, setIsWrong] = useState<boolean>(false);
  const quizResultState = useSelector(
    (state: RootStateOrAny) => state.quizReducer,
  );

  // Result List Sort
  const resultList = useMemo(() => {
    const _list = quizResultState?.result?.list.filter(
      (item) => item.answer[0] !== item.correctWordId,
    );
    // console.log(_list);
    return isWrong
      ? _list.length < 1
        ? []
        : _list
      : quizResultState?.result?.list;
  }, [isWrong, quizResultState]);

  // 오디오 불러오기
  const getAudio = useCallback(
    async (_word) => {
      const res = await Get(`/audio/get/${_word}`, {
        responseType: 'arraybuffer',
      });
      const audioContext = new AudioContext();
      const audioBuffer = audioContext.decodeAudioData(res.data);
      const source = audioContext.createBufferSource();
      source.buffer = await audioBuffer;
      source.connect(audioContext.destination);
      source.start();
    },
    [resultList],
  );

  return (
    <QuizResultComponent
      quizResultState={quizResultState}
      resultList={resultList}
      isWrong={isWrong}
      setIsWrong={() => {
        setIsWrong((state) => !state);
      }}
      getAudio={getAudio}
      {...props}
    />
  );
};

export default QuizResultTemplate;
