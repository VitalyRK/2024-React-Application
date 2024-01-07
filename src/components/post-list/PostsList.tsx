import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { IPosts } from '@/pages/Posts';

import PostItem from '../post-item/PostItem';
import styles from './index.module.css';

interface IProps {
  posts: IPosts[];
  remove: (id: number) => void;
}

const PostsList = ({ remove, posts }: IProps) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Sir, nothing found.</h1>;
  }
  return (
    <div className={styles.posts}>
      <h1 style={{ textAlign: 'center' }}>FrontEnd development</h1>
      <TransitionGroup className={styles.posts__box}>
        {posts.map((post) => {
          return (
            <CSSTransition key={post.id} timeout={500} classNames="post">
              <PostItem remove={remove} article={post} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default PostsList;
