import React, { useState } from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/App.css";

function App() {
  let [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "Python", body: "Description" },
    { id: 3, title: "ABAP", body: "Description" },
    { id: 4, title: "Java", body: "Description" },
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title="Список постов" />
    </div>
  );
}

export default App;
