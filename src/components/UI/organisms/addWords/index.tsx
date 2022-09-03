import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { nanoid } from 'nanoid';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StyledVoca, { StyledVocaInput, StyledVocaLabel } from './voca.styled';

import Layout from 'Layouts';
import { CheckButton, Input, Textarea, Title, Button, Badge } from 'Atoms';
import { WordList } from 'Organisms';

import { Post } from 'Utils';
import { AddWordsReq } from 'api/voca/types/update';

const AddWords: React.FC<any> = (props) => {
  // 라벨 목록 string: 라벨 이름, number: 라벨 인덱스
  const [labels, setLabels] = useState<[string, number][]>([]);

  // 현재 라벨 string: 라벨 이름, number: 라벨 인덱스
  const [currLabel, setCurrLabel] = useState<[string, number]>(['', 0]);

  // 선택 라벨 목록 string: [textList x, textList y, 단어] number: 라벨 인덱스
  const [labelMap, setLabelMap] = useState<[string, number][]>([]);

  // 단어 리스트 2차원 배열
  const [textList, setTextList] = useState<string[][]>([]);

  // 원문
  const [originText, setOriginText] = useState<string>('');

  // 단어 추가 함수
  const addVoca = async () => {
    const _data: AddWordsReq = {
      voca_id: props.vocaId,
      word_list: props.wordList,
      origin: originText,
    };
    await props.addVoca(_data);
  };

  // 데이터 전송 전처리 함수
  const getWords = async () => {
    const wordList = labelMap.map((lm) => [lm[0].split(' ')[2], lm[1]]);

    const data = {
      labels: labels,
      word_list: wordList,
    };

    await props.getWords(data);
  };

  // 단어 리스트 메모이제이션
  const memoTextList = useMemo(() => {
    // 현재 선택된 라벨 목록
    const currMap: [string, number][] = labelMap.filter(
      (lm) => lm[1] === currLabel[1],
    );

    return textList.map((dtLine: any[], x: number) => {
      return dtLine.length > 0 ? (
        <div
          style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}
          key={nanoid()}
        >
          {dtLine?.map((word: string, y: number) => {
            const isSelectedLabel =
              currMap.filter((cm) => cm[0] === `${x} ${y} ${word}`).length > 0;

            return word !== '' ? (
              <React.Fragment key={nanoid()}>
                {
                  // 단어가 숫자일 경우 비활성화
                  !isNaN(Number(word)) ? (
                    <CheckButton id={nanoid()} text={word + ''} disabled />
                  ) : (
                    <CheckButton
                      id={nanoid()}
                      text={word + ''}
                      defaultChecked={isSelectedLabel}
                      onChange={(e) => {
                        if (labels.length < 1) {
                          setLabels((prev) => [...prev, ['1', 0]]);
                          setCurrLabel(['1', 0]);
                        }

                        setLabelMap((prev) => {
                          return e.target.checked
                            ? [...prev, [`${x} ${y} ${word}`, currLabel[1]]]
                            : prev.filter(
                                (lm) =>
                                  lm[1] === currLabel[1] &&
                                  lm[0] !== `${x} ${y} ${word}`,
                              );
                        });
                      }}
                    />
                  )
                }
              </React.Fragment>
            ) : null;
          })}
        </div>
      ) : null;
    });
  }, [textList, currLabel]);

  // 단어 리스트 생성 함수
  const regexConverter = useCallback((_text: string) => {
    const symbolRegExp =
      /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$①②③④⑤⑥⑦⑧⑨⑩•%&\\\=\(\'\"]/gi;
    const korRegExp = /[^a-zA-z0-9]/g;
    const numRegExp = /[0-9]/g;

    return _text.split('\n').map((item) => {
      const filterList = item
        .split(' ')
        .flatMap((_wrd) =>
          _wrd.replace(symbolRegExp, '').replace(korRegExp, '').trim(),
        );
      return filterList.join('') !== '' ? filterList : [];
    });
  }, []);

  return (
    <>
      <Layout.Content>
        <StyledVocaInput>
          <h2>복사한 내용을 입력해주세요.</h2>
          <Textarea
            required
            onChange={(e) => {
              setTextList(regexConverter(e.target.value));
              setOriginText(e.target.value);
            }}
          />
        </StyledVocaInput>
      </Layout.Content>

      <Layout.Content>
        <h2 style={{ marginTop: '0' }}>단어를 선택해주세요.</h2>

        <StyledVocaLabel>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (
                !labels.includes(e.target['label'].value.trim()) &&
                e.target['label'].value.trim() !== ''
              ) {
                setLabels((prev) => [
                  ...prev,
                  [e.target['label'].value.trim(), labels.length],
                ]);
                setCurrLabel([e.target['label'].value.trim(), labels.length]);
              }
            }}
          >
            <Input
              type="number"
              placeholder="번호를 입력해주세요."
              name="label"
              required
            />
            <Button backColor="primary">번호 생성</Button>
          </form>

          <ul>
            {(() => {
              const name = nanoid();
              return (
                <>
                  {labels.map((_label, i) => (
                    <CheckButton
                      key={nanoid()}
                      id={nanoid()}
                      type="radio"
                      name={name}
                      text={_label[0]}
                      defaultChecked={currLabel[1] === _label[1]}
                      onChange={() => {
                        setCurrLabel(_label);
                      }}
                    />
                  ))}
                </>
              );
            })()}
          </ul>
        </StyledVocaLabel>

        <StyledVoca>{memoTextList}</StyledVoca>

        <Button
          style={{ marginTop: '20px' }}
          backColor="primary"
          onClick={getWords}
        >
          단어 뜻 찾기
        </Button>

        <p style={{ textAlign: 'center', width: '100%', marginBottom: '0' }}>
          예상 소요 시간 :{' '}
          {Math.floor(labelMap.flat().filter((m) => m).length / 4)}초
        </p>
      </Layout.Content>

      <Layout.Content
        style={{
          height: 'fit-content',
          display: 'flex',
          flexFlow: 'column',
          gap: '20px',
        }}
      >
        <h2>찾은 단어</h2>
        <div
          style={{
            maxHeight: '46vh',
            overflowY: 'scroll',
          }}
        >
          <WordList list={props.wordList} setList={props.setList} />
        </div>
        <Button backColor="primary" onClick={addVoca}>
          단어 추가
        </Button>
      </Layout.Content>
    </>
  );
};

export default AddWords;
