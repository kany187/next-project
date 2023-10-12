import { z } from "zod";

export const PropertySchema = z.object({
  price: z.string().min(1, "Price is required").max(255),
  bed: z.string().min(1).max(255),
  bath: z.string().min(1).max(255),
  city: z.string().min(1).max(255),
  country: z.string().min(1).max(255),
  streetAddress: z.string().min(1).max(255),
});
