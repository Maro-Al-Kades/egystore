"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-[300px] border rounded-lg object-cover object-center"
      />

      <div className="flex gap-3 items-center justify-start">
        {images.map((image, index) => (
          <div
            className={cn("border cursor-pointer hover:border-primary/40 rounded-lg", current === index && "border-primary/40")}
            key={index}
            onClick={() => setCurrent(index)}
          >
            <Image
              className="rounded-lg"
              src={image}
              alt={`product image ${index}`}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
