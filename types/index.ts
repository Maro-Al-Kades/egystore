import { insertProductSchema } from "@/validators/product.validators";
import z from "zod";

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
  updatedAt: Date;
};
