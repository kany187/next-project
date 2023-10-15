"use client";

import { Alert, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import ErrorMessage from "@/app/dashboard/components/Form/ErrorMessage";
import Spinner from "@/app/dashboard/components/Form/Spinner";
import { PropertySchema } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Property } from "@prisma/client";
import Upload from "@/app/dashboard/components/Upload";

type PropertyFormData = z.infer<typeof PropertySchema>;

const PropertyForm = ({
  property,
  url,
}: {
  property?: Property;
  url?: string;
}) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PropertyFormData>({
    resolver: zodResolver(PropertySchema),
  });

  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [src, setUrl] = useState("");

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      if (property) await axios.patch("/api/properties/" + property.id, data);
      await axios.post("/api/properties", data);
      router.push("/listings/lists");
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
        <Upload src={setUrl} />
        {<Input placeholder={src} value={src} {...register("imgSrc")} />}
        <Button disabled={isSubmitting} type="submit">
          {property ? "Update Property" : "Submit"}{" "}
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default PropertyForm;
