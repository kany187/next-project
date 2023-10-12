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
          {errors.streetAddress && (
            <Text color="red">{errors.streetAddress.message}</Text>
          )}
        </FormControl>

        <Input placeholder="city" color="black" {...register("city")} />
        {errors.city && <Text color="red">{errors.city.message}</Text>}
        <Input placeholder="country" color="black" {...register("country")} />
        {errors.country && <Text color="red">{errors.country.message}</Text>}
        <Input placeholder="price" color="black" {...register("price")} />
        {errors.price && <Text color="red">{errors.price.message}</Text>}
        <Input placeholder="bed" color="black" {...register("bed")} />
        {errors.bed && <Text color="red">{errors.bed.message}</Text>}
        <Input placeholder="bath" color="black" {...register("bath")} />
        {errors.bath && <Text color="red">{errors.bath.message}</Text>}
        <Button type="submit">Submit </Button>
      </form>
    </div>
  );
};

export default page;
