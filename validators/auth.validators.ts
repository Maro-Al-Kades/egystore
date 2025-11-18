import z from "zod";

export const SignInFormSchema = z.object({
  email: z.string().email("خطأ في صيغة الايميل الخاص بك"),
  password: z.string().min(6, "كلمة السر يجب ان تحتوي علي 6 احرف علي الاقل"),
});
