import "dotenv/config";

import { PrismaClient } from "@/lib/generated/prisma/client";
import sampleData from "./sample-data";

async function main() {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.account.deleteMany({});
  await prisma.session.deleteMany({});
  await prisma.verificationToken.deleteMany({});

  await prisma.product.createMany({ data: sampleData.products });
  await prisma.user.createMany({
    data: sampleData.users.map((u) => ({
      ...u,
      // ensure required field 'address' is present; provide a default if missing
      address: (u as any).address ?? "",
    })),
  });

  console.log(`Database seeded successfully`);
}

main();
