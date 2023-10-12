"use client";

import { Alert, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { createPropertySchema } from "@/app/validationSchema";
import { z } from "zod";
import ErrorMessage from "@/app/components/Form/ErrorMessage";
import Spinner from "@/app/components/Form/Spinner";

type PropertyForm = z.infer<typeof createPropertySchema>;

const page = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PropertyForm>({
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
          <Input placeholder="street" {...register("streetAddress")} />

          <ErrorMessage>{errors.streetAddress?.message}</ErrorMessage>
        </FormControl>

        <Input placeholder="city" {...register("city")} />
        <ErrorMessage>{errors.city?.message}</ErrorMessage>
        <Input placeholder="country" {...register("country")} />
        <ErrorMessage>{errors.country?.message}</ErrorMessage>
        <Input placeholder="price" {...register("price")} />
        <ErrorMessage>{errors.price?.message}</ErrorMessage>
        <Input placeholder="bed" {...register("bed")} />
        <ErrorMessage>{errors.bed?.message}</ErrorMessage>
        <Input placeholder="bath" {...register("bath")} />
        <ErrorMessage>{errors.bath?.message}</ErrorMessage>
        <Button disabled={isSubmitting} type="submit">
          Submit {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default page;
