import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import Loader from "../components/UI/loader/Loader"

const PostIdPage = () => {
  const params = useParams()
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })
  useEffect(() => {
    fetchPostById(params.id)
  }, [])

  return (
    <div>
      <h1>Вы открыли страницу поста c ID = {params.id}</h1>
      {isLoading
        ? <Loader />
        : <div>
            <div>
              {post.id}. {post.title}
            </div> 
            <div>
              {post.body}
            </div>
          </div>
      }
    </div>
  );
};

export default PostIdPage;