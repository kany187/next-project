import React from "react";
import {
  Box,
  Button,
  Card,
  Input,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";

import { PiHouseLineBold } from "react-icons/pi";
import { BiBuildingHouse } from "react-icons/bi";
import { TbBuilding } from "react-icons/tb";
import { GiPoland } from "react-icons/gi";
const Search = () => {
  return (
    <div>
      {" "}
      <Stack direction="row">
        <Input htmlSize={4} width="auto" placeholder="Lemba" />
        <Box>
          <Menu>
            <MenuButton as={Button}>Price</MenuButton>
            <MenuList>
              <MenuItem minH="100px">
                <Select placeholder="$ No min" width="50" color="gray">
                  <option>Any price</option>
                  <option>$180K</option>
                  <option>$350K</option>
                  <option>$500K</option>
                  <option>$700K</option>
                  <option>$900K</option>
                  <option>$1M</option>
                  <option>$1.2M</option>
                </Select>
                <Select placeholder="$ No max" width="50" color="gray">
                  <option>Any price</option>
                  <option>$300K</option>
                  <option>$600K</option>
                  <option>$900K</option>
                  <option>$1.2M</option>
                  <option>$1.6M</option>
                  <option>$1.8M</option>
                  <option>$2.2M</option>
                </Select>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <Menu>
            <MenuButton as={Button}>Property type</MenuButton>
            <MenuList>
              <MenuGroup title="Property type" color="black">
                <MenuItem minH="100px">
                  <Stack direction="row" spacing={4} flexWrap="wrap">
                    <Card
                      alignItems="center"
                      maxW="sm"
                      p="5"
                      bgColor="gray.200"
                    >
                      <BiBuildingHouse size="30" />
                      <Text>Any</Text>
                    </Card>
                    <Card alignItems="center" maxW="sm" p="5">
                      <PiHouseLineBold size="30" />
                      <Text>House</Text>
                    </Card>
                    <Card alignItems="center" maxW="sm" p="5">
                      <TbBuilding size="30" />
                      <Text>Appartment</Text>
                    </Card>
                    <Card alignItems="center" maxW="sm" p="5">
                      <GiPoland size="30" />
                      <Text>Land</Text>
                    </Card>
                  </Stack>
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <Menu>
            <MenuButton as={Button}>Room</MenuButton>
            <MenuList>
              <MenuGroup title="Bedrooms" color="black">
                <MenuItem minH="50px">
                  <Select placeholder="No min" width="50" color="gray" mr="4">
                    <option>Any price</option>
                    <option>Studio</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Select>
                  <Select placeholder="No max" width="50" color="gray">
                    <option>Any price</option>
                    <option>Studio</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Select>
                </MenuItem>
              </MenuGroup>
              <MenuGroup title="Bathrooms" color="black">
                <MenuItem minH="50px">
                  <Select placeholder="No min" width="50" color="gray" mr="4">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Select>
                  <Select placeholder="No max" width="50" color="gray">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Select>
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Box>
        <Select placeholder="Listing status" width="50" color="gray"></Select>
        <Select placeholder="More" width="50" color="gray"></Select>
        <Button>Save search</Button>
      </Stack>
    </div>
  );
};

export default Search;
