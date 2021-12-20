import Header from "../../components/Header";
import Feed from "../../components/Home/Feed";
import Sidebar from "../../components/Home/Sidebar";
import styles from "./index.module.css";
function Home() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Sidebar />
        <Feed className={styles.mainFeed} />
      </main>
    </div>
  );
}

export default Home;
