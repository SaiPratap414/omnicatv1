import { FunctionComponent } from "react";
import styles from "./CardForm.module.css";

const CardForm: FunctionComponent = () => {
  return (
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
          <img className={styles.image5Icon} alt="" src="/Matcha.png" />
          <div className={styles.heading1}>Matcha</div>
        </div>
        <div className={styles.sushiswapSushiLogoD7d611c0dParent}>
          <img className={styles.image5Icon} alt="" src="/ss.png" />
          <div className={styles.heading1}>Slingshot</div>
        </div>
        <div className={styles.sushiswapSushiLogoD7d611c0dParent}>
          <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
          <div className={styles.heading1}>Raydium</div>
        </div>
      </div>
    </div>
  );
};

export default CardForm;
