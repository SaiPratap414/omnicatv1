import { FunctionComponent } from "react";
import PoweredBySection from "../components/PoweredBySection";
import TokenStatisticsContainer from "../components/TokenStatisticsContainer";
import CardContainer from "../components/CardContainer";
import styles from "./EXP.module.css";

const EXP: FunctionComponent = () => {
  return (
    <div className={styles.exp}>
      <PoweredBySection />
      <TokenStatisticsContainer />
      <CardContainer />
      <div className={styles.layout372}>
        <div className={styles.layout372Inner}>
          <div className={styles.frameWrapper}>
            <div className={styles.contentWrapper}>
              <div className={styles.content}>
                <div className={styles.headingWrapper}>
                  <div className={styles.heading}>
                    Buy $OMNI now on your favorite chain
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.sushiswapSushiLogoD7d611c0dParent}>
            <img
              className={styles.sushiswapSushiLogoD7d611c0dIcon}
              alt=""
              src="/sushiswap-sushi-logo-d7d611c0dd-1@2x.png"
            />
            <div className={styles.heading1}>Sushiswap</div>
          </div>
          <div className={styles.sushiswapSushiLogoD7d611c0dParent}>
            <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
            <div className={styles.heading1}>Jupiter</div>
          </div>
          <div className={styles.sushiswapSushiLogoD7d611c0dParent}>
            <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
            <div className={styles.heading1}>Matcha</div>
          </div>
          <div className={styles.sushiswapSushiLogoD7d611c0dParent}>
            <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
            <div className={styles.heading1}>Slingshot</div>
          </div>
          <div className={styles.sushiswapSushiLogoD7d611c0dParent}>
            <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
            <div className={styles.heading1}>Raydium</div>
          </div>
        </div>
      </div>
      <div className={styles.footer4}>
        <div className={styles.content1}>
          <div className={styles.logo}>
            <img className={styles.omnicatIcon} alt="" src="/omnicat.svg" />
            <div className={styles.link}>
              The First ever Multichain Memecoin
            </div>
          </div>
          <div className={styles.links}>
            <div className={styles.link1}>Link One</div>
            <div className={styles.link1}>Link Two</div>
            <div className={styles.link1}>Link Three</div>
            <div className={styles.link1}>Link Four</div>
            <div className={styles.link1}>Link Five</div>
          </div>
          <div className={styles.socialLinks}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector.png" />
              <img className={styles.vectorIcon} alt="" src="/subtract.svg" />
            </div>
          </div>
        </div>
        <div className={styles.link6}>© All rights reserved, 2024</div>
        <div className={styles.credits}>
          <div className={styles.divider} />
          <div className={styles.row}>
            <div className={styles.text}>2023 Relume. All right reserved.</div>
            <div className={styles.row}>
              <div className={styles.link7}>Privacy Policy</div>
              <div className={styles.link7}>Terms of Service</div>
              <div className={styles.link7}>Cookies Settings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EXP;
