import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { APP_NAME } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CredentialsSignInForm from "../_components/credentials-signin-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "تسجيل الدخول",
};

const SignInRoute = async (props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) => {
  const { callbackUrl } = await props.searchParams;

  const session = await auth();

  if (session) {
    return redirect(callbackUrl || "/");
  }
  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-4">
          <Link href={`/`} className="flex-center">
            <Image
              src={`/logo.svg`}
              width={100}
              height={100}
              alt={`${APP_NAME} logo`}
              priority
            />
          </Link>

          <div className="space-y-2">
            <CardTitle className="text-center h3-bold text-primary">
              تسجيل الدخول
            </CardTitle>
            <CardDescription className="text-center">
              تسجيل الدخول الي حسابك الشخصي
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <CredentialsSignInForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInRoute;
