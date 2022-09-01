import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
import { faPen, faCheck } from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StyledEditText from './editText.styled';
import { Button, Input } from 'Atoms';

export interface EditTextPropsType {
  children: string;
  name?: string;
  type?: 'phone';
}

const EditText: React.FC<EditTextPropsType> = (props) => {
  const [text, setText] = useState<string>('');
  const [isEdit, setIsEdit] = useState<boolean>(false);

  useEffect(() => {
    setText(props.children);
  }, [props.children]);

  const handleText = useCallback((e) => {
    props.type === 'phone'
      ? e.target.value.length > 13
        ? null
        : setText(
            e.target.value
              .replace(/[^0-9]/g, '')
              .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
              .replace(/(\-{1,2})$/g, ''),
          )
      : setText(e.target.value);
  }, []);

  return (
    <>
      <StyledEditText>
        {isEdit ? (
          <>
            <Input
              type="text"
              placeholder="수정"
              value={text}
              onChange={handleText}
            />
            <Button
              type="button"
              onClick={() => {
                setIsEdit((prev) => !prev);
              }}
              backColor="primary"
            >
              <FontAwesomeIcon icon={faCheck} />
            </Button>
          </>
        ) : (
          <>
            {text}
            <FontAwesomeIcon
              icon={faPen}
              onClick={() => {
                setIsEdit((prev) => !prev);
              }}
            />
          </>
        )}
      </StyledEditText>
      <Input
        type="text"
        name={props.name}
        value={text}
        onChange={handleText}
        style={{ display: 'none' }}
      />
    </>
  );
};

export default EditText;
