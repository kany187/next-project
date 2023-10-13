"use client";

import { Box, Select } from "@chakra-ui/react";
import { ListingStatus } from "@prisma/client";
import { useRouter } from "next/navigation";
import React from "react";

const statuses: { label: string; value?: ListingStatus }[] = [
  { label: "All" },
  { label: "For sale", value: "FOR_SALE" },
  { label: "Pending", value: "PENDING" },
  { label: "Sold", value: "SOLD" },
];
const PropertyStatusFliter = () => {
  const router = useRouter();

  return (
    <Box>
      <Select
        placeholder="Listing status"
        width="50"
        color="gray"
        onChange={(e) => {
          const status = e.target.value;
          const query = status ? `?listingStatus=${status}` : "";
          router.push("/listings/lists" + query);
        }}
      >
        {statuses.map((status) => (
          <option key={status.value} value={status.value || ""}>
            {status.label}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default PropertyStatusFliter;
