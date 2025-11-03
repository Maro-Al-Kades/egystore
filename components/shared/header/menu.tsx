import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import {
  EllipsisVertical,
  MenuIcon,
  ShoppingBag,
  UserIcon,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-2">
        <ModeToggle />
        <Button asChild variant={`secondary`}>
          <Link href={`/cart`}>
            <ShoppingBag /> عربة التسوق
          </Link>
        </Button>
        <Button asChild>
          <Link href={`/sign-in`}>
            <UserIcon /> تسجيل الدخول
          </Link>
        </Button>
      </nav>

      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger asChild className="align-middle">
            <Button size={`icon`}>
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent dir="rtl" className="p-10 flex flex-col items-start">
            <SheetTitle>القائمة</SheetTitle>
            <Button asChild variant={`ghost`}>
              <Link href={`/cart`}>
                <ShoppingBag /> عربة التسوق
              </Link>
            </Button>
            <Button asChild>
              <Link href={`/sign-in`}>
                <UserIcon /> تسجيل الدخول
              </Link>
            </Button>
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
