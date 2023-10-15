"use client";

import { Card, Flex, Badge, Text } from "@chakra-ui/react";
import Image, { ImageProps } from "next/image";
import { Suspense, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ImageSkeleton from "./components/ImageSkeleton";
import { CldImage } from "next-cloudinary";
import CldImageSkeleton from "./components/CldImageSkeleton";

interface Props {
  label: string | any;
  value: string | any;
  img: string | any;
}

const DisplayCard = ({ label, value, img }: Props) => {
  const [loading, setLoading] = useState(true);

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
        {/* {loading && <Skeleton width={300} height={300} />} */}
        {/* <CldImage src={img} alt="shot image" width={600} height={600} /> */}

        {/* <CldImageSkeleton src={img} width={500} height={500} alt="img" /> */}
        {/* <ImageSkeleton src={img} width={500} height={500} alt="img" /> */}

        <Image src={img} alt="shot image" width={3890} height={2300} />
      </div>
    </Card>
  );
};

export default DisplayCard;

//
