import { useNavigate } from 'react-router-dom';

import MyButton from '../UI/button/MyButton';
import styles from './index.module.css';

interface IPostItem {
  remove: (id: number) => void;
  article: {
    id: number;
    title: string;
    body: string;
  };
}

const PostItem = ({ article: { id, title, body }, remove }: IPostItem) => {
  const navigate = useNavigate();
  return (
    <div className={styles.post__item}>
      <h3 className={styles.post__title}>
        {id}. {title}
      </h3>
      <p className={styles.post__text}>{body}</p>
      <div className={styles.post__btns}>
        <MyButton onClick={() => navigate(`/posts/${id}`)}>Open</MyButton>
        <MyButton onClick={() => remove(id)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
