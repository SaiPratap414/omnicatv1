import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer4}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img className={styles.omnicatIcon} alt="" src="/omnicat.svg" />
          <div className={styles.link}>The First ever Multichain Memecoin</div>
        </div>
        <div className={styles.links}>
          <div className={styles.link1}>Link One</div>
          <div className={styles.link2}>Link Two</div>
          <div className={styles.link3}>Link Three</div>
          <div className={styles.link4}>Link Four</div>
          <div className={styles.link5}>Link Five</div>
        </div>
        <div className={styles.socialLinks}>
          <div className={styles.vectorParent}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img className={styles.subtractIcon} alt="" src="/subtract.svg" />
          </div>
        </div>
      </div>
      <div className={styles.link6}>© All rights reserved, 2024</div>
      <div className={styles.credits}>
        <div className={styles.divider} />
        <div className={styles.row}>
          <div className={styles.text}>2023 Relume. All right reserved.</div>
          <div className={styles.footerLinks}>
            <div className={styles.link7}>Privacy Policy</div>
            <div className={styles.link8}>Terms of Service</div>
            <div className={styles.link9}>Cookies Settings</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
