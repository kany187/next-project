import { Card, Flex, Badge, Text } from "@chakra-ui/react";
import Image from "next/image";

interface Props {
  label: string;
  value: string;
  img: string;
}

const DisplayCard = ({ label, value, img }: Props) => {
  return (
    <Card borderRadius="10px" overflow="hidden" maxW="md">
      <Flex alignItems="center" justifyContent="space-between">
        <Text
          color="whiteAlpha.900"
          as="b"
          fontSize="xl"
          pos="absolute"
          top="2"
          left="2"
          zIndex="1"
        >
          {label}
        </Text>
        <Badge
          px="3"
          colorScheme="gray"
          borderRadius="full"
          pos="absolute"
          top="2"
          right="2"
          zIndex="1"
        >
          {value}
        </Badge>
      </Flex>
      <div style={{ width: "100%", height: "250px" }}>
        <Image src={img} alt="shot image" width={3890} height={2300} />
      </div>
    </Card>
  );
};

export default DisplayCard;

//
