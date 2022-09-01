import { useMethod } from 'Hooks';
import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import { useRouter } from 'next/router';

import VocaComponent from './voca.component';
import { pushToastAsync } from 'Actions/toastAction';

import { VocaApi } from 'api';
import { GetWordsRes, GetWordsReq } from 'api/voca/types/get';
import { CreateVocaReq } from 'api/voca/types/create';

const VocaTemplate: React.FC<any> = (props) => {
  const method = useMethod();
  const router = useRouter();
  const dispatch = useDispatch();

  const vocaApi = VocaApi();

  const [wordList, setWordList] = useState<GetWordsRes[]>([]);

  const getWords = useCallback(async (_data: GetWordsReq) => {
    setWordList((await vocaApi.get.words(_data)).data);
  }, []);

  const saveVoca = useCallback(async (_data: CreateVocaReq) => {
    try {
      await vocaApi.create.voca(_data);
      router.push('/voca');
      dispatch(
        pushToastAsync.request({
          status: 'success',
          message: '단어장 생성완료',
        }),
      );
    } catch (error) {}
  }, []);

  return (
    <>
      <VocaComponent
        {...props}
        saveVoca={saveVoca}
        getWords={getWords}
        wordList={wordList}
        setList={setWordList}
      />
    </>
  );
};

export default VocaTemplate;
