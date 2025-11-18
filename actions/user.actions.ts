"use server";

import { signIn, signOut } from "@/auth";
import { SignInFormSchema } from "@/validators/auth.validators";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { ZodError } from "zod";

export const SignInWithCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  try {
    const user = SignInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    await signIn("credentials", {
      email: user.email,
      password: user.password,
    });

    return { success: true, message: "تم تسجيل الدخول بنجاح", error: null };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    if (error instanceof ZodError) {
      return { success: false, message: "البيانات غير صالحة" };
    }

    return {
      success: false,
      message: "يتعذر تسجيل الدخول قد يكون الايميل او كلمة السر غير صحيحين",
    };
  }
};

export const SignOutUser = async () => {
  await signOut();
};
