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

const VocaTemplate: React.FC<any> = (props) => {
  const method = useMethod();
  const router = useRouter();
  const dispatch = useDispatch();

  const [wordList, setWordList] = useState([]);

  const getWords = useCallback(async (_data) => {
    const res = await method.POST('/voca/words', _data);
    setWordList(res.data);
  }, []);

  const saveVoca = useCallback(async (_data) => {
    try {
      const res = await method.POST('/voca/create', _data);
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
