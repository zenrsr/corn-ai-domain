import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}
export const client = globalThis.prisma || new PrismaClient();

// console.log({ client });

if (process.env.NODE_ENV !== "production") globalThis.prisma = client;
