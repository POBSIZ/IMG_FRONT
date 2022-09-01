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
import { faPen, faCircleXmark } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from 'Layouts';

import { Title, Button } from 'Atoms';
import { EditText } from 'Molecules';
import { WordList } from 'Organisms';
import { GetWordsByIdRes } from 'api/voca/types/get';

import StyledVocaContent from './vocaContent.styled';
import { WordEntity } from 'api/quiz/entity/word';
import { VocaWordEntity } from 'api/voca/entity/vocaWord';

const VocaContentComponent: React.FC<{ content: GetWordsByIdRes }> = (
  props,
) => {
  const [wordList, setWordList] = useState<VocaWordEntity[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  useEffect(() => {
    setWordList(props.content.word_list);
  }, [props.content.word_list]);

  const handleClick = (_i: number) => {
    setWordList((prev) => prev.filter((p) => p !== prev[_i]));
  };

  return (
    <>
      <Layout.Container>
        <Title style={{ margin: '20px 0' }}>
          <EditText>{props.content.name}</EditText>
        </Title>
        <Layout.Content>
          <StyledVocaContent>
            <div className="box">
              <h2>단어 목록</h2>
              <Button
                backColor="primary"
                onClick={() => setIsEdit((prev) => !prev)}
              >
                <>
                  {isEdit ? (
                    '완료'
                  ) : (
                    <>
                      <FontAwesomeIcon className="icon" icon={faPen} />
                      편집
                    </>
                  )}
                </>
              </Button>
            </div>

            <ul>
              {wordList.map((word, i) => {
                const isLabel =
                  i == 0
                    ? true
                    : wordList[i - 1]?.label === word.label
                    ? false
                    : true;

                return (
                  <li
                    key={nanoid()}
                    style={{
                      marginTop: isLabel ? '20px' : '0',
                      borderTop: isLabel ? '1px solid rgba(30,30,30,20%)' : '0',
                    }}
                  >
                    {isLabel ? <h2>{word.label}</h2> : null}
                    <p>
                      <span>
                        {isEdit ? (
                          <>
                            <FontAwesomeIcon
                              className="icon"
                              icon={faCircleXmark}
                              onClick={() => {
                                handleClick(i);
                              }}
                            />{' '}
                          </>
                        ) : null}
                        {word.word_id.word}
                      </span>
                      <span>{word.word_id.diacritic}</span>
                      <span>{word.word_id.meaning}</span>
                    </p>
                  </li>
                );
              })}
            </ul>
          </StyledVocaContent>
        </Layout.Content>
      </Layout.Container>
    </>
  );
};

export default VocaContentComponent;
