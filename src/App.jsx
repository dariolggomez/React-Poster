import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {

  const [renderModal, setRenderModal] = useState(false);

  function showModalHandler() {
    setRenderModal(true);
  }

  function hideModalHandler() {
    setRenderModal(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList hideModalHandler={hideModalHandler} renderModal={renderModal}/>
      </main>
    </>
  );
}

export default App;
