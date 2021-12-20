import { useEffect, useState } from "react";
import { firestore } from "../../../../firebase/firebase";
import Post from "./Post";
import styles from "./index.module.css";
function PostsList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    firestore
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);
  return (
    <div className={styles.postsList}>
      {posts?.map((post) => (
        <Post
          text={post?.data?.text}
          timestamp={post?.data?.timestamp}
          username={post?.data?.username}
          profilePicSrc={post?.data?.photoURL}
        />
      ))}
    </div>
  );
}

export default PostsList;
