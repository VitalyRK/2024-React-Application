import { useMemo } from 'react';

import { IPosts } from '@/pages/Posts';

export const useSortedPosts = (posts: IPosts[], sort: string) => {
  const sortedPosts = useMemo(() => {
    if (sort === 'title')
      return [...posts].sort((a, b) => a.title.localeCompare(b.title));
    else if (sort === 'body')
      return [...posts].sort((a, b) => a.body.localeCompare(b.body));
    return [...posts].sort((a, b) => a.id - b.id);
  }, [sort, posts]);
  return sortedPosts;
};

export const usePosts = (posts: IPosts[], sort: string, query: string) => {
  const sortedPosts = useSortedPosts(posts, sort);
  const sortedAndSearchedPosts = useMemo(() => {
    if (query !== '') {
      return sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      );
    }
    return sortedPosts;
  }, [query, sortedPosts]);
  return sortedAndSearchedPosts;
};
