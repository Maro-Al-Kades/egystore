"use client";

import { APP_NAME } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Header = () => {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/set-state-in-effect
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href={`/`} className="flex-start">
            <Image
              src="/logo.svg"
              alt={`${APP_NAME} logo`}
              width={150}
              height={100}
              priority
            />

            {/* <span
              className={cn(
                "hidden lg:block font-semibold text-2xl mr-3",
                theme === "light" ? "text-primary" : ""
              )}
            >
              {APP_NAME}
            </span> */}
          </Link>
        </div>

        <Menu />
      </div>
    </header>
  );
};
