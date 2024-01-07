import { useEffect, useRef, useState } from 'react';

import PostService from '@/API/PostService';
import Counter from '@/components/counter/Counter';
import PostFilter from '@/components/post-filter/PostFilter';
import PostForm from '@/components/post-form/PostForm';
import PostsList from '@/components/post-list/PostsList';
import MyButton from '@/components/UI/button/MyButton';
import Loader from '@/components/UI/loader/Loader';
import MyModal from '@/components/UI/modal/MyModal';
import Pagination from '@/components/UI/pagination/Pagination';
import MySelect from '@/components/UI/select/MySelect';
import { useFetching } from '@/hooks/useFetching';
import { useObserver } from '@/hooks/useObserver';
import { usePagination } from '@/hooks/usePagination';
import { usePosts } from '@/hooks/usePost';
import { getPageCount } from '@/utils/pages';

export interface IPosts {
  id: number;
  title: string;
  body: string;
}

// export interface ISort {
//   title: keyof IPosts;
//   body: keyof IPosts;
// }

function Posts() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState<IPosts[]>([]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef<HTMLDivElement | null>(null);

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  const createPost = (newPost: IPosts) => {
    setPosts([...posts, { ...newPost }]);
    setModal(false);
  };

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const pagesArray = usePagination(totalPages);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const removePost = (id: number) => {
    setPosts(
      posts.filter((post) => {
        return post.id !== id;
      })
    );
  };

  const changePage = (page: number) => {
    setPage(page);
  };

  // const bodyInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="Posts">
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <Counter count={count} setCount={setCount} />
      <hr style={{ margin: '30px' }} />
      <MyButton onClick={() => setModal(true)}>Create post</MyButton>

      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
        value={limit.toString()}
        onChange={(value) => setLimit(+value)}
        options={[
          { value: '5', name: '5' },
          { value: '10', name: '10' },
          { value: '25', name: '25' },
          { value: '-1', name: 'Show all' },
        ]}
        defaultValue={'Quantity on page'}
      />
      {postError && <h1>There is an ERROR!</h1>}
      <PostsList posts={sortedAndSearchedPosts} remove={removePost} />
      <div ref={lastElement}></div>
      {isPostsLoading && <Loader />}
      <Pagination page={page} changePage={changePage} pagesArray={pagesArray} />
    </div>
  );
}

export default Posts;
