import { FunctionComponent } from "react";
import PoweredBySection from "../components/PoweredBySection";
import TokenStatisticsContainer from "../components/TokenStatisticsContainer";
import CardContainer from "../components/CardContainer";
import CardForm from "../components/CardForm";
import MultichainMemecoinCard from "../components/MultichainMemecoinCard";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
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
