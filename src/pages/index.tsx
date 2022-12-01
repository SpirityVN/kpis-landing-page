import { Box, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { useState, useEffect } from "react";
import WaitingScreen from "../screens/waiting";
import OverviewScreen from "../screens/overview";
import ControlPage from "../components/control-page";
import ReactPageScroller from "../lib";
import Header from "../components/header";
import Footer from "../components/footer";
import { Page } from "../types";
import ComingSoonScreen from "../screens/coming-soon";
import StoryScreen from "../screens/story";
import { isBrowser } from "react-device-detect";
const PageProps: Page[] = [
  {
    id: 0,
    title: "overview",
  },
  {
    id: 1,
    title: "story",
  },
  {
    id: 2,
    title: "our team",
  },
];
const Home: NextPage = () => {
  const [show, setShow] = useState(true);

  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = (number: any) => {
    setCurrentPage(number);
  };
  const handleBeforePageChange = (number: any) => {
    setCurrentPage(number);
  };
  useEffect(() => {
    let isSubcribled = true;
    if (show && isSubcribled) {
      setTimeout(() => {
        setShow(false);
      }, 8000);
    }
    return () => {
      isSubcribled = false;
    };
  }, []);

  return isBrowser ? (
    <div>
      <Head>
        <title>King playing in the space</title>
        <meta property="og:type" content={"website"} />
        <meta property="og:site_name" content={"King playing in the space"} />
        <meta
          name="description"
          content="King playing in the space, well well well"
        />
        <meta property="og:title" content="King playing in the space" />
        <meta
          property="og:description"
          content="In the 22nd century, people began to move in space more easily. So this is an opportunity for them to exploit resources on other planets and build new societies. To do that, each person or a group of people (called a Guild) is required to mine resources on earth or buy them from other people or groups of miners through the market to build spaceships and launch them into space. Sure, when you discover a new planet, you will be rewarded with ESPACE tokens."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={"https://kpis-game.vercel.app/"} />
        <meta name="twitter:title" content={"King playing in the space"} />
        <meta
          name="twitter:description"
          content={
            "In the 22nd century, people began to move in space more easily. So this is an opportunity for them to exploit resources on other planets and build new societies. To do that, each person or a group of people (called a Guild) is required to mine resources on earth or buy them from other people or groups of miners through the market to build spaceships and launch them into space. Sure, when you discover a new planet, you will be rewarded with ESPACE tokens."
          }
        />
        <meta name="twitter:image" content={"/thumbnail.jpeg"} />
        <meta
          property="og:image"
          content="/thumbnail.jpeg"
          key="/thumbnail.jpeg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {show && (
        <main className={styles.main}>
          <WaitingScreen show={show} />
        </main>
      )}
      {!show && (
        <Box height={"100vh"}>
          <Box
            position={"absolute"}
            top={0}
            left={0}
            zIndex={0}
            width={"100%"}
            height={"100vh"}
            overflow={"hidden"}
            hidden={currentPage === 1 ? true : false}
          >
            <video
              id="myVideo"
              autoPlay
              loop
              muted
              src="/assets/overview-clip.mp4"
            />
          </Box>
          <Box
            position={"absolute"}
            top={0}
            left={0}
            zIndex={0}
            width={"100%"}
            height={"100vh"}
            backgroundColor={"black"}
            opacity={0.5}
          />

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
              <StoryScreen hidden={currentPage !== 1 ? true : false} />
              <ComingSoonScreen hidden={currentPage !== 2 ? true : false} />
            </ReactPageScroller>
            <Footer />

            <ControlPage
              handlePageChange={handlePageChange}
              page={PageProps}
              currentPage={currentPage}
            />
          </main>
        </Box>
      )}
    </div>
  ) : (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"100vh"}
      textAlign={"center"}
      padding={10}
    >
      <Text>
        {" "}
        Sorry, We&apos;re trying to build the interface for mobile device
      </Text>
    </Box>
  );
};

export default Home;
