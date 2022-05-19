import React, { useState } from "react";
import PostList from "./components/UI/PostList"
import "./styles/App.css";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  let [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "Python", body: "Description" },
    { id: 3, title: "ABAP", body: "Description" },
    { id: 4, title: "Java", body: "Description" },
  ]);

  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder="Название поста"></MyInput>
        <MyInput type="text" placeholder="Описание поста"></MyInput>
        <MyButton>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов" />
    </div>
  );
}

export default App;
