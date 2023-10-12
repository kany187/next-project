"use client";

import { Alert, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import ErrorMessage from "@/app/components/Form/ErrorMessage";
import Spinner from "@/app/components/Form/Spinner";
import { createPropertySchema } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Property } from "@prisma/client";

type PropertyFormData = z.infer<typeof createPropertySchema>;

const PropertyForm = ({ property }: { property?: Property }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PropertyFormData>({
    resolver: zodResolver(createPropertySchema),
  });

  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      await axios.post("/api/propertie", data);
      router.push("/listings");
    } catch (error) {
      setSubmitting(false);
      setError("An unexpected error occured");
    }
  });
  return (
    <div className="max-w-xl">
      {error && (
        <Alert status="error" color="red">
          {error}
        </Alert>
      )}

      <form className="space-y-3" onSubmit={onSubmit}>
        <FormControl>
          <FormLabel>Street</FormLabel>
          <Input
            defaultValue={property?.streetAddress}
            placeholder="street"
            {...register("streetAddress")}
          />

          <ErrorMessage>{errors.streetAddress?.message}</ErrorMessage>
        </FormControl>

        <Input
          defaultValue={property?.city}
          placeholder="city"
          {...register("city")}
        />
        <ErrorMessage>{errors.city?.message}</ErrorMessage>
        <Input
          defaultValue={property?.country}
          placeholder="country"
          {...register("country")}
        />
        <ErrorMessage>{errors.country?.message}</ErrorMessage>
        <Input
          defaultValue={property?.price}
          placeholder="price"
          {...register("price")}
        />
        <ErrorMessage>{errors.price?.message}</ErrorMessage>
        <Input
          defaultValue={property?.bed}
          placeholder="bed"
          {...register("bed")}
        />
        <ErrorMessage>{errors.bed?.message}</ErrorMessage>
        <Input
          defaultValue={property?.bath}
          placeholder="bath"
          {...register("bath")}
        />
        <ErrorMessage>{errors.bath?.message}</ErrorMessage>
        <Button disabled={isSubmitting} type="submit">
          Submit {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default PropertyForm;
