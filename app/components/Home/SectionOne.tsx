"use client";
import React from "react";
import {
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import { AiOutlineSearch } from "react-icons/ai";

import styles from "../../page.module.css";

const SectionOne = () => {
  return (
    <div>
      <div className={styles.card}>
        <div className="flex items-center justify-center flex-col">
          <Heading
            pt="20"
            size={{ sm: "2xl", md: "2xl", lg: "4xl", xl: "4xl" }}
            color="white"
          >
            The #1 site real estate in Congo
          </Heading>
          <ul className="flex items-center justify-between space-x-4 pt-5 text-1xl">
            <li>Buy</li>
            <li>Sell</li>
            <li>Rent</li>
          </ul>
          <div className="pt-5">
            <InputGroup>
              <Input
                placeholder="Address, School, Zip or Neighborhood"
                size="md"
                w="400px"
                borderRadius="full"
                bg="white"
                focusBorderColor="white"
              />
              <InputRightElement>
                <IconButton
                  isRound={true}
                  variant="solid"
                  aria-label="Done"
                  colorScheme="teal"
                  fontSize={20}
                  icon={<AiOutlineSearch color="black" size="25" />}
                />
              </InputRightElement>
            </InputGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
