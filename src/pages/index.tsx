import { Icon } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { LogoWhite } from "../assets/icons";
import Share from "../components/share";

import styles from "../styles/Home.module.scss";
import { useEffect, useRef, useState } from "react";
import WaitingScreen from "../screens/waiting";
import OverviewScreen from "../screens/overview";
import ControlPage from "../components/control-page";
import ReactPageScroller from "../lib";
import Header from "../components/header";
import Footer from "../components/footer";
import { Page } from "../types";
const PageProps: Page[] = [
  {
    id: 0,
    title: "overview",
  },
  {
    id: 1,
    title: "our team",
  },
  // {
  //   id: 2,
  //   title: "our team",
  // },
];
const Home: NextPage = () => {
  const [show, setShow] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = (number: any) => {
    setCurrentPage(number);
  };
  const handleBeforePageChange = (number: any) => {
    setCurrentPage(number);
  };

  return (
    <div>
      <Head>
        <title>King playing in the space</title>
        <meta
          name="description"
          content="King playing in the space, well well well"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {show && (
        <main className={styles.main}>
          <WaitingScreen show={show} />
        </main>
      )}
      {!show && (
        <main id="main">
          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <Header />
          <ReactPageScroller
            pageOnChange={handlePageChange}
            customPageNumber={currentPage}
            onBeforePageScroll={handleBeforePageChange}
          >
            <OverviewScreen hidden={currentPage !== 0 ? true : false} />
            <div id="screen">123</div>
          </ReactPageScroller>
          <Footer />

          <ControlPage
            handlePageChange={handlePageChange}
            page={PageProps}
            currentPage={currentPage}
          />
        </main>
      )}
    </div>
  );
};

export default Home;
