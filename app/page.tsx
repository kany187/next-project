import { Box } from "@chakra-ui/react";
import SectionOne from "./components/Home/SectionOne";
import SectionThree from "./components/Home/SectionThree";
import SectionTwo from "./components/Home/SectionTwo";
import SectionFour from "./components/Home/SectionFour";

export default function Home() {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <Box pt="20">
        <SectionThree />
      </Box>
      <SectionFour />
    </>
  );
}
