import React, { useState } from "react";
import PostList from "./components/UI/PostList";
import "./styles/App.css";
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  let [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "1 JavaScript Description" },
    { id: 2, title: "Python", body: "10 Python Description" },
    { id: 3, title: "ABAP", body: "5 ABAP Description" },
    { id: 4, title: "Java", body: "8 Java Description" },
  ]);
  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sortType) => {
    setSelectedSort(sortType);
    setPosts([...posts].sort((a, b) => a[sortType].localeCompare(b[sortType])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }}></hr>

      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          deafultValue="Сортировка по"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
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
