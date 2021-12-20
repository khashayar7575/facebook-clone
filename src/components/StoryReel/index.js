import Story from "./Story";
import styles from "./index.module.css";
function StoryReel({ className }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <Story
        imageSrc="/images/story-bg.jpeg"
        text="Abbas"
        profilePictureSrc="https://avatars.githubusercontent.com/u/26652092?v=4"
      />
      <Story
        imageSrc="/images/story-bg.jpeg"
        text="Abbas"
        profilePictureSrc="https://avatars.githubusercontent.com/u/26652092?v=4"
      />
      <Story
        imageSrc="/images/story-bg.jpeg"
        text="Abbas"
        profilePictureSrc="https://avatars.githubusercontent.com/u/26652092?v=4"
      />
      <Story
        imageSrc="/images/story-bg.jpeg"
        text="Abbas"
        profilePictureSrc="https://avatars.githubusercontent.com/u/26652092?v=4"
      />
    </div>
  );
}

export default StoryReel;
