"use client";

import { SignInWithCredentials } from "@/actions/user.actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { SIGN_IN_DEFAULT_VALUES } from "@/constants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const CredentialsSignInForm = () => {
  const [data, action] = useActionState(SignInWithCredentials, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const SignInButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button disabled={pending} className="w-full">
        {pending ? (
          <div className="flex gap-2">
            جاري تسجيل الدخول...
            <Spinner className=" animate-spin" />
          </div>
        ) : (
          "تسجيل الدخول"
        )}
      </Button>
    );
  };

  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />

      <div className="space-y-6">
        <div className="space-y-3">
          <Label htmlFor="email">الايميل</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={SIGN_IN_DEFAULT_VALUES.email}
            placeholder={SIGN_IN_DEFAULT_VALUES.email as string}
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="password">كلمة السر</Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="password"
            defaultValue={SIGN_IN_DEFAULT_VALUES.password}
            placeholder={SIGN_IN_DEFAULT_VALUES.password as string}
          />
        </div>

        <div className="">
          <SignInButton />
        </div>

        {data && !data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}

        <div className="text-sm text-center text-muted-foreground">
          ليس لديك حساب ؟{" "}
          <Link href={`sign-up`} target="_slef" className="text-primary">
            تسجيل حساب جديد
          </Link>
        </div>
      </div>
    </form>
  );
};

export default CredentialsSignInForm;
