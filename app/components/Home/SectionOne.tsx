import React from "react";
import {
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
          <h1 className="text-white text-7xl font-bold p-4 pt-20">
            The #1 site real estate in Congo
          </h1>
          <ul className="flex items-center justify-between space-x-4 pt-5 text-1xl">
            <li>Buy</li>
            <li>Sell</li>
            <li>Rent</li>
          </ul>
          <div className="pt-5">
            <InputGroup>
              <Input
                placeholder="Address, School, Zip or Neighborhood"
                _placeholder={{ color: "gray" }}
                size="md"
                w="400px"
                border="2px"
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
