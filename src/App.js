import React, { useState } from "react";
import PostList from "./components/UI/PostList";
import "./styles/App.css";
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  let [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "Python", body: "Description" },
    { id: 3, title: "ABAP", body: "Description" },
    { id: 4, title: "Java", body: "Description" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }}></hr>

      <div>
        <MySelect 
        deafultValue="Сортировка по" 
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'names', name: 'По описанию'}]} 
          />
      </div>

      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Список постов" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
      )}
    </div>
  );
}

export default App;
