import { useContext } from "react";
import ListContext from "../../Context/List-Context";
import PostItem from "./Postitem";
import TitlePost from "./TitlePost";


const Post = (props) => {
  const editClickHandler = (id) => {
    // console.log("editClickHandler") 
    props.onEdit(id)
  }
    const listCtx = useContext(ListContext);
  document.body.style.marginTop = "6rem";
  return (
    <div>
      <TitlePost/>
      {listCtx.items.map((post) => {
        return (
          <PostItem onClickEdit={editClickHandler} key = {post.id} id={post.id} name={post.name} age={post.age} relation={post.relation} />
        );
      })}
    </div>
  );
};
export default Post;
