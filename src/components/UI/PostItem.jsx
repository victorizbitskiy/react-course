import React from 'react';

const PostItem = ({post}) => {
  return (
    <div className="post">
      <div className="post_content">
        <strong>{post.id}. {post.title}</strong>
        <div>{post.title.body}</div>
      </div>
      <div className="post_btns">
        <button>Удалить</button>
      </div>
    </div>
  );
};

export default PostItem;