import { Badge } from "@chakra-ui/react";
import { Status } from "@prisma/client";
import React from "react";

const statusMap: Record<Status, { label: string; color: string }> = {
  NEW: { label: "NEW", color: "teal" },
  SOLD: { label: "SOLD", color: "black" },
};

const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge colorScheme={statusMap[status].color} borderRadius="full">
      {statusMap[status].label}
    </Badge>
  );
};

export default StatusBadge;
