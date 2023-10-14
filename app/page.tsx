import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { Property } from "@prisma/client";
import { Metadata } from "next";
import DisplayCard from "./DisplayCard";
import SectionFour from "./components/Home/SectionFour";
import SectionOne from "./components/Home/SectionOne";
import SectionThree from "./components/Home/SectionThree";

export default function Home() {
  const rowData: { label: string; value: keyof Property; img: string }[] = [
    {
      label: "New Listings",
      value: "propertyType",
      img: "https://res.cloudinary.com/dcmbyy4e7/image/upload/w_3890,h_2300,c_fit/v1697270566/congo-estate/xnetsodzkqzq3qupymoz.jpg",
    },
    {
      label: "Lands",
      value: "propertyType",
      img: "https://res.cloudinary.com/dcmbyy4e7/image/upload/v1697314877/congo-estate/cbssfk0bphasbrqb0pti.jpg",
    },
    {
      label: "Price Reduced",
      value: "propertyType",
      img: "https://res.cloudinary.com/dcmbyy4e7/image/upload/v1697308756/congo-estate/yot1hqlra1unenc6gdbj.jpg",
    },
    {
      label: "Office Spaces",
      value: "propertyType",
      img: "https://res.cloudinary.com/dcmbyy4e7/image/upload/v1697308868/congo-estate/i92dsy9zr39ajzavbauk.jpg",
    },
    {
      label: "Apartment",
      value: "propertyType",
      img: "https://res.cloudinary.com/dcmbyy4e7/image/upload/v1697310442/congo-estate/yhnjvmpcqntp2zzvwc5o.jpg",
    },
    {
      label: "Recently Sold",
      value: "propertyType",
      img: "https://res.cloudinary.com/dcmbyy4e7/image/upload/f_auto,q_auto/v1/congo-estate/pt49f17cbhhz05uexaac",
    },
  ];

  return (
    <>
      <SectionOne />
      <Heading
        color="black"
        size="md"
        pt="20"
        ml={{ base: 0, sm: "100px", md: "100px", lg: "100px", xl: "120px" }}
      >
        Browse homes in Lemba, Kinshasa
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
            key={hCard.img}
            label={hCard.label}
            value={hCard.value}
            img={hCard.img}
          />
        ))}
      </SimpleGrid>
      <Box pt="20">
        <SectionThree />
      </Box>
      <SectionFour />
    </>
  );
}

export const metadata: Metadata = {
  title:
    "Congo-estate.com | Homes for Sales, Apartments & and Lands for sale. Congo-estate.com",
  description:
    "Search homes for sale, new homes, apartments, and houses for rent. See property values.",
};
