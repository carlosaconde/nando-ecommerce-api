const { PrismaClient } = require("./src/generated/prisma");
const prisma = new PrismaClient();

console.log("Modelos disponibles:", Object.keys(prisma));
console.log("Prisma client:", prisma);
