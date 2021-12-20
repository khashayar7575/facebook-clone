import StoryReel from "../../StoryReel";
import PostForm from "./PostForm";
import PostsList from "./PostsList";
import styles from "./index.module.css";
function Feed({ className }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <StoryReel className={styles.storyReel} />
      <PostForm />
      <PostsList />
    </div>
  );
}

export default Feed;
