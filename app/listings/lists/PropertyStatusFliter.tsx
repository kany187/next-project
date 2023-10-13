"use client";

import { Box, Select } from "@chakra-ui/react";
import { ListingStatus } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const statuses: { label: string; value?: ListingStatus }[] = [
  { label: "All" },
  { label: "For sale", value: "FOR_SALE" },
  { label: "Pending", value: "PENDING" },
  { label: "Sold", value: "SOLD" },
];
const PropertyStatusFliter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Box>
      <Select
        placeholder="Listing status"
        defaultValue={searchParams.get("status")!}
        width="50"
        color="gray"
        onChange={(e) => {
          const status = e.target.value;
          const params = new URLSearchParams();
          if (status) params.append("listingStatus", status);
          if (searchParams.get("orderBy"))
            params.append("orderBy", searchParams.get("orderBy")!);
          const query = params.size ? "?" + params.toString() : "";
          // const q = status ? `?listingStatus=${status}` : "";
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
