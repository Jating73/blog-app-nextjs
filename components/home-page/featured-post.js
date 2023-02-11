import PostsGrid from "../posts/posts-grid";
import classes from "./featured-post.module.css";

function FeaturePost(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturePost;
