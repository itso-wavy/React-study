import { forwardRef, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from './Button';
import styled from 'styled-components';
import axios from 'axios';

const SSection = styled.section`
  display: flex;
  flex-direction: column;
  width: stretch;
  max-width: 650px;
  margin: 0 auto;
`;
const SH2 = styled.h2`
  text-align: ${props => props.titleAlign};
  margin-bottom: 1em;
`;
const STextarea = styled.textarea`
  width: 100%;
  height: ${props => props.heigth};
  padding: 1em;
  font-size: var(--font-size-normal);
  outline: none;
  &:focus {
    outline: 1px solid gold;
  }
`;
const Wrapper = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: center;
  gap: 1em;
`;

const TextInput = ({ type = 'post', title, titleAlign, heigth }) => {
  const URL_ID = useParams().id;
  const navigate = useNavigate();
  const cancelPost = () => {
    navigate(-1);
  };
  const [content, setContent] = useState('');
  const inputRef = useRef();

  const getDate = () => {
    const date = new Date();
    const year = date.getFullYear().toString().slice(2, 4).padStart(2, 0);
    const month = (new Date().getMonth() + 1).toString().padStart(2, 0);
    const day = new Date().getDay().toString().padStart(2, 0);
    return `${year}-${month}-${day}`;
  };

  const registPost = () => {
    if (inputRef.current.value === '') {
      inputRef.current.focus();
      return;
    }

    if (!URL_ID) {
      axios({
        url: `http://localhost:3001/posts`,
        method: 'POST',
        data: {
          id: Date.now(),
          tag: [],
          author: 'wavy',
          title: 'title',
          content: content,
          date: getDate(),
          comment: [],
        },
      });
    } else {
      axios({
        url: `http://localhost:3001/posts/${URL_ID}`,
        method: 'PATCH',
        data: {
          content: content,
          date: getDate(),
        },
      });
    }
    setContent('');
    navigate('/');
    window.location.reload();
  };
  const onChange = e => {
    setContent(e.target.value);
  };

  return (
    <>
      <SSection className='postWrite'>
        <SH2 titleAlign={titleAlign}>{title}</SH2>
        <STextarea
          ref={inputRef}
          className='text-body'
          value={content}
          onChange={onChange}
          heigth={heigth}
        />
        <Wrapper>
          {type === 'comment' || <Button text='취소' onClick={cancelPost} />}
          <Button text='등록' isFull onClick={registPost} />
        </Wrapper>
      </SSection>
    </>
  );
};

export default forwardRef(TextInput);
