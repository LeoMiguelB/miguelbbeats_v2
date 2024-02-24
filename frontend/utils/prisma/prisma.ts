import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

// the following routine helps to avoid creating multiple instances of the client due to hot reloading
declare global {
  var prisma: PrismaClient | undefined;
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;

