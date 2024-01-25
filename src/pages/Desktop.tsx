import { FunctionComponent } from "react";
import Header from "../components/Header";
import Layout2 from "../components/Layout2";
import Layout1 from "../components/Layout1";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.desktop1}>
      <div className={styles.navbar2}>
        <div className={styles.container}>
          <div className={styles.column}>
            <img className={styles.omnicatIcon} alt="" src="/omnicat.svg" />
          </div>
          <div className={styles.column1}>
            <div className={styles.link}>Mission</div>
            <div className={styles.link1}>Terminal</div>
            <div className={styles.link2}>Ecosystem</div>
            <div className={styles.link3}>Community</div>
            <div className={styles.link4}>Statistics</div>
          </div>
          <div className={styles.column2}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <img className={styles.subtractIcon} alt="" src="/subtract.svg" />
            </div>
          </div>
        </div>
      </div>
      <Header />
      <Layout2 />
      <div className={styles.desktop1Child} />
      <Layout1 />
      <div className={styles.desktop1Item} />
      <Layout />
      <Footer />
    </div>
  );
};

export default Desktop;
