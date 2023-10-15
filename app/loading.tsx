"use client";

import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import DisplayCard from "./DisplayCard";
import SectionFour from "./components/Home/SectionFour";
import SectionOne from "./components/Home/SectionOne";
import SectionThree from "./components/Home/SectionThree";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HomeLoadingPage = () => {
  const rowData = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <SectionOne />
      <Heading
        color="black"
        size="md"
        pt="20"
        ml={{ base: 0, sm: "100px", md: "100px", lg: "100px", xl: "120px" }}
      >
        <Skeleton width="20rem" />
      </Heading>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        spacing={4}
        pt="10"
        justifyContent={"center"}
        alignContent={"center"}
        display={"flex"}
        flexWrap={"wrap"}
      >
        {rowData.map((hCard) => (
          <DisplayCard
            key={hCard}
            label={<Skeleton />}
            value={<Skeleton />}
            img={hCard || <Skeleton />}
          />
        ))}
        {/* <Skeleton /> */}
      </SimpleGrid>
      <Box pt="20">
        <SectionThree />
      </Box>
      <SectionFour />
    </div>
  );
};

export default HomeLoadingPage;
