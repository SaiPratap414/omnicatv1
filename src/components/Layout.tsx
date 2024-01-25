import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import styles from "./Layout.module.css";

const Layout: FunctionComponent = () => {
  return (
    <section className={styles.layout372}>
      <div className={styles.layout372Inner}>
        <FrameComponent heading="Buy $OMNI now on your favorite chain" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.sushiswapSushiLogoD7d611c0dParent}>
          <img
            className={styles.sushiswapSushiLogoD7d611c0dIcon}
            loading="eager"
            alt=""
            src="/sushiswap-sushi-logo-d7d611c0dd-1@2x.png"
          />
          <div className={styles.heading}>Sushiswap</div>
        </div>
        <div className={styles.image4Parent}>
          <img
            className={styles.image4Icon}
            loading="eager"
            alt=""
            src="/image-4@2x.png"
          />
          <div className={styles.heading1}>Jupiter</div>
        </div>
        <div className={styles.image5Parent}>
          <img
            className={styles.image5Icon}
            loading="eager"
            alt=""
            src="/image-5@2x.png"
          />
          <div className={styles.heading2}>Matcha</div>
        </div>
        <div className={styles.image5Group}>
          <img className={styles.image5Icon1} alt="" src="/image-5-1@2x.png" />
          <div className={styles.heading3}>Slingshot</div>
        </div>
        <div className={styles.image5Container}>
          <img className={styles.image5Icon2} alt="" src="/image-5-2@2x.png" />
          <div className={styles.heading4}>Raydium</div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
