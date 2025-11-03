"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { APP_NAME } from "@/constants";
import Image from "next/image";

const NotFoundRoute = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-screen">
      <Image
        src={`/logo.svg`}
        width={70}
        height={70}
        alt={`${APP_NAME} logo`}
        priority
      />

      <Card className="p-6 w-1/3  text-center">
        <h1 className="text-4xl text-primary font-bold mb-2">خطأ 404</h1>

        <p className="text-muted-foreground">هذه الصفحة غير موجودة في المنصة</p>

        <Button
          variant={`outline`}
          className="mt-3 mr-2"
          onClick={() => (window.location.href = "/")}
        >
          العودة إلى الصفحة الرئيسية
        </Button>
      </Card>
    </div>
  );
};

export default NotFoundRoute;
