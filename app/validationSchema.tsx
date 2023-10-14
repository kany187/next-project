import { z } from "zod";

export const PropertySchema = z.object({
  price: z.string().min(1, "Price is required").max(255),
  bed: z.string().min(1).max(255),
  bath: z.string().min(1).max(255),
  city: z.string().min(1).max(255),
  country: z.string().min(1).max(255),
  streetAddress: z.string().min(1).max(255),
  imgSrc: z.string().min(1).max(255),
});

export const pathPropertySchema = z.object({
  price: z.string().min(1, "Price is required").max(255).optional(),
  bed: z.string().min(1).max(255).optional(),
  bath: z.string().min(1).max(255).optional(),
  city: z.string().min(1).max(255).optional(),
  country: z.string().min(1).max(255).optional(),
  streetAddress: z.string().min(1).max(255).optional(),
  imgSrc: z.string().min(1).max(255).optional(),
  assignedToUserId: z
    .string()
    .min(1, "AssignedToUserId is required")
    .max(255)
    .optional()
    .nullable(),
});
