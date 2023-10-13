"use client";

import { Flex, IconButton, Text } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString);
  };
  return (
    <Flex align="center" gap="2">
      <Text fontSize="sm">
        Page {currentPage} of {pageCount}
      </Text>

      <IconButton
        aria-label="double-right"
        isDisabled={currentPage === 1}
        icon={<HiOutlineChevronDoubleLeft size="30" />}
        onClick={() => changePage(1)}
      />
      <IconButton
        aria-label="double-right"
        isDisabled={currentPage === 1}
        icon={<BsChevronLeft size="30" />}
        onClick={() => changePage(currentPage - 1)}
      />
      <IconButton
        aria-label="double-right"
        isDisabled={currentPage === pageCount}
        icon={<BsChevronRight size="30" />}
        onClick={() => changePage(currentPage + 1)}
      />
      <IconButton
        aria-label="double-right"
        isDisabled={currentPage === pageCount}
        icon={<HiOutlineChevronDoubleRight size="30" />}
        onClick={() => changePage(pageCount)}
      />
    </Flex>
  );
};

export default Pagination;
