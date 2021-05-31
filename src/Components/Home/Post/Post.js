import { useContext} from "react";
import ListContext from "../../Context/List-Context";
import PostItem from "./Postitem";
import TitlePost from "./TitlePost";
import styles from "./Post.module.css"


const Post = (props) => {
    const listCtx = useContext(ListContext);
  document.body.style.marginTop = "6rem";
  return (
    <div>
      <TitlePost/>
      {listCtx.items.length === 0 && <h1 className={styles.nopost}>No Posts Yet</h1>}
      {listCtx.items.map((post) => 
          <PostItem  key = {post.id} id={post.id} name={post.name} age={post.age} relation={post.relation} />
      )}
    </div>
  );
};
export default Post;
