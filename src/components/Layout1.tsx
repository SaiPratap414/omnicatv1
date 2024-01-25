import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import styles from "./Layout1.module.css";

const Layout1: FunctionComponent = () => {
  return (
    <section className={styles.layout372}>
      <div className={styles.frameParent}>
        <FrameComponent heading="$OMNI is now live on 7 chains" />
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.cardWrapper}>
                <div className={styles.card}>
                  <div className={styles.content}>
                    <div className={styles.frameDiv}>
                      <div className={styles.frameParent1}>
                        <div className={styles.logosAndSymbolsParent}>
                          <img
                            className={styles.logosAndSymbolsIcon}
                            loading="eager"
                            alt=""
                            src="/logos-and-symbols.svg"
                          />
                          <div className={styles.heading}>arb</div>
                        </div>
                        <div className={styles.layerX00201Parent}>
                          <div className={styles.layerX00201}>
                            <img
                              className={styles.icon}
                              loading="eager"
                              alt=""
                              src="/-1421394342400.svg"
                            />
                          </div>
                          <div className={styles.heading1}>eth</div>
                        </div>
                        <div className={styles.frameParent2}>
                          <img
                            className={styles.frameChild}
                            loading="eager"
                            alt=""
                            src="/group-1.svg"
                          />
                          <div className={styles.heading2}>bsc</div>
                        </div>
                        <div className={styles.simpleIconspolygonParent}>
                          <img
                            className={styles.simpleIconspolygon}
                            loading="eager"
                            alt=""
                            src="/simpleiconspolygon.svg"
                          />
                          <div className={styles.heading3}>poly</div>
                        </div>
                        <div className={styles.image3Parent}>
                          <img
                            className={styles.image3Icon}
                            loading="eager"
                            alt=""
                            src="/image-3@2x.png"
                          />
                          <div className={styles.heading4}>canto</div>
                        </div>
                      </div>
                      <div className={styles.frameItem} />
                    </div>
                    <div className={styles.headingParent}>
                      <b className={styles.heading5}>
                        0x9e20461bc2c4c980f62f1B279D71734207a6A356
                      </b>
                      <input className={styles.ioncopy} type="checkbox" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameWrapper2}>
              <div className={styles.cardContainer}>
                <div className={styles.card1}>
                  <div className={styles.content1}>
                    <div className={styles.frameParent3}>
                      <div className={styles.frameWrapper3}>
                        <div className={styles.layerX00201Group}>
                          <div className={styles.layerX002011}>
                            <img
                              className={styles.baseLogo1Icon}
                              loading="eager"
                              alt=""
                              src="/baselogo-1.svg"
                            />
                          </div>
                          <div className={styles.heading6}>base</div>
                        </div>
                      </div>
                      <div className={styles.frameInner} />
                    </div>
                    <div className={styles.headingGroup}>
                      <b className={styles.heading7}>
                        0xC48E605c7b722a57277e087a6170B9E227e5AC0
                      </b>
                      <input className={styles.ioncopy1} type="checkbox" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper4}>
            <div className={styles.frameWrapper5}>
              <div className={styles.cardFrame}>
                <div className={styles.card2}>
                  <div className={styles.content2}>
                    <div className={styles.frameParent4}>
                      <div className={styles.frameWrapper6}>
                        <div className={styles.formkitsolanaParent}>
                          <img
                            className={styles.formkitsolanaIcon}
                            loading="eager"
                            alt=""
                            src="/formkitsolana.svg"
                          />
                          <div className={styles.heading8}>sol</div>
                        </div>
                      </div>
                      <div className={styles.frameChild1} />
                    </div>
                    <div className={styles.headingContainer}>
                      <b className={styles.heading9}>
                        7mmXL6Et4SbpDs2iXoZQ3oPEeXeAiyETxh1QjDNi5qn
                      </b>
                      <input className={styles.ioncopy2} type="checkbox" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.headingWrapper}>
          <div className={styles.heading10}>DEX Screener</div>
        </button>
      </div>
    </section>
  );
};

export default Layout1;
