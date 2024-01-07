import React, { useState } from 'react';

import { IPosts } from '@/App';

import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';
import styles from './index.module.css';

const PostForm = ({ create }: { create: (value: IPosts) => void }) => {
  const [text, setText] = useState({ title: '', body: '' });

  const addNewPost = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    const newPost = { ...text, id: Date.now() };
    create(newPost);
    setText({ title: '', body: '' });
  };

  return (
    <form className={styles.myForm}>
      <MyInput
        placeholder="Title"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setText({ ...text, title: e.target.value });
        }}
        value={text.title}
      />
      <MyInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setText({ ...text, body: e.target.value });
        }}
        value={text.body}
        placeholder="Text"
      />
      <MyButton onClick={addNewPost}>Add post?!</MyButton>
    </form>
  );
};

export default PostForm;
