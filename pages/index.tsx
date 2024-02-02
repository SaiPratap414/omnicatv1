import type { NextPage } from "next";
import PoweredBySection from "../components/powered-by-section";
import TokenStatisticsContainer from "../components/token-statistics-container";
import CardContainer from "../components/card-container";
import CardForm from "../components/card-form";
import MultichainMemecoinCard from "../components/multichain-memecoin-card";
import styles from "./index.module.css";

const LandingPage: NextPage = () => {
  return (
    <div className={styles.landingPage}>
      <PoweredBySection />
      <TokenStatisticsContainer />
      <div className={styles.landingPageChild} />
      <CardContainer />
      <div className={styles.landingPageChild} />
      <CardForm />
      <MultichainMemecoinCard />
    </div>
  );
};

export default LandingPage;
