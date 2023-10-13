import { Box, Select } from "@chakra-ui/react";
import { ListingStatus, Status } from "@prisma/client";
import React from "react";

const statuses: { label: string; value?: ListingStatus }[] = [
  { label: "All" },
  { label: "For sale", value: "FOR_SALE" },
  { label: "Pending", value: "PENDING" },
  { label: "Sold", value: "SOLD" },
];
const PropertyStatusFliter = () => {
  return (
    <Box>
      <Select placeholder="Listing status" width="50" color="gray">
        {statuses.map((status) => (
          <option key={status.value} value={status.value}>
            {status.label}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default PropertyStatusFliter;
