import React, { useState, useRef } from "react";
import PostList from "./components/UI/PostList";
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

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title: title,
      body: body
    }
    setPosts([...posts, newPost]);
    setTitle('');
    setBody('');
    console.log(newPost);
  };

  return (
    <div className="App">
      <form>
        {/* Управлемый компонент */}
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton type="submit" onClick={addNewPost}>
          Создать пост
        </MyButton>
      </form>
      <PostList posts={posts} title="Список постов" />
    </div>
  );
}

export default App;
