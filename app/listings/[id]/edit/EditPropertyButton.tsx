import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const EditPropertyButton = ({ propertyId }: { propertyId: number }) => {
  return (
    <Button>
      <Link href={`/properties/${propertyId}/edit`}>Edit</Link>
    </Button>
  );
};

export default EditPropertyButton;
