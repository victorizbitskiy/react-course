import React, { useMemo, useState } from "react";
import PostList from "./components/UI/PostList";
import "./styles/App.css";
import PostForm from "./components/UI/PostForm";
import PostFilter from "./components/UI/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
  let [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "1 JavaScript Description" },
    { id: 2, title: "Python", body: "10 Python Description" },
    { id: 3, title: "ABAP", body: "5 ABAP Description" },
    { id: 4, title: "Java", body: "8 Java Description" },
  ]);
  const [filter, setFilter] = useState({ sortType: "", query: "" });
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    if (filter.sortType) {
      return [...posts].sort((a, b) =>
        a[filter.sortType].localeCompare(b[filter.sortType])
      );
    }
    return posts;
  }, [filter.sortType, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>Создать</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }}></hr>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Список постов"
      />
    </div>
  );
}

export default App;
