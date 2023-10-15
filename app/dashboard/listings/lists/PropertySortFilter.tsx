"use client";

import { Box, Select } from "@chakra-ui/react";
import { Property } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";

const prop: { label: string; value: keyof Property }[] = [
  { label: "Newest listings", value: "status" },
  { label: "Price (High to Low)", value: "price" },
  { label: "Price (Low to High)", value: "price" },
  { label: "Bedrooms", value: "bed" },
  { label: "Bathrooms", value: "bath" },
];

interface Props {
  search: any;
}
const PropertySortFilter = ({ search }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <Box>
      <Select
        placeholder="Newest listings"
        width="50"
        color="gray"
        onChange={(e) => {
          const prop = e.target.value;
          const params = new URLSearchParams();
          if (prop) params.append("orderBy", prop);
          if (searchParams.get("listingStatus"))
            params.append("listingStatus", searchParams.get("listingStatus")!);
          const query = params.size ? "?" + params.toString() : "";
          router.push("/listings/lists" + query);
        }}
      >
        {prop.map((p) => (
          <option key={p.value} value={p.value || ""}>
            {p.label}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default PropertySortFilter;
