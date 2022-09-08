import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { nanoid } from 'nanoid';

import VocaContentComponent from './vocaContent.component';

import { useRouter } from 'next/router';

import { pushToastAsync } from 'Actions/toastAction';

import { Get } from 'Utils';
import { VocaApi } from 'api';
import { GetWordsRes, GetWordsReq } from 'api/voca/types/get';
import { CreateVocaReq } from 'api/voca/types/create';
import { AddWordsReq } from 'api/voca/types/update';

const VocaContentTemplate: React.FC<any> = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const vocaApi = VocaApi();

  const [wordList, setWordList] = useState<GetWordsRes[]>([]);

  // 단어 뜻 찾기
  const getWords = useCallback(async (_data: GetWordsReq) => {
    setWordList((await vocaApi.get.words(_data)).data);
  }, []);

  // 단어 추가
  const addVoca = useCallback(async (_data: AddWordsReq) => {
    try {
      await vocaApi.update.addWords(_data);
      router.reload();
      dispatch(
        pushToastAsync.request({
          status: 'success',
          message: '단어 추가 완료',
        }),
      );
    } catch (error) {}
  }, []);

  // 단어 삭제
  const removeWord = useCallback(async (_id: string | number) => {
    try {
      await vocaApi.remove.word(_id);
    } catch (error) {}
  }, []);

  // 오디오 불러오기
  const getAudio = async (_word) => {
    const res = await Get(`/audio/get/${_word}`, {
      responseType: 'arraybuffer',
    });
    const audioContext = new AudioContext();
    const audioBuffer = audioContext.decodeAudioData(res.data);
    const source = audioContext.createBufferSource();
    source.buffer = await audioBuffer;
    source.connect(audioContext.destination);
    source.start();
  };

  // 퀴즈 생성
  const createQuiz = async () => {
    try {
      await vocaApi.create.quiz(String(router.query.id));
      dispatch(
        pushToastAsync.request({
          status: 'success',
          message: '퀴즈 생성 완료',
        }),
      );
    } catch (error) {}
  };

  // 퀴즈 제거
  const removeQuiz = async () => {
    try {
      await vocaApi.remove.quiz(String(router.query.id));
      dispatch(
        pushToastAsync.request({
          status: 'error',
          message: '퀴즈 제거 완료',
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <VocaContentComponent
        {...props}
        getAudio={getAudio}
        addVoca={addVoca}
        getWords={getWords}
        wordList={wordList}
        setList={setWordList}
        removeWord={removeWord}
        createQuiz={createQuiz}
        removeQuiz={removeQuiz}
      />
    </>
  );
};

export default VocaContentTemplate;
