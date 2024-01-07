import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PostService from '@/API/PostService';
import Loader from '@/components/UI/loader/Loader';
import { useFetchingById } from '@/hooks/useFetching';

import { IPosts } from './Posts';

interface IComments {
  id: number;
  email: string;
  body: string;
}

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState<IPosts | null>(null);
  const [comments, setComments] = useState<IComments[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fetchPostById, isLoading, error] = useFetchingById(async () => {
    let response;
    if (params.id) {
      response = await PostService.getById(+params.id);
      setPost(response.data);
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fetchComments, isComLoading, comError] = useFetchingById(async () => {
    let response;
    if (params.id) {
      response = await PostService.getCommentsByPostId(+params.id);
      setComments(response.data);
    }
  });

  useEffect(() => {
    if (params.id) {
      fetchPostById(+params.id);
      fetchComments(+params.id);
    }
  }, []);
  return (
    <div>
      <h1>Post number {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        post && (
          <p>
            {post.id}. {post.title}
          </p>
        )
      )}
      <h3 style={{ margin: '30px' }}>Comments</h3>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comm) => {
            return (
              <div style={{ marginTop: '20px' }} key={comm.id}>
                <h2>{comm.email}</h2>
                <p>{comm.body}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
