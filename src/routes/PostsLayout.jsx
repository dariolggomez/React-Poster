import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";

function PostsLayout() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default PostsLayout;
