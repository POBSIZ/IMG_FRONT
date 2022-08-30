import React, { useCallback, useState, useEffect } from 'react';

import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import QuizPlayComponent from './quizPlay.component';

import {
  QuizPlayTemplatePropsType,
  QuizPlayComponentPropsType,
} from './quizPlay.types';

import { BlockChangePage } from 'Hoc';
import { saveQuiz } from 'Actions/quizAction';
import { AnswerListItem } from './quizPlay.types';

import { useRouter } from 'next/router';
import { Patch, Get } from 'Utils';
import { useMethod, useDebounce } from 'Hooks';
import { Loader } from 'Bases';

const QuizPlayTemplate: React.FC<QuizPlayTemplatePropsType> = (props) => {
  const debounce = useDebounce();
  const method = useMethod();
  const dispatch = useDispatch();
  const router = useRouter();
  const authState = useSelector((state: RootStateOrAny) => state.authReducer);
  const [isSend, setIsSend] = useState<boolean>(false);

  const handleSave = async (_list: AnswerListItem[]) => {
    setIsSend(true);

    let corrCount = 0;
    _list.forEach((item) => {
      if (item.correctWordId === item.answer[0]) {
        corrCount++;
      }
    });

    dispatch(
      saveQuiz({
        title: props.quizTitle,
        id: props.quizId,
        list: _list,
        corrCount: corrCount,
      }),
    );

    const data = {
      title: props.quizTitle,
      time: props.limitTime,
      max_words: props.quizList.length,
      userQuiz_id: props.userQuizId,
      quiz_id: props.quizId,
      quizLog_id: props.quizLogId,
      best_solve: corrCount,
      answerList: _list,
    };

    if (!props.userQuizId && !props.quizId) {
      await method.POST(`/auth/userQuiz/retry`, data);
    } else {
      await method.PATCH('/auth/userQuiz/update', data);
    }

    router.push('/quiz/result', undefined, { shallow: true });
  };

  // 오디오 불러오기
  const getAudio = useCallback(
    async (_word) => {
      try {
        const res = await Get(`/audio/get/${_word}`, {
          responseType: 'arraybuffer',
        });
        const audioContext = new AudioContext();
        const audioBuffer = audioContext.decodeAudioData(res.data);
        const source = audioContext.createBufferSource();
        source.buffer = await audioBuffer;
        source.connect(audioContext.destination);
        source.start();
      } catch (error) {}
    },
    [props.quizList],
  );

  return (
    <>
      {isSend ? (
        <Loader />
      ) : (
        <QuizPlayComponent
          {...props}
          router={router}
          handleSave={handleSave}
          getAudio={getAudio}
        />
      )}
    </>
  );
};

export default QuizPlayTemplate;
