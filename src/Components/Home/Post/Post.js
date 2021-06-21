import PostItem from "./Postitem";
import TitlePost from "./TitlePost";
import styles from "./Post.module.css"
import { useSelector } from "react-redux";

const Post = (props) => {
    const post = useSelector(state => state.items);
  document.body.style.marginTop = "6rem";
  return (
    <div>
      <TitlePost/>
      {post.length === 0 && <h1 className={styles.nopost}>No Posts Yet</h1>}
      {post.map((post) => 
          <PostItem  key = {post.id} id={post.id} name={post.name} age={post.age} relation={post.relation} />
      )}
    </div>
  );
};
export default Post;
