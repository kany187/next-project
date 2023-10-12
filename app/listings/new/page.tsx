"use client";

import {
  Alert,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { createPropertySchema } from "@/app/validationSchema";
import { z } from "zod";
import ErrorMessage from "@/app/components/Form/ErrorMessage";

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
  return (
    <div className="max-w-xl">
      {error && (
        <Alert status="error" color="red">
          {error}
        </Alert>
      )}

      <form
        className="space-y-3"
        onSubmit={handleSubmit((data) => {
          try {
            axios.post("/api/properties", data);
            // router.push("/listings");
          } catch (error) {
            setError("An unexpected error occured");
          }
        })}
      >
        <FormControl>
          <FormLabel>Street</FormLabel>
          <Input
            placeholder="street"
            color="black"
            {...register("streetAddress")}
          />

          <ErrorMessage>{errors.streetAddress?.message}</ErrorMessage>
        </FormControl>

        <Input placeholder="city" color="black" {...register("city")} />
        <ErrorMessage>{errors.city?.message}</ErrorMessage>
        <Input placeholder="country" color="black" {...register("country")} />
        <ErrorMessage>{errors.country?.message}</ErrorMessage>
        <Input placeholder="price" color="black" {...register("price")} />
        <ErrorMessage>{errors.price?.message}</ErrorMessage>
        <Input placeholder="bed" color="black" {...register("bed")} />
        <ErrorMessage>{errors.bed?.message}</ErrorMessage>
        <Input placeholder="bath" color="black" {...register("bath")} />
        <ErrorMessage>{errors.bath?.message}</ErrorMessage>
        <Button type="submit">Submit </Button>
      </form>
    </div>
  );
};

export default page;
