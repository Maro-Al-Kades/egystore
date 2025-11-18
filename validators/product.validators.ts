import { formatNumberWithDecimal } from "@/lib/utils";
import z from "zod";

const currency = z
  .string()
  .refine((value) =>
    /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value)))
  );

export const insertProductSchema = z.object({
  name: z.string().min(3, "اسم المنتج يجب أن يكون 3 أحرف على الأقل"),
  slug: z.string().min(3, "عنوان المنتج يجب أن يكون 3 أحرف على الأقل"),
  category: z.string().min(3, "التصنيف يجب أن يكون 3 أحرف على الأقل"),
  brand: z.string().min(2, "العلامة التجارية يجب أن تكون 2 أحرف على الأقل"),
  description: z.string().min(10, "وصف المنتج يجب أن يكون 10 أحرف على الأقل"),
  stock: z.coerce.number().min(0, "المخزون لا يمكن أن يكون سالبًا"),
  images: z
    .array(z.string().url("يجب أن يكون رابط صورة صالحًا"))
    .min(1, "يجب إضافة صورة واحدة على الأقل"),

  isFeatured: z.boolean().optional(),
  banner: z.string().url("يجب أن يكون رابط بانر صالحًا").nullable().optional(),
  price: currency,
});
